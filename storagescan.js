Storage.prototype.Scan = function(regex,callback){
	return new Promise(function(resolve,reject){
  		try{
  			var count = 0;
  			for(var key in localStorage){
			    if(key.match(regex)){
			      callback(key,localStorage[key]);
			      count++;
			    }
			}
			resolve(count);
  		}catch(exception){
  			reject(exception);
  		}
	});
};
