
var offset = 0, length;

$(document).ready(function() {
	length = $('section#main>div').length - 1;
	setTimeout(function() {
		$('div#welcome').removeClass('hidden');
		setTimeout(function() {
			$('div#welcome').addClass('hidden');
			setTimeout(function() {
				$('div#welcome h3').hide();
				$('div#welcome h1').show();
				setTimeout(function() {
					$('div#welcome').removeClass('hidden');
					setTimeout(function() {
						$('div#welcome').addClass('hidden');
						setTimeout(function() {
							$('div#welcome').hide();
							next();
							setTimeout(function() {
								$('a#next').removeClass('hidden');
							}, 500);
						}, 1000);
					}, 3000);
				}, 500);
			}, 500);
		}, 2000);
	}, 1000);
	$('a#next').click(next);
	$('a#previous').click(previous);
});

function previous() {
	offset = Math.max(offset - 1, 1);
	if (offset == 1) {
		$('a#previous').addClass('hidden');
	}
	else if (offset == length - 1) {
		$('a#next').removeClass('hidden');
	}
	$('section#main').css('left', -offset + '00%');
	$('div.active').removeClass('active');
	$('section#main div div').eq(offset).addClass('active');
}

function next() {
	offset = Math.min(offset + 1, length);
	if (offset == length) {
		$('a#next').addClass('hidden');
	}
	else if (offset == 2) {
		$('a#previous').removeClass('hidden');
	}
	$('section#main').css('left', -offset + '00%');
	$('div.active').removeClass('active');
	$('section#main div div').eq(offset).addClass('active');
}
