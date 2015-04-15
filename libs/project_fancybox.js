 $(document).ready(function() {
  $(".image").fancybox({
    helpers : {

        title: {
            type: 'inside',
            position: 'bottom'
        }
    }
  });
  $(".movie").click(function() {
  $.fancybox({
      'openSpeed':1000, 
      'padding'   : 0,
      'autoScale'   : false,
      'transitionIn'  : 'none',
      'transitionOut' : 'none',
      'title'     : this.title,
      'width'   : 680,
      'height'    : 495,
      'href'      : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type'      : 'swf',
      'swf'     : {
           'wmode'    : 'transparent',
        'allowfullscreen' : 'true'
      }

    });

  return false;
});
$(".pdf").click(function(){
 $.fancybox({
   type: 'html',
   autoSize: false,
   content: '<embed src="'+this.href+'#nameddest=self&page=1&view=FitH,0&zoom=80,0,0" type="application/pdf" height="99%" width="100%" />',
   beforeClose: function() {
     $(".fancybox-inner").unwrap();
   }
 }); //fancybox
 return false;
}); //click
});