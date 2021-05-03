function defaultExample(example,message,decision="yes")
{
    console.log("This is "+example)
    console.log(message)
    if(decision=="yes")
    {
        console.log("This is a default example")
    }
    else{
        console.log("This isn't a default example")
    }
}


defaultExample("example1","I am pranith")
defaultExample("example2","i study btech","No")
defaultExample("example3","Ilike toplay cricket",undefined)