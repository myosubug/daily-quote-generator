$(document).ready(function(){
  var html = "";

  $.getJSON("https://random-math-quote-api.herokuapp.com/", function(a) {
     console.log(a);
     
    html = "<h5><blockquote id='content'>"+a.quote+"</blockquote><p id='author'> by "+a.author+"</p></h5>";
        
    });  
    
  $("#getQuote").on("click", function(){
    $.getJSON("https://random-math-quote-api.herokuapp.com/", function(a) {
     console.log(a);
     
    html = "<h5><blockquote id='content'>"+a.quote+"</blockquote><p id='author'> by "+a.author+"</p></h5>";
        
    }); 
    $(".quote").html(html);
   });
  
  });     