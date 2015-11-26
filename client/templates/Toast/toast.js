Template.toasts.helpers({
toasts: function() {
return Toasts.find();
}
});

Template.toast.rendered = function(){
Meteor.setTimeout(function(){
$('.alert').fadeOut(3000);
},2000);
}