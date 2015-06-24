//     ____  ____  ____  ____  __    ________  ___   _____ ____________   ___
//    / __ \/ __ \/ __ \/ __ )/ /   / ____/  |/  /  / ___// ____/_  __/  <  /
//   / /_/ / /_/ / / / / __  / /   / __/ / /|_/ /   \__ \/ __/   / /     / / 
//  / ____/ _, _/ /_/ / /_/ / /___/ /___/ /  / /   ___/ / /___  / /     / /  
// /_/   /_/ |_|\____/_____/_____/_____/_/  /_/   /____/_____/ /_/     /_/   


$(document).ready(function() {

	// ____  ____  ____  ____  __    ________  ___   ___                       
	//    / __ \/ __ \/ __ \/ __ )/ /   / ____/  |/  /  <  /                       
	//   / /_/ / /_/ / / / / __  / /   / __/ / /|_/ /   / /                        
	//  / ____/ _, _/ /_/ / /_/ / /___/ /___/ /  / /   / /                         
	// /_/   /_/ |_|\____/_____/_____/_____/_/  /_/   /_/                          

	var letterCapitalize = function(string) {
		var array = string.split(' ');

		for (var i = 0; i < array.length; i++) {
			array[i] = capital(array[i])
		}

		return array.join(' ');
	}

	function capital(string) {

		// console.log(string);
		return string[0].toUpperCase() + string.slice(1);

	}

	console.log(letterCapitalize("test test test"));


	//     ____  ____  ____  ____  __    ________  ___   ___ 
	//    / __ \/ __ \/ __ \/ __ )/ /   / ____/  |/  /  |__ \
	//   / /_/ / /_/ / / / / __  / /   / __/ / /|_/ /   __/ /
	//  / ____/ _, _/ /_/ / /_/ / /___/ /___/ /  / /   / __/ 
	// /_/   /_/ |_|\____/_____/_____/_____/_/  /_/   /____/ 

	function wordCount(string) {

		var array = string.split(' ');

		var lengthOfArray = array.length;

		return "There are " + lengthOfArray + " number of words.";

	}

	console.log(wordCount("TESTING TESTING TESTING"));

	//     ____  ____  ____  ____  __    ________  ___   _____
	//    / __ \/ __ \/ __ \/ __ )/ /   / ____/  |/  /  |__  /
	//   / /_/ / /_/ / / / / __  / /   / __/ / /|_/ /    /_ < 
	//  / ____/ _, _/ /_/ / /_/ / /___/ /___/ /  / /   ___/ / 
	// /_/   /_/ |_|\____/_____/_____/_____/_/  /_/   /____/  

	function primeTime(number) {
		
		var prime = true;

		if (number < 0) {
			prime = false;
		} else if ((num <= 2) && (num > 0)) {
			prime = true;

		} else {


		// Need to figure out logic behind this............
		
		// 	for (var i = 3; i < number; i++) {
		// 		if (num % i === 0) {
		// 			prime = false;
		// 			return prime;
		// 		}
			}
		}
		return prime;
	}

});