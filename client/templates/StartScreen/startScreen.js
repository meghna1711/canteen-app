Template.startScreen.rendered = function(){
Meteor.setTimeout(function(){
Router.go('firstPage');
},3000);
}