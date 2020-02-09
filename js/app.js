$(document).ready(() => {
	let players = [];

	$('#mainMenu').show();
	$('#inGame').hide();

	$('#newGameBtn').on('click', () => {
		$('#mainMenu').hide();
		$('#inGame').show();

		players.push(
			new Player('Player 1'),
			new Player('Player 2')
		);

		players.forEach(player => {
			let playerHtml = generatePlayerHtml(player);

			$('#playersContainer').append(playerHtml);
		});
	});

	$('#rollDiceBtn').on('click', () => {
		$('.die-list').each((i, die) => {
			die.dataset.roll = rollDice();

			die.classList.toggle('even-roll');
			die.classList.toggle('odd-roll');
		});
	});
});

function Player(name) {
	this.name = name;
	this.totalScore = 0;
	this.currentScore = 0;
}

let generatePlayerHtml = (player) => `
	<div class="col-6">
		<div class="jumbotron m-0">
			<h4 class="player-name">${ player.name }</h4>
			<h1 class="display-1 score">${ player.totalScore }</h1>
			<hr class="my-4">
			<p>Current:</p>
			<p class="lead">${ player.currentScore }</p>
		</div>
	</div>
`;

let rollDice = () => {
	return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}