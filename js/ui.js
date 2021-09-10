

display = (index)=>{
    //console.log("display");
    let res = solutions[index];
    max = solutions.length
    setTotal(max)
    setCurrent(index)
  if(index==0 ){
    disablePreviousBtn() 
    
  }
  if (index>0) {
    enablePreviousBtn()
  }
  if (index<max) {
    enableNextBtn()
  }
  if(index==max-1){
    disableNextBtn()
  }
  $(".cl").text("")
for (let i = 0; i < gridSize; i++) {
   
    
    //console.log("res["+i+"]  = "+res[i]+"   i= "+i);

    $("#cell-"+(res[i]+1)+"-"+(i+1)+"").text("X");
    
}
}