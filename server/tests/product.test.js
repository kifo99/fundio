import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';
import { resetDb, closeDb } from '../src/helpers/db';

describe('Product', () => {
  let vendorAToken, vendorAId;
  let vendorBToken, vendorBId;

  const vendorA = {
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.williams.test@example.com',
    password: 'UserTest1@',
    confirmPassword: 'UserTest1@',
  };

  const vendorB = {
    firstName: 'Mike',
    lastName: 'Jordan',
    email: 'mike.jordan.test@example.com',
    password: 'UserTest1@',
    confirmPassword: 'UserTest1@',
  };

  let productTest;

  // Registers + logs in both vendors, returns their ids and tokens
  const signupAndLogin = async (vendor) => {
    const signupRes = await request(app).post('/auth/signup').send(vendor);
    const id = signupRes.body.user.id;

    const loginRes = await request(app)
      .post('/auth/login')
      .send({ email: vendor.email, password: vendor.password });

    return { id, token: loginRes.body.token };
  };

  beforeEach(async () => {
    await resetDb();

    const a = await signupAndLogin(vendorA);
    vendorAId = a.id;
    vendorAToken = a.token;

    const b = await signupAndLogin(vendorB);
    vendorBId = b.id;
    vendorBToken = b.token;

    productTest = {
      productName: 'Test Product',
      productImg: 'https://example.com/images/test-product.jpg',
      price: 19.99,
      discount: 0,
      description:
        'A product created for testing purposes. This description is intentionally long enough to satisfy the minimum length validation rule required by the schema for descriptions.',
    };
  });

  afterAll(async () => await closeDb());

  describe('POST /product/', () => {
    it('creates a product attributed to the authenticated vendor, ignoring a spoofed vendorId', async () => {
      // Vendor A sends B's id in the body — the server must ignore it
      const spoofedPayload = { ...productTest, vendorId: vendorBId };

      const res = await request(app)
        .post('/product/')
        .set('Authorization', `Bearer ${vendorAToken}`)
        .send(spoofedPayload);

      expect(res.status).toBe(201);
      expect(res.body.product.vendorId).toBe(vendorAId);
      expect(res.body.product.vendorId).not.toBe(vendorBId);
    });

    it('fails with 401 when no token is provided', async () => {
      const res = await request(app).post('/product/').send(productTest);

      expect(res.status).toBe(401);
    });
  });

  describe('PATCH /product/:productId (edit)', () => {
    let productId;

    beforeEach(async () => {
      const createRes = await request(app)
        .post('/product/')
        .set('Authorization', `Bearer ${vendorAToken}`)
        .send(productTest);

      productId = createRes.body.product.id;
    });

    it('allows vendor A to edit their own product', async () => {
      const res = await request(app)
        .patch(`/product/products/${productId}`)
        .set('Authorization', `Bearer ${vendorAToken}`)
        .send({ ...productTest, productName: 'Updated Name' });

      expect(res.status).toBe(200);
    });

    it("returns 403 when vendor B tries to edit vendor A's product", async () => {
      const res = await request(app)
        .patch(`/product/products/${productId}`)
        .set('Authorization', `Bearer ${vendorBToken}`)
        .send({ ...productTest, productName: 'Hijacked Name' });

      expect(res.status).toBe(403);
    });

    it('fails with 401 when no token is provided', async () => {
      const res = await request(app)
        .patch(`/product/products/${productId}`)
        .send({ ...productTest, productName: 'No Auth' });

      expect(res.status).toBe(401);
    });
  });

  describe('DELETE /product/:productId', () => {
    let productId;

    beforeEach(async () => {
      const createRes = await request(app)
        .post('/product/')
        .set('Authorization', `Bearer ${vendorAToken}`)
        .send(productTest);

      productId = createRes.body.product.id;
    });

    it("returns 403 when vendor B tries to delete vendor A's product", async () => {
      const res = await request(app)
        .delete(`/product/products/${productId}`)
        .set('Authorization', `Bearer ${vendorBToken}`);

      expect(res.status).toBe(403);
    });

    it('fails with 401 when no token is provided', async () => {
      const res = await request(app).delete(`/product/products/${productId}`);

      expect(res.status).toBe(401);
    });

    it('allows vendor A to delete their own product', async () => {
      const res = await request(app)
        .delete(`/product/products/${productId}`)
        .set('Authorization', `Bearer ${vendorAToken}`);

      expect(res.status).toBe(200);
    });
  });
});
