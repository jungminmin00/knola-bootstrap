import $ from 'jquery';

$(function(){
    let windowW = $(window).width();
    // allData();
      console.log(windowW);

    if(windowW >= 1339){
    }else if(windowW < 1338 && windowW >= 980){
        nav();
    }else if(windowW < 579 ){
      // 모바일
      nav();
    }
  }    
)

  function nav(){     // top포함
    document.querySelector('#wrap #header p').addEventListener("click",function(){
        console.log('hi');
        document.querySelector('header div:last-child').style.display='flex';
        document.querySelector('header div:last-child').animate([
            { left: "0%", opacity : "0%" },
            { left: "0%", opacity : "100%" }
            // { left: "50%", transform: "rotate(360deg)" }
        ], 500);      
    }); 
    document.querySelector('header div:last-child p').addEventListener('click', function(){
        document.querySelector('header div:last-child').animate([
            { left: "0%", opacity : "100%" },
            { left: "0%", opacity : "0%" }
        ], 500).finished.then(function(){
            document.querySelector('header div:last-child').style.display = 'none';
        })
    });
    document.querySelector('header div:last-child nav > ul').addEventListener('click', function(){
        document.querySelector('header div:last-child').animate([
            { left: "0%", opacity : "100%" },
            { left: "0%", opacity : "0%" }
        ], 500).finished.then(function(){
            document.querySelector('header div:last-child').style.display = 'none';
        })
    });
    document.querySelector('header div:last-child .sub ul').addEventListener('click', function(){
        document.querySelector('header div:last-child').animate([
            { left: "0%", opacity : "100%" },
            { left: "0%", opacity : "0%" }
        ], 500).finished.then(function(){
            document.querySelector('header div:last-child').style.display = 'none';
        })
    });

    
  }