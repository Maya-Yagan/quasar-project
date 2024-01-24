import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const products = [
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Purex-Liquid-Laundry-Detergent-Mountain-Breeze-312-Fluid-Ounces-240-Loads_d43b9e5e-793c-42fc-b338-ce324fde1047.2265cfde753a131526294fa6a3a510b5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 29.5,
    title: 'Title 1',
    companyName: 'Company 1',
    productInfo: 'Product 1 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Arm-Hammer-Plus-OxiClean-Odor-Blasters-Fresh-Burst-77-Loads-Liquid-Laundry-Detergent-100-5-fl-oz_b4363157-09eb-4892-a176-fb7c272c8053.954155fb821127077e602585146c1332.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 19.99,
    title: 'Title 2',
    companyName: 'Company 2',
    productInfo: 'Product 2 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Arm-Hammer-Clean-Scentsations-In-Wash-Scent-Booster-Clean-Meadow-24-oz_0f89b0a9-c691-4e4c-9f1e-d336e6852ffb.f235aae72733e155b968e9f62dd17e9f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 7.95,
    title: 'Title 3',
    companyName: 'Company 3',
    productInfo: 'Product 3 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Great-Value-Bleach-81-fl-oz_10b64894-e8cd-47c6-895a-e5cd2c24123d.64247094c724bb68951fc9e8a6dfb753.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 4.46,
    title: 'Title 4',
    companyName: 'Company 4',
    productInfo: 'Product 4 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Suavitel-Fabric-Softener-Field-Flowers-105-oz_57fd2bf9-32a2-4803-ba48-ab8c6fc1fef5.a81f2907ca86891edf3488256d2acfae.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 10.0,
    title: 'Title 5',
    companyName: 'Company 5',
    productInfo: 'Product 5 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/OxiClean-Odor-Blasters-Versatile-Odor-and-Stain-Remover-Powder-5-lb_d2c478f0-d27b-4b56-adbf-35b8265038b6.c7ac28ff37a0475445305a8453249b8f.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 15.68,
    title: 'Title 6',
    companyName: 'Company 6',
    productInfo: 'Product 6 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Athletic-Works-Men-s-Rudy-Low-Top-Sneakers_bbca05ff-8044-441b-b3a1-12be796eacac.54f933dd065842260bd918e85270d945.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 16.98,
    title: 'Title 7',
    companyName: 'Company 7',
    productInfo: 'Product 7 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Ozark-Trail-Men-s-Free-Edge-Hiker-Boots_2834e08f-a704-4cd5-94e3-cfcb238d5527.01a739ffa972c03562520b92dd78020d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 49.95,
    title: 'Title 8',
    companyName: 'Company 8',
    productInfo: 'Product 8 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Crocs-Unisex-Crocband-Clog-Sandal_bf01f550-86b7-4588-b347-b1a289909191.e3fc6c124b519489bd7a9076b645d13e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 25.5,
    title: 'Title 9',
    companyName: 'Company 9',
    productInfo: 'Product 9 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Chaps-Women-s-Harper-Moc-Toe-Loafers_c55a2f1b-5617-4c2e-ae80-ff2b1dff6bfd.385e1d5e55ef7c03cc56f6b13c8ffcc6.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 20.88,
    title: 'Title 10',
    companyName: 'Company 10',
    productInfo: 'Product 10 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/asr/f0b4c4a6-cac9-41e7-818c-77b4ad3cd9dd.358d046d5da85f95ad754bee05e11ce8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 14.77,
    title: 'Title 11',
    companyName: 'Company 11',
    productInfo: 'Product 11 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/No-Boundaries-Women-s-Platform-Casual-Lace-Up-Sneakers-Wide-Width-Available_74128ce8-29c6-4e41-aeee-1029259ed033.28ef21cb0dda1fdaeb2a544b0b06e819.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 16.98,
    title: 'Title 12',
    companyName: 'Company 12',
    productInfo: 'Product 12 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Foster-Grant-Women-s-Cat-Eye-Everyday-Sunglasses-Multicolor_7a45e6da-df06-4757-92e2-759be26fa27c.355acea746f53fda1b73b79d9cc5a728.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 11.5,
    title: 'Title 13',
    companyName: 'Company 13',
    productInfo: 'Product 13 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Chaps-Boys-Crewneck-Sweater-with-Long-Sleeves-Sizes-4-18_8ee98f21-87fd-4736-bb34-f001f0e12304.3160b22e6022b3f519be538a824346d9.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
    price: 19.99,
    title: 'Title 14',
    companyName: 'Company 14',
    productInfo: 'Product 14 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Restored-Apple-Watch-SE-44mm-GPS-Space-Gray-Aluminum-Case-Black-Sport-Band-Used-Refurbished_b30a6872-11ba-4f01-8e50-d31d6071d018.b88866bd2ac2c66b56d10f5da9aed496.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 290.95,
    title: 'Title 15',
    companyName: 'Company 15',
    productInfo: 'Product 15 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/SwissTech-Excursion-18-Travel-Backpack-with-USB-Port-Unisex-Blue-All-Ages-Walmart-Exclusive_c123f4c2-27c3-486d-a455-a453e1b7a88c_1.a1877a68304f2323aec25c7950b4efa5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 52,
    title: 'Title 16',
    companyName: 'Company 16',
    productInfo: 'Product 16 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Trailmaker-Boys-Printed-Backpack-with-Pencil-Pouch-for-School-Kids-Blue-Hued_d632e6b8-327b-4243-a561-8ed741354387.aac01aa54eca52d20ba79c3af866740f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 9.99,
    title: 'Title 17',
    companyName: 'Company 17',
    productInfo: 'Product 17 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/asr/1902b0a5-4842-4343-8e6c-5e5707d80ab2.91b8cf926c957b74c18f8de25f90c095.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 10.99,
    title: 'Title 18',
    companyName: 'Company 18',
    productInfo: 'Product 18 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/vitafusion-Vitamin-B12-Gummy-Vitamins-Raspberry-Flavored-140-Count_a8610e87-1606-4141-ba5d-799ddbdf4d34.75c69dc25b4c687be3c758e347ceee14.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 9.99,
    title: 'Title 19',
    companyName: 'Company 19',
    productInfo: 'Product 19 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/vitafusion-Power-C-Vitamin-C-Gummies-for-Immune-Support-Orange-Flavored-150-Count_e1b8ac5c-07d2-4cb9-85c8-c6772e2471b0.d84855915dbc20b1bed119caeeb61ea4.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 29.5,
    title: 'Title 20',
    companyName: 'Company 20',
    productInfo: 'Product 20 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Emergen-C-Crystals-On-The-Go-Emergen-C-Immune-Support-Orange-Vitality-28-Stick-Packs_35844928-416c-43da-882a-d49830e7570a.67425899dfd1964e5967022427023ccb.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: 12.5,
    title: 'Title 21',
    companyName: 'Company 21',
    productInfo: 'Product 21 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/Emergen-C-Vitamin-C-Immune-Support-Supplement-Gummies-Elderberry-36-Ct_83b77e71-28e0-4d78-b9a2-f3a11d0afa97.df1e8ea5ca580f9bac0a0627c69f8920.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 11.82,
    title: 'Title 22',
    companyName: 'Company 22',
    productInfo: 'Product 22 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
    price: 19.99,
    title: 'Title 23',
    companyName: 'Company 23',
    productInfo: 'Product 23 info',
  },
  {
    imgLink:
      'https://i5.walmartimages.com/seo/vitafusion-Power-C-Vitamin-C-Gummies-for-Immune-Support-Orange-Flavor-164-Count_841c2eb4-a15c-49e8-82bb-5de27f7b12fc.92257fe1f1cd35fdefd3acad317b0afe.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    price: 11.53,
    title: 'Title 24',
    companyName: 'Company 24',
    productInfo: 'Product 24 info',
  },
];

// Example endpoint
app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
