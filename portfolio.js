 h2 = document.querySelector("h2");

 function changecolor(color,delay){
    setTimeout(()=>{
     h2.style.color = color;
    },delay)
  
}

changecolor("yellow",1000);
   
changecolor("blue",2000);
   
changecolor("pink",3000);
changecolor("purple",4000);
   

