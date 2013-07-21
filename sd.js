//     sd.js 0.0.1
//     https://github.com/SecretDeveloper/sdjs
//     (c) 2013-2013 Gary Kenneally
//     sdjs may be freely distributed under the MIT license.


(function() {
	
	// get the root object running this instance.
	var root = this;
	
	// 
	var sd = function(obj){
		if(obj instanceof sd) return obj; 
		if(!(this instanceof sd)) return new sd(obj);	
		this._sd = obj;
	};
	
	root.sd = sd;
	
	/*	
		If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
		The sum of these multiples is 23.
		Find the sum of all the multiples of 3 or 5 below 1000.
	*/
	sd.problem1 = function(){
		return _.reduce(_.range(0,1000), function(memo, number){		
			if( number%3===0 || number%5==0) return memo+number;
			return memo;}
		);		
	};

}).call(this);