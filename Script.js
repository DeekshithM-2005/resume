// Highlight current page in navigation
$(function(){
  const path = location.pathname.split('/').pop();
  $('nav a').removeClass('active');
  $('nav a[href="'+path+'"]').addClass('active');
});