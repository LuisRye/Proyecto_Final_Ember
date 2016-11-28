import Ember from 'ember';
import EmberValidators from 'ember-validations';

export default Ember.Controller.extend(EmberValidators,{
  
  validations: {
    'model.nombre': {
      presence: true,
      presence: { message: 'El Nombre del evento no debe estar vacío' },
      length: { minimum: 2 }
    	},
    'model.ubicacion': {
      presence: true,
      presence: { message: 'La ubicación no debe estar vacío' },
      length: { minimum: 5 }
    	},
      'model.fecha': {
      presence: true,
      presence: { message: 'La fecha no debe estar vacío' },
    	},
      'model.maxInvitados': {
      presence: true,
      presence: { message: 'El Número maximo de invitados no debe estar vacío' },
    	}
	},

	actions:{
		saveData(model){			
			this.validate().then(()=>{
				model.save().then(()=>{
      				alert("Evento creado");
      				this.refresh();
			});

			}).catch(()=>{
				if(this.get('errors.model.nombre').length != 0 || this.get('errors.model.ubicacion').length != 0 || this.get('errors.model.fecha').length != 0 || this.get('errors.model.maxInvitados').length != 0){
					alert("No deben existir campos vacios");
				}

		});
		model.get('isValid');
		return false;
	  	}
	}
});
