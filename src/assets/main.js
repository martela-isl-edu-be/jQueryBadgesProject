$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/alainmartel.json',
    dataType: 'jsonp',
    success:function(response){
      var div_badges=$('#badges');
      var completed=response.courses.completed;
      for(var complete in completed){
        div_badges.append('<div class="course"></div>');
        $('.course:last').append('<h3>'+completed[complete].title+'</h3>');
        $('.course:last').append('<img src="'+completed[complete].badge+'"/>');
        $('.course:last').append('<a href="'+completed[complete].url+'" class="btn btn-primary" target="_blank">See Course</a>');
      }
    }
  });

});
