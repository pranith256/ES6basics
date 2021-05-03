const names=["bunny","sunny","minny"]
const  fullnames=names.map((name)=>{
    return name+"clarke"
})

console.log(fullnames)

const print=()=>{
    console.log("hi i am pranith")
}
print()
const myname="pranith"
const myage=20
const printmyname=(myname,myage)=>(
    console.log("myname is "+myname+"\n"+"my age is "+myage)
)
printmyname(myname,myage)

const marks=[10,20,40,70,60,90]

const goodmarks= marks.filter((mark)=>mark>=50)
console.log(goodmarks)


const race="Running race"
const names1=["romy","joey","alan"]

const winners=names1.map((name1,index)=>({winnername:name1,race:race,place:index+1}))
console.table(winners)