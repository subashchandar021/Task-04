var rq= new XMLHttpRequest();
rq.open('GET','https://restcountries.eu/rest/v2/all',true);
rq.send();
rq.onload=function(){
     var country=JSON.parse(this.response);
     var a=country.filter((element)=>{
         return element.region=="Asia";
     })
     console.log(a);
    }
