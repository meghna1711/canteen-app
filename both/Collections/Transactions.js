Transactions = new Meteor.Collection('transactions' , {
schema : {
empId : {type : String},
date : {type : Date},
amount : {type : Number}
}
});