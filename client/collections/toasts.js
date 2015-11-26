Toasts = new Mongo.Collection(null);

throwToast = function(message){
Toasts.insert({message : message});
}