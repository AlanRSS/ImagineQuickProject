window.onscroll = function() {shortenbar()};

function shortenbar(){
    if(document.body.scrollTop > 10){
        document.getElementById('c').style.fontSize = "150%";
    }
}