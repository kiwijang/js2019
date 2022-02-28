document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener('click',(e)=>{
        click = true;
        blackStar(e);
    },false);
    document.addEventListener('mouseover',(e)=>{
        if(!click)
            blackStar(e);
    },false);
},false);


let click = false;
function blackStar(e){
    let stars = document.getElementsByClassName('starimg');
    // console.log(e.target.getAttribute('data-star'));
    let starVal = e.target.getAttribute('data-star');
    // console.log(stars[starVal]);
    removeStar();
    if (starVal == 1){
        stars[0].classList.add('y');
        document.getElementById('comment').innerText = "一星・゜・(PД`q｡)・゜・";
    }
    else if (starVal == 2){
        stars[0].classList.add('y');
        stars[1].classList.add('y');
        document.getElementById('comment').innerText = "二星(›´ω`‹ )";
    }
    else if (starVal == 3){
        stars[0].classList.add('y');
        stars[1].classList.add('y');
        stars[2].classList.add('y');
        document.getElementById('comment').innerText = "三星(´・ω・`)";
    }
    else if (starVal == 4){
        stars[0].classList.add('y');
        stars[1].classList.add('y');
        stars[2].classList.add('y');
        stars[3].classList.add('y');
        document.getElementById('comment').innerText = "四星_(:3 ⌒ﾞ)_";
    }
    else if (starVal == 5){
        stars[0].classList.add('y');
        stars[1].classList.add('y');
        stars[2].classList.add('y');
        stars[3].classList.add('y');
        stars[4].classList.add('y');
        document.getElementById('comment').innerText = "五星(〃∀〃)";
    }
    else{
        removeStar();
        document.getElementById('comment').innerText = "";
        click = false;
    }
}

function removeStar(){
    let stars = document.getElementsByClassName('starimg');
    for(let star of stars){
        star.classList.remove('y');
        console.log("hi");
    }
}

