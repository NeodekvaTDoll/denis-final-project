let NavBar = document.getElementById('navi');
let toggleButton = document.getElementById('btn');



toggleButton.addEventListener('click' , function() {
   NavBar.classList.toggle('active')
})



document.getElementById('click1').addEventListener('click' , function (){
    alert('You just choose Dog walking')
 })
 document.getElementById('click2').addEventListener('click' , function (){
    alert('You just choose Pet Sitting')
 })
 document.getElementById('click3').addEventListener('click' , function (){
    alert('You just choose Overnight Care')
 })
 document.getElementById('click4').addEventListener('click' , function (){
    alert('You just choose Other Services')
 })