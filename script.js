// 1. Get all the countries from Asia continent /region using Filter function :-

let request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();

request.onload = function () {
    
    if (request.status == 200){
     
     let valpass = JSON.parse(request.responseText)
    
     let countriess_reg = valpass.filter((element)=>(element.region ==="Asia"));
        console.log(countriess_reg);
    } 
    else{
            request.onerror = function () {
            console.log("request failed")
        }    
    }
 }

 // 2.Get all the countries with population of less than 2 lacs using Filter function

let request_one = new XMLHttpRequest();
request_one.open('GET','https://restcountries.com/v3.1/all',true);
request_one.send();

request_one.onload = function () {
    
    if (request_one.status == 200){
     
     let valresult = JSON.parse(request_one.responseText)
    
     let countrie_population = valresult.filter((element)=>(element.population < 200000));
        console.log(countrie_population);
    } 
    else{
        request_one.onerror = function () {
            console.log("request failed")
        }    
    }
 };


  // 3. Print the following details name, capital, flag using forEach function

  let request_sec = new XMLHttpRequest();
  request_sec.open('GET','https://restcountries.com/v3.1/all',true);
  request_sec.send();
 
  request_sec.onload = function () {
     
     if (request_sec.status == 200){
      
      let valresults = JSON.parse(request_sec.responseText)
         valresults.forEach((element)=>{
             console.log(element.name);
             console.log(element.capital);
             console.log(element.flags.png);
         })
     } 
     else{
         request_sec.onerror = function () {
             console.log("request failed")
         }    
     }
  };
 
 //4. Print the total population of countries using reduce function 

 let request_thr = new XMLHttpRequest();
 request_thr.open('GET','https://restcountries.com/v3.1/all',true);
 request_thr.send();

 request_thr.onload = function () {
    
    if (request_thr.status == 200){
     
     let valresults = JSON.parse(request_thr.responseText)

    var get_pop = valresults.reduce((sum, elem) => (sum + elem.population));
    console.log(get_pop);
    } 
    else{
        request_thr.onerror = function () {
            console.log("request failed")
        }    
    }
 };

 //5. Print the country which use US Dollars as currency

 let request_fr = new XMLHttpRequest();
 request_fr.open('GET','https://restcountries.com/v3.1/all',true);
 request_fr.send();

 request_fr.onload = function () {
    
    if (request_fr.status == 200){
        let valresultss = JSON.parse(request_fr.responseText)
            let valres = valresultss.filter((element)=>(element.currencies === "$"));
                console.log(valres);
    } 
    else{
        request_fr.onerror = function () {
            console.log("request failed")
        }    
    }
};