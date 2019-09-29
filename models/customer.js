module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("customer", {
      fname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lname: {
        type: DataTypes.TEXT,
        allowNull: false
        
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
        allowNull: false
        
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false
        
      },
      zip: {
        type: DataTypes.TEXT,
        allowNull: false
        
      },
      country: {
        type: DataTypes.TEXT,
        allowNull: false
        
      },
      userpassword: {
        type: DataTypes.TEXT,
        allowNull: false
      },

    });
    return Customer;
  };
  