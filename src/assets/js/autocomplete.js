var demo1 = new autoComplete({
    selector: '#autoComp9',
    minChars: 1,
    source: function (term, suggest) {
        term = term.toLowerCase();
        var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
        var suggestions = [];
        for (i = 0; i < choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
        suggest(suggestions);
        console.log(suggestions);
    }
    
});
//demo1();
//console.log(demo1);
var demo2 = new autoComplete({
    selector: '#advanced-demo',
    minChars: 0,
    source: function (term, suggest) {
        term = term.toLowerCase();
        var choices = [['Australia', 'au'], ['Austria', 'at'], ['Brasil', 'br'], ['Bulgaria', 'bg'], ['Canada', 'ca'], ['China', 'cn'], ['Czech Republic', 'cz'], ['Denmark', 'dk'], ['Finland', 'fi'], ['France', 'fr'], ['Germany', 'de'], ['Hungary', 'hu'], ['India', 'in'], ['Italy', 'it'], ['Japan', 'ja'], ['Netherlands', 'nl'], ['Norway', 'no'], ['Portugal', 'pt'], ['Romania', 'ro'], ['Russia', 'ru'], ['Spain', 'es'], ['Swiss', 'ch'], ['Turkey', 'tr'], ['USA', 'us']];
        var suggestions = [];
        for (i = 0; i < choices.length; i++)
            if (~(choices[i][0] + ' ' + choices[i][1]).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
        suggest(suggestions);
    },
    renderItem: function (item, search) {
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        return '<div class="autocomplete-suggestion" data-langname="' + item[0] + '" data-lang="' + item[1] + '" data-val="' + search + '"><img src="img/' + item[1] + '.png"> ' + item[0].replace(re, "<b>$1</b>") + '</div>';
    },
    onSelect: function (e, term, item) {
        console.log('Item "' + item.getAttribute('data-langname') + ' (' + item.getAttribute('data-lang') + ')" selected by ' + (e.type == 'keydown' ? 'pressing enter' : 'mouse click') + '.');
        document.getElementById('advanced-demo').value = item.getAttribute('data-langname') + ' (' + item.getAttribute('data-lang') + ')';
    }
});

