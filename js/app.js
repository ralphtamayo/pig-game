$(document).ready(() => {
	$('#mainMenu').show();
	$('#inGame').hide();

	$('#newGameBtn').on('click', () => {
		$('#mainMenu').hide();
		$('#inGame').show();
	});

	$('#rollDiceBtn').on('click', () => {
		$('.die-list').each((i, die) => {
			die.dataset.roll = rollDice();

			die.classList.toggle('even-roll');
			die.classList.toggle('odd-roll');
		});
	});
});

let rollDice = () => {
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}