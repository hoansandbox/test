jQuery(document).ready(function () {
  jQuery('.featured-video').append('<div class="video100"></div>');

  document.querySelectorAll('.plyr__video-embed').forEach(function(el) {
    let player = new Plyr(el);
    player.on('ready', (event) => {
      document.querySelector('.plyr__video-wrapper').insertAdjacentHTML('beforeend','<div class="plyr__custom-overlay"></div>');
      jQuery('.plyr__video-wrapper').appendTo('.featured-video > .video100');
    });
  });
});
