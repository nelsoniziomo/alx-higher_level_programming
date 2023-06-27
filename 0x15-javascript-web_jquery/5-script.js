const $div = $('#toggle_header');
$div.on('click', function() {
  const $header = $('header');
  if ($header.hasClass('red')) {
    $header.removeClass('red').addClass('green');
  } else {
    $header.removeClass('green').addClass('red');
  }
});
