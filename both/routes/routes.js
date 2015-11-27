Router.configure({
loadingTemplate : 'loading',
});


Router.route('/' , {
name : 'startScreen',
});

Router.route('/firstPage' , {
name : 'firstPage',
layoutTemplate : 'mainLayout'
});

Router.route('/bill' , {
name : "monthlyBill",
layoutTemplate : 'mainLayout'
});