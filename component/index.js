var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function constr() {
    generators.Base.apply(this, arguments);

    this.option('coffee');
  },

  hello: function hello() {
    this.log('component test');
  },
});
