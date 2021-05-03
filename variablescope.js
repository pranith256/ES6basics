var name="pranith"
function getName(){
    var name ="reddy"
    console.log("the name inside function is "+name)

}
getName()
if(3>2){
    var name="sankepally"
    console.log("The name inside block is "+name)
    
}

console.log("The name outside function is "+name)

var course="btech"
function getName1()
{
    let course="MBA"
    console.log("The let variable inside the function is "+course)
}
getName1()
console.log("The let variable outside is "+course)
if(3>2)
{
    let course="MCA"
    console.log("The let variable inside block is "+course)
    
}
console.log("The let variable outside is "+course)


const value=10
console.log(value)
const details={
    id:101,age:28
}

details.age=34
console.log(details.age)


//1.use let variables  only when changes can be done 
//2.use const by default
//3.not use var