Meteor.startup(function(){

var employees = [
{
"name" : "Meghna Gogna",
"designation" : "Developer"
},
{
name : "Anurag Patel",
designation : "Developer"
},
{
name : "Suroor",
designation : "Developer"
},
{
name : 'Sahil',
designation : "Developer"
},
{
name : "Umar",
designation : "Developer"
},
{
name : "Kushal",
designation : "Developer"
},
{
name : "Rohit",
designation : "HR"
}
];

if(Employees.find({}).count() === 0){
_.each(employees , function(emp){
Employees.insert(emp);
});
}

});