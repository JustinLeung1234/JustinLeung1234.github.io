function menuButton() {
	var menuDropdown = document.getElementById("menuDropdown")
		if (menuDropdown.classList.contains("show")) {
			menuDropdown.classList.remove("show");
		}
		else {
			menuDropdown.classList.toggle("show")
		}
}

window.onscroll = function(){scrollFunction()};

var header = document.getElementById("stickhead");

var sticky = header.offsetTop;

function scrollFunction(){


	if (window.pageYOffset > sticky) {
		header.classList.add("sticky")
	}
	else {
		header.classList.remove("sticky")
	}
}

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});