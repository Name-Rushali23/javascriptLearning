var squer=function (arg1){
    console.log(arg1*arg1);
}
squer(5);
squer(25);
squer(100);
//type
console.log(typeof squer);
//arrea of traingal
var Area=function(base,hight){
    console.log(1/2*base*hight);


}
Area(10,20);
//chek number positive ,negative,zero
var check=function(Num){
    if(Num>0)
    console.log("positive");
    if(Num<0)
    console.log("Negative");
    if(Num==0)
    console.log("Zero");

}
check(10);
check(0);
check(-32);
//largest value
var  value = function(v1,v2,v3) {
    max=0;
    if(v1>v2)
    {
        max=v1;
    }
    else
    {
        max=v2;
    }
    if(v3>v1)
    {
        max=v3;
    }
    return max;
    
    
}
var op =value(10,5,20);
console.log(op);
//A variable is undefined or null
function find(){
    console.log("");
    

}
find();
find(1);
