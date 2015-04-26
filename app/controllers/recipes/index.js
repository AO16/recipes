import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		deleteRecipe: function(recipe) {
			recipe.get('ingredients').forEach(function(ingredient) {
				ingredient.destroyRecord();
			});
			recipe.destroyRecord();
		}

	}

});
