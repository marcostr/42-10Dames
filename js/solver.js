
const gridSize = 4;
let solutions =[]
solver = ()=>{
    let result=[]
    recursion(result, 0)
    if(solutions.length>0){
        display(0)
    }
}
recursion = (result, index)=>{

 if(index==gridSize){
    solutions.push(result)
}
else{
    for (let i = 0; i < gridSize; i++) {  
        let tempRes=[...result]
        tempRes.push(i)
        let ok = isPosAllowed(index,i,tempRes)
        if (index==0 || ok) 
        recursion(tempRes, index+1)   
    }
}
}

isPosAllowed = (posX, posY, matrix)=>{
let isOk= true
let leftFree = isLeftFree(posX, posY, matrix)
let diagUpFree = isDiagUpFree(posX, posY, matrix)
let diagDownFree = isDiagDownFree(posX, posY, matrix)
if (!leftFree ||!diagUpFree || !diagDownFree) {
    isOk=false;
}
return isOk
}

isDiagUpFree = (posX, posY, matrix)=>{
    if(posY==0)return true;
    for (let i = 0; i < posX; i++) {        
        let temp = posY-posX+i       
        if(matrix[i]==temp) return false
    }
    return true
}
isDiagDownFree = (posX, posY, matrix)=>{
    if(posY==gridSize-1)return true
    for (let i = 0; i < posX; i++) {        
        let temp = posY+posX-i       
        if(matrix[i]==temp) return false
    }
    return true
}

isLeftFree = (posX, posY, matrix)=>{
    for (let i = 0; i < posX; i++) {     
        if(matrix[i]==posY) return false         
    }
    return true
}

initSolutions = ()=>{
let matrix = []
for (let i = 0; i < gridSize; i++) {
    let line =new Array(gridSize)
    line.fill(0)
    matrix.push(line)   
}
return matrix
}