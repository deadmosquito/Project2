module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("product", {
      product_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
        
      },
      price: {
          type: DataTypes.DECIMAL,
          validate:{
            isDecimal: true
          }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
        
      },
      weight: {
        type: DataTypes.DECIMAL,
        isDecimal: true
        
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: true
        
      },
      specification: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      img:
      {
        type: DataTypes.STRING,
        allowNull:true
      }

    });
    return Product;
  };
  