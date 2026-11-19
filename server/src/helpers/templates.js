// Each template: productName, description (100-250 chars), price [min, max], tags (max 5)
// Tags here are seed data only. Vendors can create any tag they like in the app.
export const TEMPLATES = {
  food: [
    {
      productName: 'Wild honey, 500g',
      description:
        'Raw wildflower honey from small family hives, poured by hand into glass jars. Sweet, floral and unfiltered, perfect for tea or toast.',
      price: [8, 18],
      tags: ['preserves', 'homemade'],
    },
    {
      productName: 'Sourdough loaf',
      description:
        'Slow-fermented sourdough baked fresh in small batches. Crisp golden crust, soft tangy crumb, and no preservatives or additives of any kind.',
      price: [5, 9],
      tags: ['bakery', 'homemade', 'vegan'],
    },
    {
      productName: 'Chili crisp jar',
      description:
        'Crunchy garlic and chili oil made in small batches with toasted spices. Spoon it over eggs, noodles or rice for a warm, savory kick.',
      price: [7, 14],
      tags: ['snacks', 'homemade', 'vegan'],
    },
    {
      productName: 'Fig jam',
      description:
        'Thick fig jam cooked slowly in copper pots with a squeeze of lemon. Lovely on cheese boards, warm bread or stirred into plain yogurt.',
      price: [6, 12],
      tags: ['preserves', 'homemade', 'vegan'],
    },
    {
      productName: 'Herbal tea blend',
      description:
        'A calming loose-leaf blend of chamomile, mint and lemon balm, dried and mixed by hand. Packed in a resealable tin to keep it fresh.',
      price: [6, 13],
      tags: ['drinks', 'vegan'],
    },
    {
      productName: 'Handmade granola',
      description:
        'Oven-toasted oats, nuts and seeds lightly sweetened with maple syrup. Baked in small trays for extra crunch, with no refined sugar added.',
      price: [7, 12],
      tags: ['snacks', 'homemade', 'vegan'],
    },
    {
      productName: 'Lemon drizzle cake',
      description:
        'Moist lemon sponge baked from scratch with free-range eggs and finished with a tangy sugar glaze. Baked to order and wrapped in a gift box.',
      price: [12, 24],
      tags: ['cakes', 'bakery', 'homemade', 'desserts'],
    },
    {
      productName: 'Fudge brownies, box of 6',
      description:
        'Rich, gooey chocolate brownies baked in small batches with dark chocolate and sea salt. Packed in a sturdy box that travels well to any party.',
      price: [10, 20],
      tags: ['desserts', 'bakery', 'homemade'],
    },
  ],

  arts: [
    {
      productName: 'Watercolor print',
      description:
        'A giclée print of an original watercolor, painted with soft washes and fine detail. Printed on thick cotton paper and ready to frame.',
      price: [15, 45],
      tags: ['prints', 'paintings'],
    },
    {
      productName: 'Linocut art print',
      description:
        'Hand-carved linocut printed one sheet at a time with oil-based ink. Each print is slightly unique and signed by the artist.',
      price: [18, 50],
      tags: ['prints', 'original'],
    },
    {
      productName: 'Acrylic canvas painting',
      description:
        'An original acrylic painting on stretched canvas, finished with a protective varnish. Bold colors and textured brushwork, ready to hang.',
      price: [40, 140],
      tags: ['paintings', 'original'],
    },
    {
      productName: 'Ink illustration print',
      description:
        'Detailed black ink illustration scanned and printed on smooth archival paper. A graphic piece that suits desks, shelves and gallery walls.',
      price: [14, 38],
      tags: ['prints', 'illustration'],
    },
    {
      productName: 'Pressed flower art',
      description:
        'Real flowers picked, pressed and arranged by hand inside a simple wooden frame. A delicate, natural piece that brightens any room.',
      price: [25, 65],
      tags: ['botanical', 'original'],
    },
    {
      productName: 'Hand-drawn cards, set of 5',
      description:
        'Five blank greeting cards, each illustrated by hand and printed on recycled card stock. Comes with envelopes, ready for any occasion.',
      price: [10, 22],
      tags: ['cards', 'illustration'],
    },
  ],

  crafts: [
    {
      productName: 'Macramé wall hanging',
      description:
        'Knotted by hand from soft natural cotton cord and hung on a driftwood branch. Adds a warm, bohemian touch to any bedroom or living room.',
      price: [25, 70],
      tags: ['home-decor', 'textiles'],
    },
    {
      productName: 'Hand-painted mug',
      description:
        'Stoneware mug thrown, glazed and painted by hand, so no two are alike. Dishwasher and microwave safe, holds about 350 ml of coffee or tea.',
      price: [14, 32],
      tags: ['ceramics', 'kitchen'],
    },
    {
      productName: 'Woven basket',
      description:
        'A sturdy basket woven from natural seagrass with two strong handles. Great for storing blankets, toys, laundry or fresh market finds.',
      price: [20, 55],
      tags: ['storage', 'home-decor'],
    },
    {
      productName: 'Ceramic planter',
      description:
        'Small ceramic planter with a drainage hole and matching saucer, glazed in earthy tones. Ideal for succulents, herbs and cacti on a windowsill.',
      price: [18, 45],
      tags: ['ceramics', 'home-decor'],
    },
    {
      productName: 'Embroidered tote bag',
      description:
        'Heavy canvas tote hand-embroidered with a floral design. Roomy enough for groceries or books, with a reinforced strap and inner pocket.',
      price: [16, 38],
      tags: ['textiles', 'storage'],
    },
    {
      productName: 'Soy candle',
      description:
        'Hand-poured soy wax candle in a reusable glass jar, scented with essential oils. Burns cleanly for roughly 40 hours with a cotton wick.',
      price: [10, 24],
      tags: ['candles', 'home-decor'],
    },
  ],

  carpentry: [
    {
      productName: 'Oak serving board',
      description:
        'Solid oak serving board sanded smooth and finished with food-safe mineral oil. Perfect for bread, cheese and charcuterie at any gathering.',
      price: [30, 75],
      tags: ['kitchen'],
    },
    {
      productName: 'Walnut side table',
      description:
        'A compact side table made from solid walnut with tapered legs and a hand-rubbed oil finish. Joined without screws for lasting strength.',
      price: [120, 280],
      tags: ['furniture'],
    },
    {
      productName: 'Cedar planter box',
      description:
        'Rot-resistant cedar planter box built with sturdy joints and drainage gaps. Sized for herbs or flowers on a balcony, porch or patio.',
      price: [35, 90],
      tags: ['outdoor', 'decor'],
    },
    {
      productName: 'Hand-turned wooden bowl',
      description:
        'Turned on a lathe from a single block of local hardwood, then sanded and oiled. Use it for fruit, salads or as a decorative centerpiece.',
      price: [40, 110],
      tags: ['turned', 'kitchen', 'decor'],
    },
    {
      productName: 'Pine bookshelf',
      description:
        'A simple four-shelf bookcase in sustainably sourced pine with a natural finish. Easy to assemble and strong enough for heavy books.',
      price: [90, 240],
      tags: ['furniture'],
    },
    {
      productName: 'Maple cutting board',
      description:
        'Thick end-grain maple cutting board that is gentle on knives and built to last. Finished with beeswax and oil, with a juice groove.',
      price: [28, 65],
      tags: ['kitchen'],
    },
  ],

  diy: [
    {
      productName: 'Candle-making kit',
      description:
        'Everything you need to pour three candles at home: soy wax, wicks, jars, fragrance oil and clear instructions. Great for beginners and gifts.',
      price: [22, 45],
      tags: ['kits', 'candles', 'beginner'],
    },
    {
      productName: 'Leather wallet kit',
      description:
        'Pre-cut leather pieces, waxed thread and needles to stitch your own bifold wallet. No special tools needed, and it takes about two hours.',
      price: [24, 48],
      tags: ['kits', 'sewing'],
    },
    {
      productName: 'Terrarium kit',
      description:
        'Build a tiny garden in a glass jar. Includes soil, pebbles, moss, a small succulent and a step-by-step guide to keep it thriving.',
      price: [28, 60],
      tags: ['kits', 'gardening'],
    },
    {
      productName: 'Soap-making kit',
      description:
        'Make four bars of natural soap with this kit of glycerin base, molds, dried flowers and essential oils. Safe, simple and surprisingly fun.',
      price: [20, 42],
      tags: ['kits', 'soap', 'beginner'],
    },
    {
      productName: 'Embroidery starter kit',
      description:
        'A beginner embroidery kit with hoop, fabric, colored threads, needles and a printed pattern. Learn five basic stitches while making a keepsake.',
      price: [15, 32],
      tags: ['kits', 'sewing', 'beginner'],
    },
    {
      productName: 'Air-dry clay set',
      description:
        'Air-dry clay set with sculpting tools, paints and a brush. No kiln needed. Shape bowls, trinkets and ornaments, then paint them at home.',
      price: [18, 36],
      tags: ['kits', 'beginner'],
    },
  ],

  jewelry: [
    {
      productName: 'Silver hoop earrings',
      description:
        'Lightweight sterling silver hoops shaped and polished by hand. Hypoallergenic, comfortable for all-day wear and just right for everyday outfits.',
      price: [20, 48],
      tags: ['earrings', 'silver'],
    },
    {
      productName: 'Beaded bracelet',
      description:
        'Colorful glass seed beads strung by hand on strong stretch cord. Layer several together or wear one alone for a bright, playful touch.',
      price: [10, 26],
      tags: ['bracelets', 'beaded'],
    },
    {
      productName: 'Pendant necklace',
      description:
        'A delicate pendant on a fine sterling silver chain, cut and soldered by hand in a small studio. Arrives in a gift box ready to give.',
      price: [28, 70],
      tags: ['necklaces', 'silver'],
    },
    {
      productName: 'Stackable silver ring',
      description:
        'Slim sterling silver band hammered by hand for a soft texture. Stack a few together or wear one alone; made to order in your size.',
      price: [18, 40],
      tags: ['rings', 'silver'],
    },
    {
      productName: 'Beaded drop earrings',
      description:
        'Lightweight earrings made with tiny glass beads woven into a teardrop shape on hypoallergenic hooks. Bright enough to dress up any simple outfit.',
      price: [12, 28],
      tags: ['earrings', 'beaded'],
    },
    {
      productName: 'Charm bracelet',
      description:
        'Silver-plated chain bracelet with a few small hand-stamped charms and an adjustable clasp. Can be personalized with initials on request.',
      price: [22, 46],
      tags: ['bracelets', 'silver'],
    },
  ],

  clothing: [
    {
      productName: 'Chunky knit scarf',
      description:
        'Soft merino wool scarf knitted by hand in a thick ribbed pattern. Warm, cozy and long enough to wrap twice on the coldest winter days.',
      price: [30, 65],
      tags: ['knitwear', 'accessories', 'winter'],
    },
    {
      productName: 'Wool beanie',
      description:
        'Hand-knitted wool beanie with a folded brim and a stretchy fit. Warm without being itchy, and available in several earthy colors.',
      price: [18, 38],
      tags: ['knitwear', 'accessories', 'winter'],
    },
    {
      productName: 'Linen apron',
      description:
        'Washed linen apron sewn by hand with deep pockets and adjustable neck straps. Gets softer with every wash and suits cooks and crafters alike.',
      price: [25, 50],
      tags: ['accessories'],
    },
    {
      productName: 'Kids knit mittens',
      description:
        'Cozy hand-knitted mittens for small hands, lined with soft fleece and finished with a stretchy cuff that keeps snow and cold air out.',
      price: [14, 28],
      tags: ['knitwear', 'kids', 'winter'],
    },
    {
      productName: 'Knit baby booties',
      description:
        'Tiny hand-knitted booties in soft, washable yarn with a gentle cuff that stays put. A sweet gift for newborns and baby showers, sized 0 to 6 months.',
      price: [12, 24],
      tags: ['knitwear', 'kids'],
    },
    {
      productName: 'Cotton bandana set',
      description:
        'Set of three soft cotton bandanas, block-printed by hand in earthy patterns. Wear them as headbands, neck scarves or tie them onto a bag.',
      price: [14, 30],
      tags: ['accessories'],
    },
  ],

  plants: [
    {
      productName: 'Succulent trio',
      description:
        'Three healthy young succulents grown from cuttings in my greenhouse and potted in terracotta. Easy to care for and perfect for sunny windowsills.',
      price: [14, 30],
      tags: ['succulents', 'indoor', 'cuttings'],
    },
    {
      productName: 'Basil herb pot',
      description:
        'Fresh basil seedling grown organically and potted in a reusable pot. Snip leaves for pasta, pizza and salads all summer long on a sunny sill.',
      price: [6, 12],
      tags: ['herbs', 'indoor'],
    },
    {
      productName: 'Pothos cutting',
      description:
        'Rooted pothos cutting from a mature, healthy plant. Fast growing and forgiving, it thrives in low light and trails beautifully from shelves.',
      price: [8, 16],
      tags: ['indoor', 'cuttings'],
    },
    {
      productName: 'Mint and thyme set',
      description:
        'Two potted herbs, mint and thyme, grown without chemicals and ready to replant. Great for teas, roasts and a small kitchen garden.',
      price: [9, 18],
      tags: ['herbs', 'cuttings'],
    },
    {
      productName: 'Aloe vera plant',
      description:
        'Healthy aloe vera plant in a small terracotta pot, grown from my own mother plant. Needs little water and bright light, and soothes minor burns.',
      price: [10, 22],
      tags: ['succulents', 'indoor'],
    },
    {
      productName: 'Spider plant baby',
      description:
        'Rooted spider plant baby taken from a thriving parent plant. Hardy and fast growing, it cleans the air and looks lovely in a hanging pot.',
      price: [6, 14],
      tags: ['indoor', 'cuttings'],
    },
  ],
};
