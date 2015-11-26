Template.loading.onRendered(function(){
Meteor.setTimeout(function(){
Router.go('firstPage');
} , 2000);
})