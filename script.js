var word = "hello";
var l1 = "";
var l2 = "";
var l3 = "";
var l4 = "";
var l5 = "";
var num = 1;

function guess(){
if (num == 1) {
testone();
winchecker();
}
else if (num == 2){
testtwo();
winchecker();
}
else if (num == 3){
testthree();
winchecker();
}
else if (num == 4){
testfour();
winchecker();
}
else if (num == 5){
testfive();
winchecker();
}
else if (num == 6){
testsix();
winchecker6();
}
num += 1;
}


function testone() {
l1 = document.getElementById("11").value;
l2 = document.getElementById("12").value;
l3 = document.getElementById("13").value;
l4 = document.getElementById("14").value;
l5 = document.getElementById("15").value;
//Letter1
if (l1.toLowerCase() == word.substring(0,1)){
document.getElementById("11").style.background = "green"
}
else if ((l1.toLowerCase() == word.substring(1,2)) || (l1.toLowerCase() == word.substring(2,3)) || (l1.toLowerCase() == word.substring(3,4)) || (l1.toLowerCase() == word.substring(4,5))){
document.getElementById("11").style.background = "yellow"
}
else {
document.getElementById("11").style.background = "red"
}
//Letter 2
if (l2.toLowerCase() == word.substring(1,2)){
document.getElementById("12").style.background = "green"
}
else if ((l2.toLowerCase() == word.substring(0,1)) || (l2.toLowerCase() == word.substring(2,3)) || (l2.toLowerCase() == word.substring(3,4)) || (l2.toLowerCase() == word.substring(4,5))){
document.getElementById("12").style.background = "yellow"
}
else {
document.getElementById("12").style.background = "red"
}
//Letter 3
if (l3.toLowerCase() == word.substring(2,3)){
document.getElementById("13").style.background = "green"
}
else if ((l3.toLowerCase() == word.substring(0,1)) || (l3.toLowerCase() == word.substring(1,2)) || (l3.toLowerCase() == word.substring(3,4)) || (l3.toLowerCase() == word.substring(4,5))){
document.getElementById("13").style.background = "yellow"
}
else {
document.getElementById("13").style.background = "red"
}
//Letter 4
if (l4.toLowerCase() == word.substring(3,4)){
document.getElementById("14").style.background = "green"
}
else if ((l4.toLowerCase() == word.substring(0,1)) || (l4.toLowerCase() == word.substring(1,2)) || (l4.toLowerCase() == word.substring(2,3)) || (l4.toLowerCase() == word.substring(4,5))){
document.getElementById("14").style.background = "yellow"
}
else {
document.getElementById("14").style.background = "red"
}
//Letter 5
if (l5.toLowerCase() == word.substring(4,5)){
document.getElementById("15").style.background = "green"
}
else if ((l5.toLowerCase() == word.substring(0,1)) || (l5.toLowerCase() == word.substring(1,2)) || (l5.toLowerCase() == word.substring(2,3)) || (l5.toLowerCase() == word.substring(3,4))){
document.getElementById("15").style.background = "yellow"
}
else {
document.getElementById("15").style.background = "red"
}
}

function testtwo(){
l1 = document.getElementById("21").value;
l2 = document.getElementById("22").value;
l3 = document.getElementById("23").value;
l4 = document.getElementById("24").value;
l5 = document.getElementById("25").value;
//Letter1
if (l1.toLowerCase() == word.substring(0,1)){
document.getElementById("21").style.background = "green"
}
else if ((l1.toLowerCase() == word.substring(1,2)) || (l1.toLowerCase() == word.substring(2,3)) || (l1.toLowerCase() == word.substring(3,4)) || (l1.toLowerCase() == word.substring(4,5))){
document.getElementById("21").style.background = "yellow"
}
else {
document.getElementById("21").style.background = "red"
}
//Letter 2
if (l2.toLowerCase() == word.substring(1,2)){
document.getElementById("22").style.background = "green"
}
else if ((l2.toLowerCase() == word.substring(0,1)) || (l2.toLowerCase() == word.substring(2,3)) || (l2.toLowerCase() == word.substring(3,4)) || (l2.toLowerCase() == word.substring(4,5))){
document.getElementById("22").style.background = "yellow"
}
else {
document.getElementById("22").style.background = "red"
}
//Letter 3
if (l3.toLowerCase() == word.substring(2,3)){
document.getElementById("23").style.background = "green"
}
else if ((l3.toLowerCase() == word.substring(0,1)) || (l3.toLowerCase() == word.substring(1,2)) || (l3.toLowerCase() == word.substring(3,4)) || (l3.toLowerCase() == word.substring(4,5))){
document.getElementById("23").style.background = "yellow"
}
else {
document.getElementById("23").style.background = "red"
}
//Letter 4
if (l4.toLowerCase() == word.substring(3,4)){
document.getElementById("24").style.background = "green"
}
else if ((l4.toLowerCase() == word.substring(0,1)) || (l4.toLowerCase() == word.substring(1,2)) || (l4.toLowerCase() == word.substring(2,3)) || (l4.toLowerCase() == word.substring(4,5))){
document.getElementById("24").style.background = "yellow"
}
else {
document.getElementById("24").style.background = "red"
}
//Letter 5
if (l5.toLowerCase() == word.substring(4,5)){
document.getElementById("25").style.background = "green"
}
else if ((l5.toLowerCase() == word.substring(0,1)) || (l5.toLowerCase() == word.substring(1,2)) || (l5.toLowerCase() == word.substring(2,3)) || (l5.toLowerCase() == word.substring(3,4))){
document.getElementById("25").style.background = "yellow"
}
else {
document.getElementById("25").style.background = "red"
}
}

function testthree() {
l1 = document.getElementById("31").value;
l2 = document.getElementById("32").value;
l3 = document.getElementById("33").value;
l4 = document.getElementById("34").value;
l5 = document.getElementById("35").value;
//Letter1
if (l1.toLowerCase() == word.substring(0,1)){
document.getElementById("31").style.background = "green"
}
else if ((l1.toLowerCase() == word.substring(1,2)) || (l1.toLowerCase() == word.substring(2,3)) || (l1.toLowerCase() == word.substring(3,4)) || (l1.toLowerCase() == word.substring(4,5))){
document.getElementById("31").style.background = "yellow"
}
else {
document.getElementById("31").style.background = "red"
}
//Letter 2
if (l2.toLowerCase() == word.substring(1,2)){
document.getElementById("32").style.background = "green"
}
else if ((l2.toLowerCase() == word.substring(0,1)) || (l2.toLowerCase() == word.substring(2,3)) || (l2.toLowerCase() == word.substring(3,4)) || (l2.toLowerCase() == word.substring(4,5))){
document.getElementById("32").style.background = "yellow"
}
else {
document.getElementById("32").style.background = "red"
}
//Letter 3
if (l3.toLowerCase() == word.substring(2,3)){
document.getElementById("33").style.background = "green"
}
else if ((l3.toLowerCase() == word.substring(0,1)) || (l3.toLowerCase() == word.substring(1,2)) || (l3.toLowerCase() == word.substring(3,4)) || (l3.toLowerCase() == word.substring(4,5))){
document.getElementById("33").style.background = "yellow"
}
else {
document.getElementById("33").style.background = "red"
}
//Letter 4
if (l4.toLowerCase() == word.substring(3,4)){
document.getElementById("34").style.background = "green"
}
else if ((l4.toLowerCase() == word.substring(0,1)) || (l4.toLowerCase() == word.substring(1,2)) || (l4.toLowerCase() == word.substring(2,3)) || (l4.toLowerCase() == word.substring(4,5))){
document.getElementById("34").style.background = "yellow"
}
else {
document.getElementById("34").style.background = "red"
}
//Letter 5
if (l5.toLowerCase() == word.substring(4,5)){
document.getElementById("35").style.background = "green"
}
else if ((l5.toLowerCase() == word.substring(0,1)) || (l5.toLowerCase() == word.substring(1,2)) || (l5.toLowerCase() == word.substring(2,3)) || (l5.toLowerCase() == word.substring(3,4))){
document.getElementById("35").style.background = "yellow"
}
else {
document.getElementById("35").style.background = "red"
}
}

function testfour(){
l1 = document.getElementById("41").value;
l2 = document.getElementById("42").value;
l3 = document.getElementById("43").value;
l4 = document.getElementById("44").value;
l5 = document.getElementById("45").value;
//Letter1
if (l1.toLowerCase() == word.substring(0,1)){
document.getElementById("41").style.background = "green"
}
else if ((l1.toLowerCase() == word.substring(1,2)) || (l1.toLowerCase() == word.substring(2,3)) || (l1.toLowerCase() == word.substring(3,4)) || (l1.toLowerCase() == word.substring(4,5))){
document.getElementById("41").style.background = "yellow"
}
else {
document.getElementById("41").style.background = "red"
}
//Letter 2
if (l2.toLowerCase() == word.substring(1,2)){
document.getElementById("42").style.background = "green"
}
else if ((l2.toLowerCase() == word.substring(0,1)) || (l2.toLowerCase() == word.substring(2,3)) || (l2.toLowerCase() == word.substring(3,4)) || (l2.toLowerCase() == word.substring(4,5))){
document.getElementById("42").style.background = "yellow"
}
else {
document.getElementById("42").style.background = "red"
}
//Letter 3
if (l3.toLowerCase() == word.substring(2,3)){
document.getElementById("43").style.background = "green"
}
else if ((l3.toLowerCase() == word.substring(0,1)) || (l3.toLowerCase() == word.substring(1,2)) || (l3.toLowerCase() == word.substring(3,4)) || (l3.toLowerCase() == word.substring(4,5))){
document.getElementById("43").style.background = "yellow"
}
else {
document.getElementById("43").style.background = "red"
}
//Letter 4
if (l4.toLowerCase() == word.substring(3,4)){
document.getElementById("44").style.background = "green"
}
else if ((l4.toLowerCase() == word.substring(0,1)) || (l4.toLowerCase() == word.substring(1,2)) || (l4.toLowerCase() == word.substring(2,3)) || (l4.toLowerCase() == word.substring(4,5))){
document.getElementById("44").style.background = "yellow"
}
else {
document.getElementById("44").style.background = "red"
}
//Letter 5
if (l5.toLowerCase() == word.substring(4,5)){
document.getElementById("45").style.background = "green"
}
else if ((l5.toLowerCase() == word.substring(0,1)) || (l5.toLowerCase() == word.substring(1,2)) || (l5.toLowerCase() == word.substring(2,3)) || (l5.toLowerCase() == word.substring(3,4))){
document.getElementById("45").style.background = "yellow"
}
else {
document.getElementById("45").style.background = "red"
}
}

function testfive(){
l1 = document.getElementById("51").value;
l2 = document.getElementById("52").value;
l3 = document.getElementById("53").value;
l4 = document.getElementById("54").value;
l5 = document.getElementById("55").value;
//Letter1
if (l1.toLowerCase() == word.substring(0,1)){
document.getElementById("51").style.background = "green"
}
else if ((l1.toLowerCase() == word.substring(1,2)) || (l1.toLowerCase() == word.substring(2,3)) || (l1.toLowerCase() == word.substring(3,4)) || (l1.toLowerCase() == word.substring(4,5))){
document.getElementById("51").style.background = "yellow"
}
else {
document.getElementById("51").style.background = "red"
}
//Letter 2
if (l2.toLowerCase() == word.substring(1,2)){
document.getElementById("52").style.background = "green"
}
else if ((l2.toLowerCase() == word.substring(0,1)) || (l2.toLowerCase() == word.substring(2,3)) || (l2.toLowerCase() == word.substring(3,4)) || (l2.toLowerCase() == word.substring(4,5))){
document.getElementById("52").style.background = "yellow"
}
else {
document.getElementById("52").style.background = "red"
}
//Letter 3
if (l3.toLowerCase() == word.substring(2,3)){
document.getElementById("53").style.background = "green"
}
else if ((l3.toLowerCase() == word.substring(0,1)) || (l3.toLowerCase() == word.substring(1,2)) || (l3.toLowerCase() == word.substring(3,4)) || (l3.toLowerCase() == word.substring(4,5))){
document.getElementById("53").style.background = "yellow"
}
else {
document.getElementById("53").style.background = "red"
}
//Letter 4
if (l4.toLowerCase() == word.substring(3,4)){
document.getElementById("54").style.background = "green"
}
else if ((l4.toLowerCase() == word.substring(0,1)) || (l4.toLowerCase() == word.substring(1,2)) || (l4.toLowerCase() == word.substring(2,3)) || (l4.toLowerCase() == word.substring(4,5))){
document.getElementById("54").style.background = "yellow"
}
else {
document.getElementById("54").style.background = "red"
}
//Letter 5
if (l5.toLowerCase() == word.substring(4,5)){
document.getElementById("55").style.background = "green"
}
else if ((l5.toLowerCase() == word.substring(0,1)) || (l5.toLowerCase() == word.substring(1,2)) || (l5.toLowerCase() == word.substring(2,3)) || (l5.toLowerCase() == word.substring(3,4))){
document.getElementById("55").style.background = "yellow"
}
else {
document.getElementById("55").style.background = "red"
}
}

function testsix(){
l1 = document.getElementById("61").value;
l2 = document.getElementById("62").value;
l3 = document.getElementById("63").value;
l4 = document.getElementById("64").value;
l5 = document.getElementById("65").value;
//Letter1
if (l1.toLowerCase() == word.substring(0,1)){
document.getElementById("61").style.background = "green"
}
else if ((l1.toLowerCase() == word.substring(1,2)) || (l1.toLowerCase() == word.substring(2,3)) || (l1.toLowerCase() == word.substring(3,4)) || (l1.toLowerCase() == word.substring(4,5))){
document.getElementById("61").style.background = "yellow"
}
else {
document.getElementById("61").style.background = "red"
}
//Letter 2
if (l2.toLowerCase() == word.substring(1,2)){
document.getElementById("62").style.background = "green"
}
else if ((l2.toLowerCase() == word.substring(0,1)) || (l2.toLowerCase() == word.substring(2,3)) || (l2.toLowerCase() == word.substring(3,4)) || (l2.toLowerCase() == word.substring(4,5))){
document.getElementById("62").style.background = "yellow"
}
else {
document.getElementById("62").style.background = "red"
}
//Letter 3
if (l3.toLowerCase() == word.substring(2,3)){
document.getElementById("63").style.background = "green"
}
else if ((l3.toLowerCase() == word.substring(0,1)) || (l3.toLowerCase() == word.substring(1,2)) || (l3.toLowerCase() == word.substring(3,4)) || (l3.toLowerCase() == word.substring(4,5))){
document.getElementById("63").style.background = "yellow"
}
else {
document.getElementById("63").style.background = "red"
}
//Letter 4
if (l4.toLowerCase() == word.substring(3,4)){
document.getElementById("64").style.background = "green"
}
else if ((l4.toLowerCase() == word.substring(0,1)) || (l4.toLowerCase() == word.substring(1,2)) || (l4.toLowerCase() == word.substring(2,3)) || (l4.toLowerCase() == word.substring(4,5))){
document.getElementById("64").style.background = "yellow"
}
else {
document.getElementById("64").style.background = "red"
}
//Letter 5
if (l5.toLowerCase() == word.substring(4,5)){
document.getElementById("65").style.background = "green"
}
else if ((l5.toLowerCase() == word.substring(0,1)) || (l5.toLowerCase() == word.substring(1,2)) || (l5.toLowerCase() == word.substring(2,3)) || (l5.toLowerCase() == word.substring(3,4))){
document.getElementById("65").style.background = "yellow"
}
else {
document.getElementById("65").style.background = "red"
}
}

function winchecker(){
  if (l1.toLowerCase() == word.substring(0,1) && ((l2.toLowerCase() == word.substring(1,2))) && (l3.toLowerCase() == word.substring(2,3)) && ((l4.toLowerCase() == word.substring(3,4))) && (l5.toLowerCase() == word.substring(4,5))) {
  document.getElementById("answer").innerHTML = "You Win!"
  num = 7;
  }
}

function winchecker6() {
    if (l1.toLowerCase() == word.substring(0,1) && ((l2.toLowerCase() == word.substring(1,2))) && (l3.toLowerCase() == word.substring(2,3)) && ((l4.toLowerCase() == word.substring(3,4))) && (l5.toLowerCase() == word.substring(4,5))) {
  document.getElementById("answer").innerHTML = "You Win!"
  }
  else{
  document.getElementById("answer").innerHTML = "You Lose! The word was " + word + "."
  }
}

//document.getElementById("11").style.background = "red"
//document.getElementById("11").style.background = "green"
//document.getElementById("11").style.background = "yellow"
