jQuery(document).ready(function () {
  jQuery('.featured-video').append('<div class="video100"></div>');

  document.querySelectorAll('.plyr__video-embed').forEach(function(el) {
    let player = new Plyr(el);
  });
});
