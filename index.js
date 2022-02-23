$(document).ready(function(e){

 var page;
 var prevPage;

 $('ul#nav li a').click(function(){

 prevPage = getPrevUrl(window.location.href);

 page = $(this).attr('href');

 $('#content').load(page + '.html');

 if(page + '.html'!= window.location){
   window.history.pushState({path:page + '.html'},'',page + '.html');
 }

 return false;
 });

});
