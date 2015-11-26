Template.errors.helpers({
errors: function() {
return Errors.find();
}
});

Template.error.rendered = function(){
Meteor.setTimeout(function(){
$('.alert').fadeOut(3000);
},2000);
}