let count = 0;
//decreasebtn
document.getElementById("decreasebtn").onclick = function(){
    count -= 1;
    document.getElementById("count").innerHTML = count;
}
//reset
document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("increasebtn").onclick = function(){
    count += 1;
    document.getElementById("count").innerHTML = count;
}