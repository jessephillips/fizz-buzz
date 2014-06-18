$(document).ready(function(){
	
	// fizz buzz loop thru 100. do alerts for now.
	var nuNode;

	for (var i = 1; i <= 100; i++) {
		if ( (i % 5) == 0 && (i % 3) == 0) {
			//fizz buzz
			nuNode = $('<p>'+i+'/3 = '+i/3+' and '+i+'/5 = '+i/5+'fizz-buzz</p>');
		} else if ( (i % 3) == 0 ) {
			nuNode = $('<p>'+i+'/3 = '+i/3+'fizz</p>');
		} else if ( (i % 5) == 0 ) {
			nuNode = $('<p>'+i+'/5 = '+i/5+'buzz</p>');
		} else {
			nuNode = $('<p>'+i+'</p>');
		}

		$(document).find('body').append(nuNode);
	}
});