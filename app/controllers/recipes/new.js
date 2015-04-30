import Ember from 'ember';

export default Ember.Controller.extend({

	recipe: null,


	ingredients: null,


	steps: null,


	saveCollection: function(recipeRecord, name, properties) {
		this.get(name + 's').forEach(function(item) {
			var itemProps = item.getProperties(properties);
			itemProps.recipe = recipeRecord;
			this.store.createRecord(name, itemProps).save()
				.then(function(itemRecord) {
					recipeRecord.get(name + 's').pushObject(itemRecord);
					recipeRecord.save();
				});
		}.bind(this));
	},


	actions: {

		saveRecipe: function() {
			var recipe, recipeRecord;

			recipe = this.get('recipe').getProperties([ 'name', 'description' ]);

			recipeRecord = this.store.createRecord('recipe', recipe);

			this.saveCollection(recipeRecord, 'ingredient', [
				'quantity',
				'name',
				'unit'
			]);

			this.saveCollection(recipeRecord, 'step', [ 'description' ]);

			this.transitionToRoute('recipes');
		},


		addIngredient: function() {
			this.get('ingredients').pushObject(Ember.Object.create());
		},


		addStep: function() {
			this.get('steps').pushObject(Ember.Object.create());
		}

	}
});
