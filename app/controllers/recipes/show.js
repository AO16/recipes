import Ember from 'ember';

export default Ember.Controller.extend({

	// TODO: potentially combine recipe-mixin.saveCollection to reuse code
	removeCollection: function(recipeRecord, name) {
		return new Promise(function(resolve) {
			if (recipeRecord.get(name + 's.length') === 0) {
				return resolve(null);
			}
			recipeRecord.get(name + 's').forEach(function(item) {
				item.deleteRecord();
				item.save()
					.then(function() {
						recipeRecord.get(name + 's').removeObject(item);
						if (recipeRecord.get(name + 's.length') === 0) {
							return resolve(recipeRecord.get(name + 's'));
						}
					});
			});
		}.bind(this));
	},


	actions: {

		deleteRecipe: function() {
			this.removeCollection(this.get('model'), 'ingredient')
				.then(function() {
					this.removeCollection(this.get('model'), 'step')
						.then(function() {
							this.get('model').deleteRecord();
							this.get('model').save();
							this.transitionToRoute('recipes');
						}.bind(this));
				}.bind(this));
		}

	}
});
