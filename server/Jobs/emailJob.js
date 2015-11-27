Meteor.startup(function(){

SyncedCron.start();

});

SyncedCron.config({
log : true,
collectionName : 'cronHistory'
});

SyncedCron.add({
name : 'Sending Canteen Bills emails to employees',
schedule : function(parser){
return parser.text('on the last day of the month at 10:00 pm');
},
job : function(){
console.log("Starting job ...");
console.log("Preparing data");

var employees = Employees.find().fetch();

SSR.compileTemplate('emailTemplate' , Assets.getText('emailBillTemplate.html') , {language : 'html'});
_emailTemplate();

_.each(employees , function(emp){

var todayDate = new Date();
empData = {
empId : emp._id,
startDate : new Date(todayDate.getFullYear() , todayDate.getMonth() , 1),
endDate : todayDate
};

console.log(empData);
var emailReport = SSR.render('emailTemplate' , {empData : empData});

Email.send({
to : emp.email,
from : "innoxtechnologies@innox.io",
subject : "Canteen Monthly Bill",
html : emailReport
});
console.log("email send");
})
}
});


function _emailTemplate(){
Template.emailTemplate.helpers({
'_transactions' : function(){
var transactions = Transactions.find({empId : empData.empId , date : {
$gte : new Date(empData.startDate),
$lte : new Date(empData.endDate)
}}).fetch();

_.each(transactions , function(data){
data.date = moment(data.date).format('DD-MM-YYYY');
})

return transactions;
},
'total' : function(){
var total = 0,
transactions = Transactions.find({empId : empData.empId , date : {
$gte : new Date(empData.startDate),
$lte : new Date(empData.endDate)
}}).fetch();

_.each(transactions , function(data){
total+=data.amount;
});

return total;
}
});
}