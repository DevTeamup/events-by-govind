
const snackbar_content = document.getElementById('snackbar_content')
const snackbar = document.getElementById('snackbar');

function snackbarHandler(message, success) {
	console.log(message);
	var x = document.getElementById("snackbar");
	x.className = "show";
	
	if (!success) {
		snackbar.innerHTML = `<i id="" class="fas fa-exclamation-circle fa-5xl"></i> &nbsp;
			<span id="snackbar_content"><strong>${message}</strong></span>`
		snackbar.classList.add('red_snackbar')
	}
	else {
		snackbar.innerHTML = `<i class="fas fa-check-circle fa-5xl"></i> &nbsp;
			<span id="snackbar_content"><strong>${message}</strong></span>`
		snackbar.classList.add('green_snackbar')
	}
	snackbar_content.innerText = message;
	setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
