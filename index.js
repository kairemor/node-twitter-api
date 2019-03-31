const Twit = require('twit'); 

const private_key = require('./private_keys'); 

const T = new Twit(private_key) ;

setInterval(tweet("hello "))

//Searching tweet with key world 

params = {
    q : 'lem' , 
    count: 2
}
T.get('search/tweets', params, (err,data,response) => {
    console.log('!!!!!!!!!!!!!!!!!response !!!!!!!!!!!!!!!')
    console.log(response) ;
})

function tweet (txt){
    let rand1 = Math.round(Math.random*1000);
    let rand2 = Math.round(Math.random*1000); 
    let operateur = Math.round(Math.random*10) ; 
    if (operateur <= 2){
        params = {
            status : rand1 + " + " + rand1 + " = " + rand1+rand1
        }
    }else if(operateur <= 6){
        params = {
            status : rand1 + " - " + rand1 + " = " + rand1-rand1
        }
    }
    else {
        params = {
            status : rand1 + " * " + rand1 + " = " + rand1*rand1
        }
    }
    }

    T.post('statuses/update', params, (ett,data,response) => {
        console.log("worked")
        // console.log(data) ; 
    });
}