document.querySelectorAll('.plyr-video').forEach(function(el) {
	el.classList.add('plyr__video-embed');
	let player = new Plyr(el);
	player.on('ready', (event) => {
	  document.querySelector('.plyr__video-wrapper').insertAdjacentHTML('beforeend','<div class="plyr__custom-overlay"></div>')
	});
})
