$(ready);

function ready() {
	$('body').append($('<div class="container">'));
	for (var i = 0; i < 4; i++) {
		$('.container').append(`<div class="contained" data-index="${i}">`);
	}
	$('.container').on('click','.contained', (event) => {
		console.log(event.target);
		alert($(event.target).attr('data-index'));
	});
}
