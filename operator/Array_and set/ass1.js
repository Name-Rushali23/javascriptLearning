const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("===First and last element===");
console.log(fruits_seasonal.length);
console.log(fruits_seasonal[0]);
console.log(fruits_seasonal[4]);

console.log("----add papaya before the banana------" );

fruits_seasonal.splice(0,0,"papaya");
console.log(fruits_seasonal);

console.log("==Remove Mnago from array==");

fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log("insert pinaplle at last");
fruits_seasonal.push("Pinapple");
console.log(fruits_seasonal);

console.log("insert Dragon before watermelon");
fruits_seasonal.splice(4,0,"Dragon");
console.log(fruits_seasonal);

console.log("Replace orange with kiwi");
fruits_seasonal.splice(2,1,"kiwi");
console.log(fruits_seasonal);

console.log("log element starting from index 1 to 4");
fruits_seasonal.splice(4);
console.log(fruits_seasonal);

console.log("last 3 element");

