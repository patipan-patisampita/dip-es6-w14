const apple = 15; //global

{//local
    const apple = 20;
    console.log(apple);
    document.write(`<br />${apple}`);
}
console.log(apple);
//document.getElementById("demo").innerHTML = `${apple}`;
document.write(`<br />${apple}`);