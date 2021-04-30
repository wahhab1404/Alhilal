let t1 ;
let t2 ;
let t3 ;
let v ;
const checkpoint = 600; 

function toggle(){  //to toggle the states . if the pargoh is hidden or not (it is hidden by def from CSS t is = 0 )
    if (t1==1){ // if it is shown
        document.getElementById('hiden1').style.visibility='hidden';//cahnge display to none
        document.getElementById('btn1').innerHTML="المزيد"
        return t1=0; // 
    } else {
        document.getElementById('hiden1').style.visibility='visible';
        document.getElementById('btn1').innerHTML="اقل"
        return t1=1;
    }
}
function toggle2(){
    if (t2==1){
        document.getElementById('hiden2').style.visibility='hidden' ;
        document.getElementById('btn2').innerHTML="المزيد"
        return t2=0;
    } else {
        document.getElementById('hiden2').style.visibility='visible';
        document.getElementById('btn2').innerHTML="اقل"
        return t2=1;
    }
}
function toggle3(){  
    if (t3==1){ 
        document.getElementById('hiden3').style.visibility='hidden';
        document.getElementById('btn3').innerHTML="المزيد"
        return t3=0; // 
    } else {
        document.getElementById('hiden3').style.visibility='visible';
        document.getElementById('btn3').innerHTML="اقل"
        return t3=1;
    }
}

function toggleV(){  
    if (v==1){ 
        document.getElementById('ul').style.display='none';
        document.getElementById('mobile').style.display='block';
        console.log('one item appear');
        document.getElementById('mobile').innerText='موقع نادي الهلال';
      
        
        return v=0; // 
    } else {
      

        document.getElementById('ul').style.display='flex';
        document.getElementById('mobile').style.display='non';
        console.log('normal nav should appeare');
        document.getElementById('mobile').innerText='x';
        
        return v=1;
    }
}

//  Animate the Info Box using event listener
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= checkpoint) {
    opacity = 0 + currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".info").style.opacity = opacity;
});