var clos = document.getElementById("myClos");
var layer = document.getElementById("layer");
var myImg = document.getElementsByTagName("img");
var slide = document.getElementById("dispImg")
var prev = document.getElementById("prev");
var next = document.getElementById("next")
var next = document.getElementById("next");
var prev = document.getElementById("prev")
var imgs = [];
var myIndex = 0;

clos.addEventListener("click",cl)

function cl(){
   layer.style.display="none"; 
}

for(var i=0;i<myImg.length;i++)
    {
       imgs[i] = myImg[i];
      myImg[i].addEventListener("click",function(e){
          layer.style.display="flex";
          slide.style.backgroundImage="url("+e.target.src+")"
           myIndex=(imgs.indexOf(e.target))
          
      })  
    }

next.addEventListener("click",ne)

function ne(){
             myIndex += 1;
    myIndex%=imgs.length;
     slide.style.backgroundImage="url("+imgs[myIndex].src+")"
        
}

prev.addEventListener("click",pr)


function pr(){
             myIndex -= 1;
       if(myIndex<0)
         myIndex=imgs.length-1;
        slide.style.backgroundImage="url("+imgs[myIndex].src+")"         
}

document.addEventListener("keyup",function(e){
    
    switch(e.keyCode){
     case(27):
     cl()       
        break;
            
    case(39):
    ne()
     break;
            
    case(37):
     pr()
    break;
    }
})
