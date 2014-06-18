$(document).ready(function(){
	
	fizzBuzz();
});

function fizzBuzz(){
		// fizz buzz loop thru 100 and do fizz buzz.
	var nuNode;

	for (var i = 1; i <= 100; i++) {
		if ( (i % 5) == 0 && (i % 3) == 0) {
			//fizz buzz
			nuNode = $('<p>FIZZ-BUZZ! ('+i+'/3 = '+i/3+' and '+i+'/5 = '+i/5+')</p>');
		} else if ( (i % 3) == 0 ) {
			nuNode = $('<p>fizz ('+i+'/3 = '+i/3+')</p>');
		} else if ( (i % 5) == 0 ) {
			nuNode = $('<p>buzz ('+i+'/5 = '+i/5+')</p>');
		} else {
			nuNode = $('<p>'+i+'</p>');
		}

		$(document).find('body').append(nuNode);
	}
}