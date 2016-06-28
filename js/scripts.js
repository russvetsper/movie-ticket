var totalCost;
function Movie(title,photo,ageRestriction,startTime,admissionPrice,rating){
this.title=title;
this.photo=photo;
this.ageRestriction=ageRestriction;
this.startTime=startTime;
this.admissionPrice=admissionPrice;
this.rating=rating;
}
var xMen=new Movie("X-Men","http://s3.foxmovies.com/foxmovies/production/films/108/images/posters/461-film-page-large.jpg",
"Adult","6-30-2016",15,10);
var indenpendceDay=new Movie("Indenpendce Day","https://faithspear.files.wordpress.com/2016/06/independence-day-image-c.jpg",
"Adult","6-30-2016",20,3);
var godzilla=new Movie("Godzilla","http://ichef-1.bbci.co.uk/news/624/media/images/74973000/jpg/_74973931_godzilla.jpg",
"Child","6-30-2016",20,2);

//Moring ticket $10 more, afternoon ticket $15, evening ticket$20,night $0
function movieAdditonalPrice(option){
  if(option==="1"){
    totalCost=totalCost+10;
  }else if(option==="2"){
    totalCost=totalCost+100;//totalCost+=100
  }else if(option==="3"){
    totalCost+=200;
  }else{
    totalCost+=3;
  }

}

function ageDiscount(ageSeniorPeople,ageChildPeople) {
if (ageSeniorPeople>0) {
totalCost-=5*ageSeniorPeople;
}

if(ageChildPeople>0){
  totalCost-=7*ageChildPeople;
}
}

function totalPeople(ageAdultPeople,ageSeniorPeople,ageChildPeople){
return ageAdultPeople+ageSeniorPeople+ageChildPeople;
}




$(document).ready(function() {
$("form#user-form").submit(function(event){
event.preventDefault();
var user=$("#new-user").val();
var ageAdultPeople=parseInt($("input#ageAdult").val());
var ageSeniorPeople=parseInt($("input#ageSenior").val());
var ageChildPeople=parseInt($("input#ageChild").val());


var movieWatchTime=$("#movieTime").val();
var movieChoice=$("#movieOption").val();
//retrive movie title from user's choice
var totalPerson =totalPeople(ageAdultPeople,ageSeniorPeople,ageChildPeople);
if(movieChoice==="1"){
    if(ageChildPeople>0){
    $("#listDisplay").text("Please Choose Godzilla because children are allowed.");
    totalCost=0;
  }else{
    totalCost=xMen.admissionPrice*totalPerson;

    movieAdditonalPrice(movieWatchTime);
    ageDiscount(ageSeniorPeople,ageChildPeople);
    $("#listDisplay").text(user+" Thank you for ordering with us. Your total price is $"+totalCost);
    $("#movieDisplay").html(
      "<li>"+xMen.title+"</li>"+
      "<li>"+xMen.rating+"</li>"+
      "<li>"+xMen.startTime+"</li>");
      $("#moviePhoto").attr("src",xMen.photo);
    }

}else if(movieChoice==="2"){
totalCost=indenpendceDay.admissionPrice*totalPerson;
    if(ageChildPeople>0){
    $("#listDisplay").text("Please Choose Godzilla because children are allowed.");
    totalCost=0;
    }
    movieAdditonalPrice(movieWatchTime);
    ageDiscount(ageSeniorPeople,ageChildPeople);
    $("#listDisplay").text("Your total price is $"+totalCost);
    $("#movieDisplay").html(
      "<li>"+indenpendceDay.title+"</li>"+
      "<li>"+indenpendceDay.rating+"</li>"+
      "<li>"+indenpendceDay.startTime+"</li>"
    );
    $("#moviePhoto").attr("src",indenpendceDay.photo);

}else{
  totalCost=godzilla.admissionPrice*totalPerson;
  movieAdditonalPrice(movieWatchTime);
  ageDiscount(ageSeniorPeople,ageChildPeople);
  $("#listDisplay").text("Your total price is $"+totalCost);
  $("#movieDisplay").html(
    "<li>"+godzilla.title+"</li>"+
    "<li>"+godzilla.rating+"</li>"+
    "<li>"+godzilla.startTime+"</li>"
  );
  $("#moviePhoto").attr("src",godzilla.photo);

}



});

});
