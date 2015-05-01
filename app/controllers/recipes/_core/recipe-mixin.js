import Ember from 'ember';

export default Ember.Mixin.create({

	recipe: null,


	ingredients: null,


	saveCollection: function(recipeRecord, name) {
		return new Promise(function(resolve) {
			if (recipeRecord.get(name + 's.length') === 0) {
				return resolve(null);
			}
			recipeRecord.get(name + 's').forEach(function(item, index) {
				item.save()
					.then(function() {
						if (index === (recipeRecord.get(name + 's.length') - 1)) {
							return resolve(recipeRecord.get(name + 's'));
						}
					});
			});
		}.bind(this));
	},


	actions: {

		saveRecipe: function() {
			var recipeRecord;

			recipeRecord = this.get('model');
			this.saveCollection(recipeRecord, 'ingredient')
				.then(function() {
					this.saveCollection(recipeRecord, 'step')
						.then(function() {
							recipeRecord.save()
								.then(function() {
									this.transitionToRoute('recipes');
								}.bind(this));
						}.bind(this));
				}.bind(this));
		},


		addIngredient: function() {
			this.get('model.ingredients').addObject(this.store.createRecord('ingredient'));
		},


		addStep: function() {
			this.get('model.steps').addObject(this.store.createRecord('step'));
		}

	}

});
