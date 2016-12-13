$('#decoded').on('input', function(input) {
    $('#encoded').text(encode(input.target.innerText));
});

$('#encoded').on('input', function(input) {
    $('#decoded').text(decode(input.target.innerText));
});

$('#decoded').on('keypress', function (e) {
  if (isSpecialKey(e)) {
    return;
  }
  if (alphabet.indexOf(e.key.toUpperCase()) === -1) {
    e.preventDefault();
  };
});

$('#encoded').on('keypress', function (e) {
  if (isSpecialKey(e)) {
    return;
  }
  if (fyrphabet.indexOf(e.key.toUpperCase()) === -1) {
    e.preventDefault();
  };
});

function isSpecialKey(e) {
  // Allow: backspace, delete, spacebar
  if ((e.keyCode === 8 || e.keyCode === 46 || e.charCode === 32) ||
    // Allow: Ctrl+Key, Command+Key
    (e.ctrlKey === true || e.metaKey === true) ||
     // Allow: home, end, left, right, down, up
    (e.keyCode >= 35 && e.keyCode <= 40)) {
      return true;
    };
};
