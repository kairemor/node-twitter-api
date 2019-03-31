const Twit = require('twit'); 

const private_key = require('./private_keys'); 

const T = new Twit(private_key) ;

function tweet (){
    let rand1 = Math.round(Math.random()*1000);
    let rand2 = Math.round(Math.random()*1000); 
    console.log(rand1 + "  " + rand2)
    let operateur = Math.round(Math.random()*10) ; 
    console.log("starting")
    if (operateur <= 2){
        let result =  rand1+rand2
        params = {
            status : rand1 + " + " + rand2 + " = " + result
        }
    }else if(operateur <= 6){
        let result =  rand1-rand2
        params = {
            status : rand1 + " - " + rand2 + " = " + result
        }
    }
    else {
        let result =  rand1*rand2
        params = {
            status : rand1 + " * " + rand2 + " = " + result
        }
    }
    T.post('statuses/update', params, (ett,data,response) => {
        console.log("worked")
        // console.log(data) ; 
    });
}

setInterval(tweet, 10*1000)

//Searching tweet with key world 

// params = {
//     q : 'lem' , 
//     count: 2
// }
// T.get('search/tweets', params, (err,data,response) => {
//     console.log('!!!!!!!!!!!!!!!!!response !!!!!!!!!!!!!!!')
//     console.log(response) ;
// })



    
