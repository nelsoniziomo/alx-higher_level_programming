const $ul = $('#list_movies');
$.getJSON('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
  $.each(data.results, function(index, movie) {
    const $li = $('<li>').text(movie.title);
    $ul.append($li);
  });
});
