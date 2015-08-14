var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function constr() {
    generators.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    this.ext = this.config.get('componentExtension') || '.jsx';
    this.log(this.config.getAll());
  },

  getPaths: function getPaths() {
    this.nameLower = this.name.toLowerCase();
    this.rootPath = 'components/';
    this.destPath = this.rootPath + this.nameLower + '/' + this.name + this.ext;
  },

  writeFile: function writeFile() {
    this.fs.copyTpl(
      this.templatePath('comp.js'),
      this.destinationPath(this.destPath),
      { name: this.name }
    );
    this.log('Creating component files...\n');
  },
});
