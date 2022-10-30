//1
function largernumber(num1,num2){
     var ans =num1>num2?num1:num2;
     console.log(ans);
    
}
largernumber(10,-10);
largernumber(800,899);

//2
function evenodd(num) {
   if(num%2==0)
   {
    console.log("Evan");
   }
   else{
    console.log("odd");
   }
}
evenodd(5);
evenodd(6);

//3
function strL(string){

if(string.length%2==0)
{
    console.log("Even");
}
else
{
    console.log("odd");
}
}
strL("javascript");
strL("Devloper");
strL("googall");
