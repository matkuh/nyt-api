var topic = "election";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic +  "&api-key=fBs1RPRrwFA5G9rVStMepw4pGAMeA2C9";

$.ajax({
    url: queryURL, 
    method: "GET"
}).then(function(returned) {
    console.log(returned);
    console.log("Headline: " + returned.response.docs[0].headline.main);
    console.log("Lead Paragraph: "  + returned.response.docs[0].lead_paragraph);
});