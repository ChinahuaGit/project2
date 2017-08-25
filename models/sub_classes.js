const Bookshelf = require('../bookshelf');
require('./depts')
require('./classes')

const Sub_Class = Bookshelf.Model.extend({
  tableName: 'sub_class',
  hasTimestamps: true,
  dept: function () {
    return this.belongsTo('Class');
  }
});

module.exports = Bookshelf.model('Sub_Class', Sub_Class);
