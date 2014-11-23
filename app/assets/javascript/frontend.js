$(document).ready(function() {
    var currentSuggestion = undefined;
    $("#movietitle").autocomplete({
        serviceUrl: '/ajax/movies/',
        onSelect: function(suggestion) {
            currentSuggestion = suggestion;
            $("#addButton").html("Add " + suggestion.value);
            if (!Exists(suggestion.value))
                $("#addButton").removeClass('disabled');
        }
    });
    $("#addButton").on('click', function(k,e) {
        if (currentSuggestion == undefined)
            return false;
        $("#addButton").addClass('disabled');
        AddMovie(currentSuggestion.value, currentSuggestion);

        return false;
    })
});

function Exists(name)
{
    var exists = false;
    $.each($(".movie"), function(key, value)
    {
        if ($(value).attr("data-name") == name)
            exists = true;
    });
    return exists;
}

function AddMovie(name, id)
{
    if (Exists(name))
        return false;
    var snippet = "
    <div class='movie' data-name='{{value}}'>
        <button type='button' class='close' data-dismiss='alert'>
            <span aria-hidden='true'>&times;</span>
            <span class='sr-only'Close</span>
        </button>
        <div class='movietitlecontainer'>
            <span class='movietitle'>{{value}}</span>
        </div>
        <img src='ajax/image/w154{{data.poster_path}}' />
    </div>
    ";

    $("#movies-results").append(Mustache.render(snippet, id));
    $("button.close").on('click', function(k, e)
    {
        $(this).parent().remove();
    });
}