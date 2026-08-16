const hasDrivingLicense=true; //A
const hasGoodVision=true;//B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);


if(hasDrivingLicense && hasGoodVision)
{
    console.log("Sarah is able to drive.");
}else{
    console.log("Someone else should drive..");
}

const isTired=true; //C
console.log(hasDrivingLicense && hasGoodVision && isTired);

if(hasDrivingLicense && hasGoodVision && isTired){
    console.log("Sarah is able to drive.");

}else{
    console.log("Someone else should drive..");
    
}
