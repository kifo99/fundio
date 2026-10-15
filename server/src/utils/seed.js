import 'dotenv/config';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { Model } from 'objection';

import knex from '../config/config.js';
import User from '../data/models/User.js';
import Product from '../data/models/Product.js';
import knexConfig from '../config/config.js';

import { TEMPLATES } from '../helpers/templates.js';
import { CATEGORIES } from '../helpers/categories.js';

faker.seed(42);

const VENDOR_COUNT = 30;
const DEV_PASSWORD = 'Password123@';
const EMAIL_DOMAIN = 'seed.example.com';

const passwordHash = await bcrypt.hash(DEV_PASSWORD, Number(process.env.SALT));

const VARIANTS = [
  'Classic',
  'Rustic',
  'Small-batch',
  'Signature',
  'Heritage',
  'Artisan',
  'Traditional',
  'Cozy',
  'Everyday',
  'Limited',
];

for (const c of CATEGORIES) {
  if (!TEMPLATES[c]?.length) throw new Error(`No template for category ${c} in templates.js`);
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function makeVendor(i) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `vendor${i + 1}@${EMAIL_DOMAIN}`,
    password: passwordHash,
    role: 'Vendor',
    vendorStatus: 'verified',
    emailVerified: true,
  };
}
function makeProducts(i) {
  const vendorKey = `vendor${i + 1}`;

  const main = faker.helpers.arrayElement(CATEGORIES);
  const categories = [main];
  if (faker.datatype.boolean(0.25)) {
    categories.push(faker.helpers.arrayElement(CATEGORIES.filter((c) => c !== main)));
  }

  const count = faker.number.int({ min: 3, max: 6 });
  const seen = new Set();
  const products = [];

  while (products.length < count) {
    const category = faker.helpers.arrayElement(categories);
    const t = faker.helpers.arrayElement(TEMPLATES[category]);
    const productName = `${faker.helpers.arrayElement(VARIANTS)} ${t.productName}`;

    if (productName.length > 45) continue; // schema maxLength
    if (seen.has(productName)) continue; // no duplicates per vendor
    seen.add(productName);

    const [min, max] = t.price;
    products.push({
      productName,
      category,
      price: faker.number.float({ min, max, fractionDigits: 2 }),
      discount: faker.helpers.arrayElement([0, 0, 0, 0, 0, 0, 0, 10, 15, 20, 25]),
      description: t.description,
      productImg: `https://picsum.photos/seed/${slugify(`${vendorKey}-${productName}`)}/600/400`,
    });
  }
  return products;
}

async function main() {
  try {
    // Wipe previous seed data (products first, then users)
    const like = `%@${EMAIL_DOMAIN}`;
    const oldIds = await knex('user').where('email', 'like', like).pluck('id');
    if (oldIds.length) {
      await knex('product').whereIn('vendorId', oldIds).del();
      await knex('user').whereIn('id', oldIds).del();
    }

    let productTotal = 0;

    await Model.transaction(async (trx) => {
      for (let i = 0; i < VENDOR_COUNT; i++) {
        const user = await User.query(trx).insert(makeVendor(i));

        for (const p of makeProducts(i)) {
          await Product.query(trx).insert({ ...p, vendorId: user.id });
          productTotal++;
        }
      }
    });

    const { rows } = await knex.raw('select current_database() as db, inet_server_port() as port');
    console.log('Connected to:', rows[0]);

    console.log(`Seeded ${VENDOR_COUNT} vendors and ${productTotal} products.`);
    console.log(`Log in as vendor1@${EMAIL_DOMAIN} ... vendor${VENDOR_COUNT}@${EMAIL_DOMAIN}`);
    console.log(`Password: ${DEV_PASSWORD}`);
  } catch (err) {
    console.error('Seed failed, rolled back:', err);
    process.exitCode = 1;
  } finally {
    await knex.destroy();
  }
}

main();
