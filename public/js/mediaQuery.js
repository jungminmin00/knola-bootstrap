$(function(){
    let windowW = $(window).width();
    // allData();
      console.log(windowW);

    if(windowW >= 1339){
    }else if(windowW < 1338 && windowW >= 980){
      // nav();
      test();
    }else if(windowW < 579 ){
      // 모바일
    }
  }    
)
function test(){
  console.log('text');
  $("#wrap #header p").css('background-color', 'red');
}
  // nav
  function nav(){     // top포함
    // console.log('click')
    $("#wrap #header p").click(function () {
      console.log('hi')
    });
  }