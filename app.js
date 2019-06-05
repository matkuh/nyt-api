var startDate = "18520101";
var endDate = "20190604";
var queryURL;

$("#submit").on("click", function()  {
    var topic = $("#topic").val();
    console.log(topic);
    var numRecords = $("#num-rec").val();
    console.log(numRecords);
    console.log("Start year Val:" + $("#start-year").val());
    if($("#start-year").val() !== '') {
        startDate = $("#start-year").val();
    }
    console.log(startDate);
    if($("#end-year").val() !== '') {
        console.log("this ran");
        endDate = $("#end-year").val();
    }
    console.log(endDate);
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic +  "&facet_fields=source&facet=true&begin_date=" +startDate +"&end_date=" +endDate +"&api-key=fBs1RPRrwFA5G9rVStMepw4pGAMeA2C9";
    $.ajax({
        url: queryURL, 
        method: "GET"
    }).then(function(returned) {
        console.log(returned);
        console.log("Headline: " + returned.response.docs[0].headline.main);
        console.log("Lead Paragraph: "  + returned.response.docs[0].lead_paragraph);
        if(numRecords>10) {
            numRecords = 10;
        }
        for(var i = 0; i < numRecords; i++) {
            var newDiv = $("<div>");
            //create an attribute to style
            newDiv.append("<h1>" + returned.response.docs[i].headline.main);
            newDiv.append("<h5>Date Published: " + returned.response.docs[i].pub_date);
            newDiv.append("<p>" + returned.response.docs[i].lead_paragraph);
            $("#articles").append(newDiv);
        }
    });
})
