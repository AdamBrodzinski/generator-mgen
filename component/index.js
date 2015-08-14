var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function constr() {
    generators.Base.apply(this, arguments);
    this.option('path');
    this.argument('name', { type: String, required: true });
  },

  hello: function hello() {
    var nameLower = this.name.toLowerCase();
    var name = this.name;
    var destPath = 'components/'+nameLower+'/'+name+'.js';

    this.fs.copyTpl(
      this.templatePath('comp.js'),
      this.destinationPath(destPath),
      { name: name }
    );
    this.log('Creating component files...\n');
  },
});
