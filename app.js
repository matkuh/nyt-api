var startDate = "18520101";
var endDate = "20190604";
var queryURL;

$("#submit").on("click", function()  {
    var topic = $("#topic").val();
    var numRecords = $("#num-rec").val();
    if($("#start-year").val() !== '') {
        startDate = $("#start-year").val();
    }
    if($("#end-year").val() !== '') {
        endDate = $("#end-year").val();
    }

     queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic +  "&begin_date=" +startDate +"&end_date=" +endDate +"&api-key=fBs1RPRrwFA5G9rVStMepw4pGAMeA2C9";
    $.ajax({
        url: queryURL, 
        method: "GET"
    }).then(function(returned) {
        if(numRecords>10) {
            numRecords = 10;
        }
        for(var i = 0; i < numRecords; i++) {
            var newDiv = $("<div>");
            newDiv.append("<h1>" + returned.response.docs[i].headline.main);
            newDiv.append("<h5>Date Published: " + returned.response.docs[i].pub_date);
            newDiv.append("<p>" + returned.response.docs[i].lead_paragraph);
            $("#articles").append(newDiv);
        }
    });
})
