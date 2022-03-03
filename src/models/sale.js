module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    nftID: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    tokenId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    etherValue: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    transactionHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outlier: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  Sale.associate = function (models) {
    models.Sale.belongsTo(models.Nft, { foreignKey: 'nftID' });
  };
  return Sale;
};
