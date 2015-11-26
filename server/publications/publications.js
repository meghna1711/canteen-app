Meteor.publish('employees' , function(){
return Employees.find({});
});

Meteor.publish('transactions' , function(){
return Transactions.find({});
});