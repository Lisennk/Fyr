$('#decoded').on('input', function(input) {
    $('#encoded').text(encode(input.target.innerText));
});

$('#encoded').on('input', function(input) {
    $('#decoded').text(decode(input.target.innerText));
});