import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  prepTime: DS.attr('number'),
  cookTime: DS.attr('number'),
  servings: DS.attr('number'),
  originalLink: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', { async: true, inverse: 'recipe' }),
  steps: DS.hasMany('step', { async: true, inverse: 'recipe' })
});
