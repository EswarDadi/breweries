module.exports=(sequelize,DataTypes)=>{
    const Brewery=sequelize.define("Brewery",{
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          breweryType: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          street: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          city: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          state: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          postalCode: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          country: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          longitude: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          latitude: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          websiteUrl: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        }, )
        Brewery.associate = (models) => {
          Brewery.hasMany(models.Reviews, {
            onDelete: "cascade",
          });
        };
    return Brewery
};