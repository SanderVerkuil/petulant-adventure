$(document).ready(function() {
    var currentSuggestion = undefined;
    $("#movietitle").autocomplete({
        serviceUrl: '/ajax/movies/',
        onSelect: function(suggestion) {
            currentSuggestion = suggestion;
            console.log(suggestion);
        }
    });
    $("#addButton").on('click', function(k,e) {
        if (currentSuggestion == undefined)
            return false;
        console.log(currentSuggestion);

        AddMovie(currentSuggestion.value, currentSuggestion);

        return false;
    })
});

function AddMovie(name, id)
{
    var exists = false;
    $.each($(".movie"), function(key, value) {
        var dataname = $(value).attr("data-name");

        console.log("dataname: " + dataname + " - name: " + name);

        if (dataname == name)
        {
            exists = true;
        }
    });
    if (exists)
        return false;
    var snippet = "<div class='movie' data-id='"+id.data.id + "' data-name='" + name + "'><h1>" + name + "</h1><img src='ajax/image/w342" + id.data.poster_path + "' /><section class='artists'></section></div>";
    
    $("#movies-results").append(snippet);
}