let t1 ;
let t2 ;
let t3 ;

let str = document.getElementById('h1').innerText;


function toggle(){  //to toggle the states . if the pargoh is hidden or not (it is hidden by def from CSS t is = 0 )
    if (t1==1){ // if it is shown
        document.getElementById('hiden1').style.display='none';//cahnge display to none
        document.getElementById('btn1').innerHTML="المزيد"
        return t1=0; // 
    } else {
        document.getElementById('hiden1').style.display='inline';
        document.getElementById('btn1').innerHTML="اقل"
        return t1=1;
    }
}
function toggle2(){
    if (t2==1){
        document.getElementById('hiden2').style.display='none';
        document.getElementById('btn2').innerHTML="المزيد"
        return t2=0;
    } else {
        document.getElementById('hiden2').style.display='inline';
        document.getElementById('btn2').innerHTML="اقل"
        return t2=1;
    }
}
function toggle3(){  
    if (t3==1){ 
        document.getElementById('hiden3').style.display='none';
        document.getElementById('btn3').innerHTML="المزيد"
        return t3=0; // 
    } else {
        document.getElementById('hiden3').style.display='inline';
        document.getElementById('btn3').innerHTML="اقل"
        return t3=1;
    }
}