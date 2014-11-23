$(document).ready(function() {
    var currentSuggestion = undefined;
    $("#movietitle").autocomplete({
        serviceUrl: '/ajax/movies/',
        onSelect: function(suggestion) {
            currentSuggestion = suggestion;
            $("#addButton").html("Add " + suggestion.data.name);
            if (!Exists(suggestion.data.id))
                $("#addButton").removeClass('disabled');
        }
    });
    $("#addButton").on('click', function(k,e) {
        if (currentSuggestion == undefined)
            return false;
        $("#addButton").addClass('disabled');
        AddMovie(currentSuggestion.value, currentSuggestion);

        if (HasMovies())
            $("#magic").removeClass("disabled");
        else
            $("#magic").addClass("disabled");

        return false;
    });

    $(document).on('click', '.movie', function() {
        console.log($(this).attr("data-id"));
    });
});

function DoMagic()
{
    var template = "
        <div class='card'>
            {{id}}
            Cast: 
            <ul>
            {{#cast}}
                <li>{{#profile_path}}<img class='profile' src='ajax/image/w45{{profile_path}}' />{{/profile_path}}<span class='name'>{{name}}</span></li>
            {{/cast}}
            </ul>
            Crew: 
            <ul>
            {{#crew}}
                <li>{{#profile_path}}<img class='profile' src='ajax/image/w45{{profile_path}}' />{{/profile_path}}<span class='name'>{{name}}</span></li>
            {{/crew}}
        </div>
    ";
    console.log("This is where the magic happens");
    $("#actors-results").html("");
    $.each($(".movie"), function(key, value) {
        console.log(value);
        var id = $(value).attr('data-id');
        var url = ("/ajax/actors/" + id);
        $.ajax(url, {
            data: {
                type: $(value).attr('data-type'),
            },
            success: function(data) {
                $("#actors-results").append(Mustache.render(template, data));
            },
            dataType: "json"
        });
    });
}

function Exists(id)
{
    var exists = false;
    $.each($(".movie"), function(key, value)
    {
        if ($(value).attr("data-id") == id)
            exists = true;
    });
    return exists;
}

function HasMovies()
{
    return $(".movie").length > 0;
}

function AddMovie(name, id)
{
    if (Exists(id.data.id))
        return false;
    var snippet = "
    <div class='movie card' data-name='{{data.name}}' data-id='{{data.id}}' data-type='{{data.media_type}}'>
        <button type='button' class='close' data-dismiss='alert'>
            <span aria-hidden='true'>&times;</span>
            <span class='sr-only'Close</span>
        </button>
        <div class='movietitlecontainer'>
            <span class='movietitle'>{{data.name}}</span>
        </div>
        <img src='ajax/image/w154{{data.poster_path}}' />
    </div>
    ";

    var tmp = Mustache.render(snippet, id);

    $("#movies-results").append(tmp);
    $("button.close").on('click', function(k, e)
    {
        $(this).parent().remove();
        if (HasMovies())
            $("#magic").removeClass("disabled");
        else
            $("#magic").addClass("disabled");
    });
}