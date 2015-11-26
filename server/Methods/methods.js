Meteor.startup(function(){

Meteor.methods({
'enterPrice' : function(empId , amount){
var todayDate = new Date(moment(new Date()).format('YYYY-MM-DD'));
console.log(todayDate);
if(Transactions.find({empId : empId , date : { $gte : new Date(todayDate) }}).count()){
Transactions.update({empId : empId , date : { $gte : new Date(todayDate) }} , {$inc : { amount : amount }});
console.log("data incremented");
}else {
Transactions.insert({empId : empId , date : new Date() , amount : amount});
};
}
})
});