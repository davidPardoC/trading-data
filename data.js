let sec = 0;
let data = [];
for (let index = 0; index <=5; index++) {
  console.log({x: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDay()+13,new Date().getHours()-5,new Date().getMinutes(),new Date().getSeconds()-sec), open:Math.random() * (2 - 1) , high:Math.random() * (2 - 1), close:Math.random() * (2 - 1), low:Math.random() * (2 - 1), })
  sec ++;
}
/* console.log(data); */
