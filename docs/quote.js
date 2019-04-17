$(document).ready(function(){
    var html = "";
    var arr = [];

    $.getJSON("https://quotes.rest/qod.json", function(a) {
       console.log(a.contents.quotes[0]);
       
      html = "<h5><blockquote id='content'>"+a.contents.quotes[0].quote+"</blockquote><p id='author'> by "+a.contents.quotes[0].author+"<br><br> Today's date: "+a.contents.quotes[0].date+ "</p></h5>";
          
      });  
      
    $("#getQuote").on("click", function(){
      $(".quote").html(html);
     });
        
    
    });                           
    