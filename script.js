var env=document.getElementById('env')
var charactar=document.getElementById('charactar');
var obstacle=document.getElementById('obstacle');

env.addEventListener("click",jump);
// charactar.addEventListener("click",jump);
function jump(){
	// console.log('click')
	if (charactar.classList!="jump") {
		charactar.classList.add("jump")
	}
	setTimeout(()=>{
		charactar.classList.remove("jump")
	},500)
}

var gameOver=setInterval(()=>{
	var top=parseInt(window.getComputedStyle(charactar).getPropertyValue("top"));
	var left=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

	if(top>=370 && left>0 && left<160){
		alert("You LOSE...!!!!!!!  Press Ok To Play Again...");
		obstacle.style.animation="none";
		location.reload();
	}


},10)

