$(document).ready(function () {
	$('#mainMenu').show();
	$('#inGame').hide();

	$('#newGameBtn').on('click', () => {
		$('#mainMenu').hide();
		$('#inGame').show();
	});
});