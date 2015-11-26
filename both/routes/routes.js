Router.configure({
loadingTemplate : 'loading',
layoutTemplate : 'mainLayout'
});


Router.route('/' , {
name : 'loading'
});

Router.route('/firstPage' , {
name : 'firstPage'
});

Router.route('/bill' , {
name : "monthlyBill"
});