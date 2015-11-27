Template.firstPage.onCreated(function(){

var instance = this;

instance.subscribe('employees');
});

Template.firstPage.rendered= function(){

document.addEventListener("backbutton", function(){
console.log("first page");
navigator.app.exitApp();
});

}

Template.firstPage.events({
'submit form' : function(e){
e.preventDefault();

var empId = $('#empId').val(), amount = +$('#amount').val();

Meteor.call('enterPrice' , empId , amount , function(err){
if(err){
console.log("Method error");
console.log(err);
}else {
console.log("data inserted");
throwToast("Price Inserted");
}
});

$('#amount').val("");
}
});

Template.firstPage.helpers({
'_employees' : function(){
return Employees.find({});
},
'date' : function(){
var _date = new Date();
var month = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"];
return {
date : _date.getDate(),
month : month[_date.getMonth()],
year : _date.getFullYear()
}
}
});