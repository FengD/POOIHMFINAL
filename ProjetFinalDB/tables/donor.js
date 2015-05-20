var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Donor', {
	name: {type: connection.Sequelize.STRING},
  surname: {type: connection.Sequelize.STRING},
  email: {type: connection.Sequelize.STRING},
  donate_money: {type: connection.Sequelize.INTEGER}
});
