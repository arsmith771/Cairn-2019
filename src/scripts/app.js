var xmlhttp = new XMLHttpRequest();
var url = "../csvjson.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var output = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    output += '<article class="story-screen">' + arr[i].svg + '<div class="story-screen__text"><div class="story-screen__text__close">x</div>' + arr[i].textContent + '</div><footer class="story-screen__footer">Text here TBC</footer></article>';
  }
  document.getElementById("app").innerHTML = output;
}