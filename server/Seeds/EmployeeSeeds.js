Meteor.startup(function(){

var smtp={
username : "meghna@innox.io",
password : "meghna1711",
server : "smtp.gmail.com",
port : 465
};

process.env.MAIL_URL="smtp://"+encodeURIComponent(smtp.username) + ":" + encodeURIComponent(smtp.password)+"@"+
encodeURIComponent(smtp.server) + ":" + smtp.port;

var employees = [
{
"name" : "Meghna Gogna",
"designation" : "Developer",
"email" : "meghna@innox.io"
},
{
name : "Anurag Patel",
designation : "Developer",
email : "anurag@innox.io"
},
{
name : "Suroor",
designation : "Developer",
email : "surrorwijdam@gmail.com",
},
{
name : 'Sahil',
designation : "Developer",
email : "sahil.chitkara91@gmail.com",
},
{
name : "Umar",
designation : "Developer",
email : "umar@innox.io"
},
{
name : "Kushal",
designation : "Developer",
email : "kushal@innox.io"
},
{
name : "Rohit",
designation : "HR",
email : "rohit@innox.io"
}
];

if(Employees.find({}).count() === 0){
_.each(employees , function(emp){
Employees.insert(emp);
});
}

});