import Ember from 'ember';

export default Ember.Controller.extend({

	recipe: null,


	ingredients: null,


	actions: {

		saveRecipe: function() {
			var recipe, newRecipe;

			recipe = this.get('recipe').getProperties([ 'name', 'description' ]);

			newRecipe = this.store.createRecord('recipe', recipe);

			this.get('ingredients').forEach(function(ingredient) {
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
		},


		addIngredient: function() {
			this.get('ingredients').pushObject(Ember.Object.create());
		}

	}
});
