function myFunction() {
	document.getElementById('demo').innerHTML = 'Fuckyou!!';
}

function elementsByClassName() {
	var x = document.getElementsByClassName('ex');
	x[0].innerHTML = 'Trung';
	x[1].innerHTML = '19';

	for (var i = 0; i < x.length; i++) {
		x[i].style.color = 'red';
	}
}