import Ember from 'ember';

export default Ember.Component.extend({

	recipe: null,


	ingredients: null,


	steps: null,


	actions: {

		saveRecipe: function() {
			this.sendAction('action');
		},


		addIngredient: function() {
			this.sendAction('addIngredient');
		},


		addStep: function() {
			this.sendAction('addStep');
		}

	}

});
