$(document).ready(function() {
    $("#search").on("click", function() {
        var searchTerm = $("#search-term").val();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "053d4d43c9d0490185abb660e1352122"
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        });
    });
});