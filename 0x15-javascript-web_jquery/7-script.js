const $div = $('#character');
$.getJSON('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
  $div.text(data.name);
});
