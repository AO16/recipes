import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  recipe: DS.belongsTo('recipe')
});
