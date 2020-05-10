$(document).ready(function(){
  var source = $('.template').html();
  var template = Handlebars.compile(source);
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function(data){
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var context = {
          titolo : data[i].title,
          genere: data[i].genre,
          autore: data[i].author,
          anno: data[i].year,
          img: data[i].poster
        }
        console.log(context);
        var html = template(context)
        $('.insiemecanzoni').append(html)


      }
    },
    error: function(err){
    }
  })


}




)
