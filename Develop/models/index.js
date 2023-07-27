// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const sequelize = require('../config/connection');

// Products belongsTo Category
Product.belongsTo(Category)

// Categories have many Products
Category.hasMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  }
})
// Product.hasMany(Tag)
// Tag.hasMany(Product)

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
