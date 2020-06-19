const Shop = require("../models/shop");
const Menu = require("../models/menu");

// .select เลือกว่าจะเอาอะไรบ้าง  .sort เรียงอย่างไร
exports.index = async (req, res, next) => {
  const shops = await Shop.find()
    .select("name photo location")
    .sort({ _id: -1 });

  // เพื่อให้ Frontend ทำงานง่ายขึ้น  map Function
  const shopWithPhotoDomain = await shops.map((shop, index) => {
    return {
      id: shop._id,
      name: shop.name,
      photo: "http://localhost:3000/images/" + shop.photo,
      location: shop.location,
    };
  });

  res.status(200).json({
    data: shopWithPhotoDomain,
  });
};

// Get menu
exports.menu = async (req, res, next) => {
  // const menu = await Menu.find().select('+name -price');
  // const menu = await Menu.find().where('price').gt(300).sort('-_id');
  //  const menu = await Menu.find({ price: { $gte: 300 } });
  // const menu = await Menu.find({ price: { $gte: 300 } });
  const menu = await Menu.find().populate("shop", "name location").sort("-_id");

  res.status(200).json({
    data: menu,
  });
};

// Get shop by id with menu
exports.getShopWithMenu = async (req, res, next) => {
  const { id } = req.params;
  const shopWithMenu = await Shop.findById(id).populate('menus');

  res.status(200).json({
    data: shopWithMenu
  });
};

exports.insert = async (req, res, next) =>{
    const { name, location } = req.body;
    
    let shop = new Shop({
        name: name,
        location: location
    });
    await shop.save()
    
    res.status(201).json({
        message: 'Added have success!'
    });
}
