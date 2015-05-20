
var Myproject = require('../tables/myproject.js'),
   Commit = require('../tables/commit.js'),
   Donor = require('../tables/donor.js');

exports.init = function() {

  Myproject.schema.hasMany(Donor.schema); // a project has different donor
  Myproject.schema.hasMany(Commit.schema); //a project has different commit

  Donor.schema.belongsTo(Myproject.schema); // a role belongs to a user
  Commit.schema.belongsTo(Myproject.schema); // a role belongs to a project  
};
