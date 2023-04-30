$(document).ready(function () {
    $("#btn").click(function(event){
    climatesearch(event);});
    });
    function climatesearch(event){
    var request;
    event.preventDefault();
    request = $.ajax({
    url:'https://api.openweathermap.org/data/2.5/weather',
    type:"GET",
    data:{ q:$("#searcher").val(),
    appid: 'c3ec167006e4c1cd1d844819282b0b41',
    units:'metric'
    }
   });
   request.done(function(response){
    climatedetailsearch(response);
    getDate();
   });
   request.fail(function(){
    alert(" location cannot reach");
    $("#searcher").text("");
    $("#tempvalue").text("");
    $("#image").attr('src',"");
    $("#climate").text("");
    $("#date").text("");
   });
   }
   function climatedetailsearch(jsonObject){
    var city_name = jsonObject.name;
    var city_weather= jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    var imgurl ='http://openweathermap.org/img/w/'+jsonObject.weather[0].icon +'.png';
    $("#image").attr('src',imgurl);
    $("#searcher").text("wether of"+""+city_name);
    $("#climate").text(city_weather);
    $("#tempvalue").text(city_temp+"°c");
   
   }
   function getDate(){
    var date_current= new Date().toISOString().slice(0, 10)
    $("#date").text(date_current);
   }