const Twit = require('twit'); 

const private_key = require('./private_keys'); 

const T = new Twit(private_key) ;

// post a hello word 
params = {
    status : 'tweet this' ,
}
T.post('statuses/update', params, (ett,data,response) => {
    console.log("worked")
    // console.log(data) ; 
});

//Searching tweet with key world 

params = {
    q : 'lem' , 
    count: 2
}
T.get('search/tweets', params, (err,data,response) => {
    console.log('!!!!!!!!!!!!!!!!!response !!!!!!!!!!!!!!!')
    console.log(response) ;
})