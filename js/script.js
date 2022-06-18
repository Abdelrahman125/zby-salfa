var iD = 4
var ingame = []
function addi() {
  iD += 1;
  document.getElementById("icon").innerHTML += "<input type='text' class='input' id='input" + iD + "'>"


}
function donei(){
  
  for(var i = 1; i < iD; i++){
    var input = document.getElementById("input" + i);
    var text = input.value
    ingame.push(text)
  }
 var  firstPage =  document.getElementById("firstPage");
 var  secondPage =  document.getElementById("secondPage");
  firstPage.style.display = "none";
  secondPage.style.display = "flex";
}
