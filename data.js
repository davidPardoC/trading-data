let sec = 0;
let data = [];
for (let index = 0; index <=1800; index++) {
  data.push({x: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDay(),new Date().getHours(),new Date().getMinutes(),sec), open:Math.random() * (2 - 1) , high:Math.random() * (2 - 1), close:Math.random() * (2 - 1), low:Math.random() * (2 - 1), })
  sec --;
}
console.log(data);
