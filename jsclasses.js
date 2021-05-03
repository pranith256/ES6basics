class Cricket{
    constructor(team,captain) {
    this.team=team;
    this.captain=captain;
  }
  getCaptain()
  {
      return this.captain;
  }
  setCaptain(newcap)
  {
      this.captain=newcap
  }
  getDetails()
  {
      const msg="The captain of "+this.team+" is "+this.captain;
      return msg;
  }
  
}

let myteam= new Cricket("India","Kohli");
let myteam1=new Cricket("England","Morgan");


console.log(myteam.getCaptain()); 
console.log(myteam.getDetails());
myteam.setCaptain("MS Dhoni")
console.log("After changing the captain :")
console.log(myteam.getDetails())


console.log(myteam1.getDetails());
myteam1.setCaptain("Pieterson")
console.log("After changing the captain :")
console.log(myteam1.getDetails())

