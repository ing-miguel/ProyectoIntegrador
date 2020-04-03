$(document).ready(main);
var contador = 1;

function main() {
$('.menu_bar').click(function () {
if(contador == 1){
	$('nav').animate({
		left:'0'
	});
	contador = 0;
} else{
	contador = 1;
		$('nav').animate({
		left:'-100%'
	});

}
});

<<<<<<< HEAD
//mostrar y ocultar submenu MONGOLA
=======
//mostrar y ocultar submenu TE AMO ANA ANGELICA.
>>>>>>> a024824d4d6949361406de58fda6a6f4fc69778b


$('.submenu').click(function() {
$(this).children('.children').slideToggle();



});
}
