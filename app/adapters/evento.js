import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  
  host: 'http://localhost:3000',
  urlForCreateRecord(){
    return  `/evento/create_evento`;
  }, 

  urlForFindAll(){
  	return "lista";
  },
  urlForFindRecord (id, modelName, snapshot){
  	return `/verEvento/${id}`;
  }
});
