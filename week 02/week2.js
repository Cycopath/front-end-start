//var str = 'hello world!';
//console. log('app.js');

//var nick = 'my nick is \'aji\'';
//var homepage = "niceaji.github.com";
var man ={
  name: 'aj',
  age:30,
  hobby: 'bike'
};

// if(man.name=="aj"){
//   console.log("이름 :" + man.name);
// }
// else{
//   console.log("이름이 없다");
// }
// if(man.age > 30)
// {
//   console.log("old");
// }
// else if(man.age > 20)
// {
//   console.log("young");
// }
// for(var count =0; count <5; count++)
// {
//   console.log ("Repeat time : " + count);
// }
function sum(x){
  var y =1;
  return x+y;
}
console.log(sum(10));

function detect(x){
  if(x%2 == "0")
    console.log("Even Num")
  else
    console.log("Odd Num")

}
// var manName = 'aj';
// var manAge = 30;
//
// man.age
// man.hobby
function nine(x) //구구단
{
  for(var j=2; j<10; j++)
  {
    console.log(j+"단 출력");
    for(var i = 1; i<10; i++)
    {
      console.log(j+" X "+i+" = "+i*j);
    }
  }
}

function hund(x)  //100 출력
{
  var num = 1;
  while(num<=100)
  {
      console.log(num);
      num++;
  }
}

function selectprint(x)  // 홀수 짝수 100
{
  var num = 0;
  if(x == "1")
  {
    num = 1;
  }
    while(num<=100)
    {
      console.log (num);
      num +=2;
    }

}
