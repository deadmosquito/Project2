module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("customer", {
      fname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lname: {
        type: DataTypes.TEXT,
        allowNull: true
        
      },
      email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        }
        
      },
      phone: {
          type: DataTypes.INTEGER,
          validate:{
            isNumeric: true
          }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true
        
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: true
        
      },
      zip: {
        type: DataTypes.TEXT,
        allowNull: true
        
      },
      country: {
        type: DataTypes.TEXT,
        allowNull: true
        
      },
      userpassword: {
        type: DataTypes.TEXT,
        allowNull: true
      },

    });
    return Customer;
  };
  