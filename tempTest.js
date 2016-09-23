var Test = {
	Celsias : function(tempF){
		var tempC;
		try{
			if(isNaN(tempF)==true) throw "Not a Number";
			if(tempF == "") throw "Empty Value";
			tempC = Math.round(parseFloat((tempF-32)*100*(5/9)))/100;
			}
		catch(err){
				tempC = err;
			}
		return tempC;
	},

	Kelvin : function(tempF){
		var tempK;
		try{
			if(isNaN(tempF)==true) throw "Not a Number";
			if(tempF == "") throw "Empty Value";
			tempK = Math.round((parseFloat(tempF)+459.67)*100*(5/9))/100;
			}
		catch(err){
				tempK = err;
			}
		return tempK;
	},
}