function MarrigeEligibility(Gendar,age,Name){
    if(Gendar=="Female"&& age>=18)
    {
        console.log("hey ",Name,"you are elligibal for marrage");
    }
    else{
        console.log(Name,"you are not elligibal");
    }
    
}
MarrigeEligibility("Female",19,"mona");
MarrigeEligibility("Male",17,"Sai");
MarrigeEligibility("Male",20,"sanu");

//male
function MarrigeEligibility(Gendar,age,Name){
    if(Gendar=="Male"&& age>=21)
    {
        console.log("hey ",Name,"you are elligibal for marrage");
    }
    else{
        console.log(Name,"you are not elligibal");
    }
}
MarrigeEligibility("Male",22,"Rahul");
    
//assigment0B
function TCS(grad_score,hsc_score,ssc_score,Name){
    if(grad_score>=70 && hsc_score>=80 && ssc_score>=90)
    {
        console.log(Name,"Congrats you are elligibal for TCS");
    }
    else{
        console.log(Name,"You are not elligibal for TCS");
    }
}
TCS(80,86,90,"Rahul");
TCS(70,65,55,"Neha");
TCS(60,79,88,"Gaytri"); 