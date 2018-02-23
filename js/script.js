$('#close-nav').click(closeNav);
$('#open-nav').click(function() {
	$('.backdrop').show();
	$('nav ul').addClass('open');
});
$('.backdrop').click(closeNav);

function closeNav() {
	$('.backdrop').hide();
	$('nav ul').removeClass('open');
}
