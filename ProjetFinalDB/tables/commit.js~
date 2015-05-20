var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('Commit', {
	contain: {type: connection.Sequelize.STRING},
  from: {type: connection.Sequelize.STRING}
});
