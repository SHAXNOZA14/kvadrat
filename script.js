let box ="";
let num =+prompt("kvadrat tomoni")
while(isNaN(num) || num==0){
    num = +prompt("Qayta urinib ko'ring")
}
if(num%2==0){
num+= num+1
}
for(let a=0; a<num; a++) {
    for(let b=0; b<num; b++){
        if (a==b || a==0 || a==num-1 || b==0 ||b==num-1 || a+b==(num-1)) {
            box +="(Z)"
            
        } else{
            box += "( )"
        }
        
    }
    console.log(box);
    box=""
}

