$(document).ready(function(){
    
     getQuote();
      var randomQuote;
     function getQuote(){
      var url ="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
       $.getJSON(url, function(data){
         $("#quote").html('" ' +data.quoteText + ' "');
         $("#author").html(' --     ' + data.quoteAuthor);
         randomQuote = [ '" ' +data.quoteText + ' "', ' -- ' + data.quoteAuthor + '.'];
       });
       
     }
     
     $("#new-quote").on("click", function(){
       getQuote();
     });
     
     $('#tweet-quote').on('click', function(){
       window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
     });
   });