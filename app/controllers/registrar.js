import Ember from 'ember';
import EmberValidators from 'ember-validations';

export default Ember.Controller.extend(EmberValidators,{
  
  validations: {
    'model.username': {
      presence: true,
      presence: { message: 'El username no debe estar vacío' }
    	},
    'model.nombre': {
      presence: true,
      presence: { message: 'El nombre no debe estar vacío' }
    	}
 //    'model.password_digest': {
 //      confirmation: true,
 //        presence: {
 //       		message: 'Contraseña requerida'
 //       		}
	// 	},

	// 'model.password_digestConfirmation': {
 //        presence: {
 //    		message: 'Confirmar contraseña'
 //    		}
 //    	}
	},
	actions:{
		saveData(model){			
				this.validate().then(()=>{
					model.save().then(()=>{
	      				alert("Usuario creado");
	      				this.refresh();
					});
				}).catch(()=>{
					if(this.get('errors.model.nombre').length != 0 && this.get('errors.model.username').length != 0){
						alert("No deben existir campos vacios");
					}
					else if(this.get('errors.model.username').length != 0){
						alert(this.get('errors.model.username'));
					}
					else if(this.get('errors.model.nombre').length != 0 ){
						alert(this.get('errors.model.nombre'));					
					}
					// else if(this.get('errors.model.password_digest').length != 0 ){
					// 	alert(this.get('errors.model.password_digest'));					
					// }
					// else if(this.get('errors.model.password_digestConfirmation').length != 0 ){
					// 	alert(this.get('errors.model.password_digestConfirmation'));					
					// }
				});
  				model.get('isValid');
  				return false;
	  		}
	 }
});
