<<<<<<< HEAD
var recipes = {};



function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object, {[key]:value})
  }
  
  function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)  
  delete newObj[key]
    return newObj
  }
  
  function destructivelyDeleteFromObjectByKey(object, key){
    
    delete object[key]
    return object
  }
=======
var recipes
>>>>>>> e745408d03b25d72c8f60c84db8a28125efa3841
