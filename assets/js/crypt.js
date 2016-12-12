var alphabet = "ОЕАИНТСРВЛКМДПУЯЫЬГЗБЧЙХЖШЮЙЩЭФЪЁ";

function encode(text)
{
    var result = "";

    for (var  i = 0; i < text.length; i++) {
        var n = alphabet.indexOf(text[i].toUpperCase());
        result += "ф";
        for (var j = 0; j < n; j++) {
            result += "ы";
        }
        result += "р";
        if ((i+1) != text.length) result += '-';
    }

    return result.replace(/-фр-/g, " ");
}

function decode(text) {
    text = text.replace(/ф/g, "").replace(/р/g, "");
    var words = text.split(" ");

    var result = "";

    for (var i = 0; i < words.length; i++) {
        var letters = words[i].split("-");

        for (var j = 0; j < letters.length; j++) {
            var n = (letters[j].match(/ы/g) || []).length;
            result += alphabet[n];
        }

        result += " ";
    }

    return result;
}
