import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {

		saveRecipe: function() {
			var recipe = this.get('model').getProperties([ 'name', 'description' ]);

			this.store.createRecord('recipe', recipe).save()
				.then(function(newRecipe) {
					this.get('model.ingredients').forEach(function(ingredient) {
						var ingredientProps = ingredient.getProperties([
							'quantity',
							'name',
							'unit'
						]);
						ingredientProps.recipe = newRecipe;
						this.store.createRecord('ingredient', ingredientProps).save()
							.then(function(newIngredient) {
								newRecipe.get('ingredients').pushObject(newIngredient);
								newRecipe.save();
							});
					}.bind(this));
					this.transitionToRoute('recipes');
				}.bind(this));
		},


		addIngredient: function() {
			this.get('model.ingredients').pushObject(this.store.createRecord('ingredient'));
		}

	}
});
