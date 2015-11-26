Template.monthlyBill.onCreated(function(){

var instance = this;

instance.subscribe('employees');
instance.subscribe('transactions');

instance.empData = {};

instance.total = function(){
var total = 0,
transactions = Transactions.find({empId : instance.empData.empId , date : {
$gte : new Date(instance.empData.startDate),
$lte : new Date(instance.empData.endDate)
}}).fetch();

_.each(transactions , function(data){
total+=data.amount;
})

return total;
};

instance.getData = function(){
var transactions = Transactions.find({empId : instance.empData.empId , date : {
$gte : new Date(instance.empData.startDate),
$lte : new Date(instance.empData.endDate)
}}).fetch();

_.each(transactions , function(data){
data.date = moment(data.date).format('DD-MM-YYYY');
})

return transactions;
}
});

Template.monthlyBill.rendered=function(){

$('.datepicker').datepicker({
format : "yyyy-mm-dd"
});

Session.set('showBill' , false);

}

Template.monthlyBill.helpers({
'_employees' : function(){
return Employees.find({});
},
'expenditure' : function(){
return Template.instance().getData();
},
'showBill' : function(){
return Session.get('showBill');
},
'total' : function(){
return Template.instance().total();
}
});

Template.monthlyBill.events({
'change #empId , change #startDate , change #endDate' : function(e){
Session.set('showBill' , false);
},

'submit form' : function(e){
e.preventDefault();
var empId = $('#empId').val(),
startDate = new Date($('#startDate').val()),
endDate = new Date($('#endDate').val());

Template.instance().empData = {
empId : empId,
startDate : $('#startDate').val(),
endDate : $('#endDate').val()
};

Session.set('showBill' , true);
}
});