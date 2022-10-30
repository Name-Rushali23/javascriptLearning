let fruits_seasonal=["Banana","orange","Apple","Mango","Watermelon"];
console.log(fruits_seasonal.length);
console.log(fruits_seasonal[0]);
console.log(fruits_seasonal[4]);

//2
console.log("add element"); 

 fruits_seasonal.splice(0,0,"papaya");
console.log(fruits_seasonal);

//3
console.log("Remove mango");

New_array=fruits_seasonal.splice(3,1);
console.log(New_array);
//4
console.log("add pinapple");

fruits_seasonal.push("pineapple");
console.log(fruits_seasonal);
//5
console.log("insert dragon");
fruits_seasonal.splice(3,0,"Dragon");
console.log(fruits_seasonal);
//6
console.log("replace orange with kevi");
repace=fruits_seasonal[1]="kewi";
console.log(repace);
//7
console.log("index 1to 4");
index1=fruits_seasonal.indexOf(1);
console.log(index1);
index2=fruits_seasonal.indexOf(2);
console.log(index2);
index3=fruits_seasonal.indexOf(3);
console.log(index3);
index4=fruits_seasonal.indexOf(4);
console.log(index4);


