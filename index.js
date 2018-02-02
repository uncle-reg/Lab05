var num = document.getElementById("num");
var value = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click", function(){
    if (num.value == value) {
        document.getElementById("numDisplay").innerText = "You Win! Score: "+score;
    } else {
        if (num.value > value) {    
            document.getElementById("numDisplay").innerText = "Too Big";
        } else {
            document.getElementById("numDisplay").innerText = "Too Small";
        }
        score = score - 1;
    }
});