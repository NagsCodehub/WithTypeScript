module demo_interfaces
{
    interface squarefunction  {
        (x: number):number;
    }     
   
    var squarebasic:squarefunction = (num) => num * num;

     interface Rectangle
    {
        h:number;
        w?:number;
    }

    var squareit :(rect : Rectangle) => number;

//Person Interface
    interface Person{
        name: string;
        age?: number;
        kids: number;
        calcPets: () =>number;
        makeYounger:(years: number) => void;
        greet:(msg: string) => string;
    }

    var p: Person = {
       // favoriteMovie:'LOTR',
        name:"Nag",
        age:40,
        kids:1,
        calcPets:function () {return this.kids*2;},
        makeYounger: function  (years: number){this.age-=years;},
        greet:function (msg:string) {return msg + ',' + this.name;}
    };

  var pets=p.calcPets();
  console.log(pets);

 p.makeYounger(15);
 var newage=p.age;
 console.log(newage);

 var msg=p.greet('Hello New Year');
 console.log(msg);

}
