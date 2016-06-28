function Movie(title,photo,ageRestriction,startTime,admissionPrice){
this.title=title;
this.photo=photo;
this.ageRestriction=ageRestriction;
this.startTime=startTime;
this.admissionPrice=admissionPrice;
}
var indenpendceDay=new Movie("Indenpendce Day","https://faithspear.files.wordpress.com/2016/06/independence-day-image-c.jpg",
"Adult","6-30-2016",10);
var xMen=new Movie("X-Men","http://s3.foxmovies.com/foxmovies/production/films/108/images/posters/461-film-page-large.jpg",
"Adult","6-30-2016",15);

var godzilla=new Movie("Godzilla","http://ichef-1.bbci.co.uk/news/624/media/images/74973000/jpg/_74973931_godzilla.jpg",
"Child","6-30-2016",20);

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

function ageRestriction(option) {
  if(){}
}






$(document).ready(function() {
$("form#task-form").submit(function(event){
event.preventDefault();
var ageAdultPeople=parseInt($("input#ageAdult").val());
var ageSeniorPeople=parseInt($("input#agesenior").val());
var ageChildPeople=parseInt($("input#ageChild").val());


var movieWatchTime=$("#movieTime").val();
var movieChoice=$("#movieOption").val();
var totalCost;
//retrive movie title from user's choice
if(movieChoice==="1"){
totalCost=xMen.admissionPrice;


}else if(movieChoice==="2"){
totalCost=indenpendceDay.admissionPrice;

}else{
  totalCost=godzilla.admissionPrice;
}



});

});
