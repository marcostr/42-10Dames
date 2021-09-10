const log = console.log

const $grid = $("#grid")

let current = 0;
let max = 0;

initGrid = ()=>{
    drawGrid();
    initButtons();
}

drawGrid = ()=>{


    //create rows
    for (let i = 0; i < gridSize+1; i++) {
        let $row = $("<div class='row' id='row-" + i + "'></div>");
        $("#grid").append($row);
  }

  //create first line of index
  for (let i = 0; i < gridSize+1; i++) {
      let index;
      if(i===0){
        $index = $("<div class='cell corner' id ='index-0-"+i+"'></div>")
      }
      else{
        $index = $("<div class='index cell' id ='index-0-"+i+"'>"+(i-1)+"</div>")
      }
      
      $("#row-0").append($index)
  }
  //other rows
  for (let i = 1; i < gridSize+1; i++) {
      for (let u = 0; u < gridSize+1; u++) {
        let cell;
        if(u===0){
            $cell = $("<div class='index cell' id ='index-"+i+"-"+u+"'>"+(i-1)+"</div>")
          }
          else{
            $cell = $("<div class='cell cl' id ='cell-"+i+"-"+(u)+"'></div>")
            
          }
          $("#row-"+i+"").append($cell)
      }
      
  }
}

initButtons = ()=>{
    
    disablePreviousBtn()
    disableNextBtn()
    $("#btnPrevious").on('click',()=>{
        if(current>0){
            current--
            display(current)
        }
    })
    $("#btnNext").on('click',()=>{
        if(current+1<max){
            current++
            display(current)
        }
    })
}
setTotal =(num)=>{
$("#total").text(num)
}
setCurrent =(num)=>{
    current = num
    $("#counter").text(num+1)
    }
disablePreviousBtn = ()=>{
    $("#btnPrevious").prop('disabled', true);
    $("#btnPrevious").addClass("off")
}
enablePreviousBtn = ()=>{
    $("#btnPrevious").prop('disabled', false);
    $("#btnPrevious").removeClass("off")
}
disableNextBtn = ()=>{
    $("#btnNext").prop('disabled', true);
    $("#btnNext").addClass("off")
}
enableNextBtn = ()=>{
    $("#btnNext").prop('disabled', false);
    $("#btnNext").removeClass("off")
}