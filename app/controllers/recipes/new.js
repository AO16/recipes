import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {

		saveRecipe: function() {
			var recipe = this.get('model').getProperties([ 'name', 'description' ]);

			this.store.createRecord('recipe', recipe).save()
				.then(function() {
					this.transitionToRoute('recipes');
				}.bind(this));
		}

	}
});
