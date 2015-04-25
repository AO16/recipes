import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		updateRecipe: function() {
			this.get('model').save()
				.then(function() {
					this.transitionToRoute('recipes');
				}.bind(this));
		}

	}

});
