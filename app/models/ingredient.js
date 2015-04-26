import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  name: DS.attr('string'),
  unit: DS.attr('string'),
  recipe: DS.belongsTo('recipe')
});
