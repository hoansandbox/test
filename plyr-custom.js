jQuery(document).ready(function () {
  if (jQuery('.featured-video > .video100 iframe').length === 0) {
    jQuery('.featured-video > .video100').append('<div class="video100"></div>');
    jQuery('.show-less-div-2 iframe').appendTo('.featured-video > .video100');
  }

  jQuery('.featured-video > .video100 iframe').wrap('<div class="plyr__video-embed"></div>');

  document.querySelectorAll('.plyr__video-embed').forEach(function(el) {
    let player = new Plyr(el);
    player.on('ready', (event) => {
      document.querySelector('.plyr__video-wrapper').insertAdjacentHTML('beforeend','<div class="plyr__custom-overlay"></div>');
      jQuery('.show-less-div-2').remove();
    });
  });
});
