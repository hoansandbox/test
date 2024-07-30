setTimeout(function(){
  document.querySelectorAll('.plyr__video-embed').forEach(function(el) {
  	document.querySelector('.plyr__video-wrapper').insertAdjacentHTML('beforeend','<div class="plyr__custom-overlay"></div>');
  })
}, 300)
