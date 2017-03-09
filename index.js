var data = [
  ["twitter",'<a href="https://twitter.com/zeyadetman" target="_blank">@zeyadetman</a>'],
  ["facebook",'<a href="https://www.facebook.com/zeyadetman" target="_blank">https://www.facebook.com/zeyadetman</a>'],
  ["blog",'<a href="http://zeyadetman.wordpress.com/" target="_blank">http://zeyadetman.wordpress.com/</a>'],
  ["github",'<a href="https://github.com/zeyadetman" target="_blank">https://github.com/zeyadetman</a>'],
  ["mail",'<a href="zeyadetman@gmail.com" target="_blank">zeyadetman@gmail.com</a>'],
  ["codeforces",'<a href="http://codeforces.com/profile/zeyadetman" target="_blank">http://codeforces.com/profile/zeyadetman</a>'],
  ["ask",'<a href="https://ask.fm/zeyadetman" target="_blank">https://ask.fm/zeyadetman</a>'],
  ["linkedin",'<a href="https://www.linkedin.com/in/zeyadetman/" target="_blank">https://www.linkedin.com/in/zeyadetman/</a>'],
  ["goodreads",'<a href="https://www.goodreads.com/user/show/21727682-zeyad-etman" target="_blank">https://www.goodreads.com/user/show/21727682-zeyad-etman</a>'],
  ["quora",'<a href="https://www.quora.com/profile/Zeyad-Etman" target="_blank">https://www.quora.com/profile/Zeyad-Etman</a>'],
  ["help", "write any command from this list: twitter, facebook, blog, github, mail, codeforces, ask, linkedin, goodreads, quora"]
];

var x="";
var iidd="";
var lol=40;
var ne=600;
var bod = document.querySelector('body');

var  ff = document.createElement('p');
ne++;
ff.setAttribute('id',ne.toString());
bod.appendChild(ff);
document.getElementById(ne.toString()).innerHTML = ">";

var inp = document.createElement('input');
bod.appendChild(inp);
iidd++;
inp.setAttribute('id',iidd.toString());
window.addEventListener("keydown", clickHandler, false);
var x = document.getElementById(iidd.toString()).value;
function clickHandler(e){
  if(e.keyCode == 13) {
     document.getElementById(iidd.toString()).autofocus = true;
     excute();
   }
}


function excute(){

  document.getElementById(iidd.toString()).disabled = true;
  var x = document.getElementById(iidd.toString()).value;
  //console.log(x);
  var flag = true;
  for(var i=0;i<data.length;i++){
    if(data[i][0] == x.toString()){
       console.log(data[i][1]);
       console.log(lol.toString());
       var disp = document.createElement('p');
       disp.style.color = "00FF00";
       disp.setAttribute('id',lol.toString());

       //disp.style.font = "14px monospace";
       bod.appendChild(disp);
       document.getElementById(lol.toString()).innerHTML = data[i][1];
       flag=false;
     }
  }
if(flag==true){  var disp = document.createElement('p');
  disp.setAttribute('id',lol.toString());
  bod.appendChild(disp);
  document.getElementById(lol.toString()).innerHTML = "Unknown command " + document.getElementById(iidd.toString()).value.toString() ;
}
lol++;
//  delete inpp;
  var  ff = document.createElement('p');
  ne++;
  ff.setAttribute('id',ne.toString());
  bod.appendChild(ff);
  document.getElementById(ne.toString()).innerHTML = ">";
  var  inpp = document.createElement('input');
    iidd++;
    inpp.setAttribute('id',iidd.toString());

    bod.appendChild(inpp);


  //  document.querySelector('inp').autofocus = true;

}
