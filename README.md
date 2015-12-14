# localStorage.Scan
A simple extension for localStorage ( and sessionStorage ) to allow scanning for keys based on a regex.

- Takes a pattern to match against keys, and a callback which will be passed the Key and Value for each match.
- Returns a promise, mainly so that you can tell when the scan is finished.
- Promise will be resolved with a count of matches. Because why not.

Pretty Version
```
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
```
Minified
```
Storage.prototype.Scan=function(o,r){return new Promise(function(t,a){try{var c=0;for(var n in localStorage)n.match(o)&&(r(n,localStorage[n]),c++);t(c)}catch(e){a(e)}})};
```
Example Usage
```
localStorage.MyPrefix_foo = 1;
localStorage.MyPrefix_bar = 2;
localStorage.MyPrefix_baz = 3;

localStorage.Scan(/^MyPrefix_/,function(key,val){
 console.log(key + ': ' + val);
}).then(function(count){
  console.log("done. Handled: " + count);
});
```
That's all.
