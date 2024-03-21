console.log("1");

setTimeout(()=>{
    console.log("0초경과");
},0);

setTimeout(()=>{
    console.log("2초경과-1");
},2000);

console.log("2");

setTimeout(()=>{
    console.log("5초 경과");
},5000);
console.log("3");