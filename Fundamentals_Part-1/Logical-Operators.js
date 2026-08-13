const hasDrivingLicense=true; //A
const hasGoodVision=false;//B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive=hasDrivingLicense && hasGoodVision;
if(shouldDrive)
{
    console.log("Sarah has a driving License and Good Vision");

}

