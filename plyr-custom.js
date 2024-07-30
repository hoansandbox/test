jQuery(document).ready(function () {
  jQuery('.featured-video > .video100 iframe').wrap('<div class="plyr__video-embed"></div>');

  document.querySelectorAll('.plyr__video-embed').forEach(function(el) {
    let player = new Plyr(el);
    player.on('ready', (event) => {
      document.querySelector('.plyr__video-wrapper').insertAdjacentHTML('beforeend','<div class="plyr__custom-overlay"></div>');
      jQuery('.show-more-less-handler').remove();
    });
  });
});
