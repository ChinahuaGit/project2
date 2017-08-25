const Bookshelf = require('../bookshelf');
require('./depts')
require('./classes')

const Sub_Class = Bookshelf.Model.extend({
  tableName: 'subclass',
  hasTimestamps: true,
  dept: function () {
    return this.belongsTo('Class');
  }
});

module.exports = Bookshelf.model('Sub_Class', Sub_Class);
