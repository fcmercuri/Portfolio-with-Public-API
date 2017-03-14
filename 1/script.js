function myProjects(data) {
    var htmlString = '<tr>';
    htmlString += '<td><' + data.images + '</td>';
    htmlString += '<td>' + data.name + '</td>'
    htmlString += '<td>' + data.description + '</td>'
    htmlString += '</tr>';
    return htmlString;
}

$(document).ready(function() {
    var requestURL = "https://4geeksacademy.github.io/exercise-assets/json/project_list.json";
    $.ajax({
        method: "GET",
        url: requestURL,
        dataType: "json",
        success: mySuccessListener,
        error: myErrorListener
    });

    function mySuccessListener(data) {
        alert('fff');
        $('.projects').html('');
        for (var i = 0; i < data.length; i++) {
            $('.projects').append(myProjects(data[i]));
        }
    }

    function myErrorListener() {
        alert('error');
    }


});
