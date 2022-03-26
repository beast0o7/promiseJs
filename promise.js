function toOdd(data) {
  const prom =  new Promise((resolve, reject)=>{
    console.log("Processing");
    setTimeout(() => {
      if(isNaN(data)||data===null){
        return console.log("not a number");
       }
       if(data%2!=0){
       return resolve(data);
       }
       if(data%2==0){
        return reject(data);
       }
    }, 3000);
        
    }).then((data)=>{
        console.log(`${data} is an odd number,It will be made even by adding 1`);
        return data + 1;
    }).then((even)=>{
      setTimeout(() => {
        console.log(even);
      }, 2000);
    })
    .catch((data)=>{console.log(`${data} is already an even number`)});
}
toOdd(null);
