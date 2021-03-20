'use strict';
let yourName = prompt('Hey there, whats your name?');
alert ('welcome '+yourName +'nice to meet you 😄');
let ans1 = prompt(yourName+ ' ,are you ready to know me ?');
let point=0;
switch (ans1.toLowerCase()) {
case 'yes':
case 'y':
  alert(ans1 + ' lets go ♥☺');
  break;
default:
  alert(ans1 + ' !!💔☹️') ;

  // eslint-disable-next-line no-case-declarations
  let ans2 = prompt(yourName+ ' ,answer withe yes if you change your mined ☺');

  if (ans2.toLowerCase() ==='y'||ans2==='yes'){
    alert(ans1 + ' lets go ♥☺');
  }
  else{
    alert('come back later');
  }
  break;
}
function movie() {
  let ans3=prompt('do you think i am a movie addict?');
  if (ans3.toLowerCase()==='no'|| ans3.toLowerCase() ==='n') {
    point++;

    alert('true');
    alert('your answer is '+ans3+' ,I only like some of theme');
  } else {

    alert('false');
    alert('you answer is '+ans3 + ' NO IAM NOT ');
  }
}
movie();

function color() {
  let ans4=prompt('do you think that i am a good painter?');
  if (ans4.toLowerCase()==='yes'|| ans4.toLowerCase() ==='y') {
    point++;

    alert(ans4 +' true');
    alert('your answer is '+ans4+' ,i am a very good one');

  } else {

    alert(' false');
    alert('you answer is '+ans4 + ' NO IAM a good one ');

  }
}
color();

function food() {
  let ans5=prompt('do i like shawarma?🌯🌯🌯');
  if (ans5.toLowerCase()==='yes'|| ans5.toLowerCase() ==='y') {
    point++;

    alert(' true');
    alert('your answer is '+ans5+' ,shawarma is my second name  ');

  } else {

    alert('false');
    alert('you answer is '+ans5 + ' who does not!! ');

  }
}
food();

function makeup() {
  let ans6=prompt('am i a makeup artist?');
  if (ans6.toLowerCase()==='no'|| ans6.toLowerCase() ==='n') {
    point++;

    alert('true');
    alert('your answer is '+ans6+' ,unfortunately it is true ');

  } else {

    alert('false');
    alert('you answer is '+ans6 + ' I wish i was ');

  }
}
makeup();

function math() {
  let ans7=prompt('do you think i am good in math ?');
  if (ans7.toLowerCase()==='yes'|| ans7.toLowerCase() ==='y') {
    point++;

    alert('true');
    alert('your answer is '+ans7+' ,einstein is my grandfather');

  } else {

    alert('false');
    alert('you answer is '+ans7 + 'Iam a math genius ');
  }
}
math();

function age() {
  let ans8;
  // eslint-disable-next-line no-case-declarations
  let i=0;
  do {
    i=i++;
    ans8=Number(prompt('guss my age '));
    if (ans8>23) {

      alert(ans8+ ' You have guessed too high!');

      alert ('again') ;
    }
    else if (ans8===23) {

      alert(ans8+' true');
      point++;

    }
    else {

      alert(ans8+' You have guessed too low!');

      alert ('again') ;
    }
    i++;

  } while ( ans8 !== 23 && i<4);
  alert( 'I am a 23 years old');
}
age();

function place() {
  let h =['irbid','jordan','bushra'];
  let r=false;
  let ans9;
  for (let i=1;i<=6;i++)
  {
    ans9=prompt('Guess where I live');
    for (let i=0;i<h.length;i++)
    {

      if (ans9===h[i])
      {
        r=true;
        point++;
        break;
      }

    }
    if(r)
    {
      alert('your answer is true');
      break;
    }
    alert('you are wrong');
  }
  if (r===false){
    alert('I live in : '+h[0]+'  '+h[1]+'  '+h[2]);
  }
  alert('you got : ' + point + '  from 7');
}
place();
