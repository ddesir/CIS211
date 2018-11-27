// Deon Desir 18 November 2018

// Displays date and time at html element with id 'date'
currentDate = function () {
	var mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var dow = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var nd = new Date();
	var yr = nd.getFullYear();
	var day = nd.getDate();
	var hr = nd.getHours();
	var min = nd.getMinutes();
	var sec = nd.getSeconds();
	
	if (min <= 9) {min = '0' + min;}
	if (sec <= 9) {sec = '0' + sec;}

	document.getElementById('date').innerHTML = 'The current date and time is: ' + dow[nd.getDay()] + ', ' + mon[nd.getMonth()] + ' ' + day + ', ' + yr + ' ' + hr + ':' + min + ':' + sec;
}

isNav = function () {
	pg = document.title;
	
	if (pg == 'Home' || pg == 'Resume' || pg == 'Favorite Sites' || pg == 'My Life' || pg == 'Friends') {
		return true;
	} else {
		return false;
	}
}

extraNav = function () {
	if (!isNav()) {
		document.getElementById('extra').innerHTML = "<li><a href = '' class = 'active'>" + pg + "</a></li>";
	} else {
		return;
	}
}

goBack = function () {
	window.history.back ();
}

window.onload = function () {
	currentDate ();
	setInterval (currentDate, 1000);
	extraNav ();
}

