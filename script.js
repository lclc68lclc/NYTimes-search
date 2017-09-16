$(document).ready(function() {
    $("#search").on("click", function() {
        var searchTerm = $("#search-term").val();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json&api_key=053d4d43c9d0490185abb660e1352122";
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        });
    });
});