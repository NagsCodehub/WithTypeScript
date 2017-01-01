module demo_primitive
{
    var data:any;
     var info;
     var dosomething=function(arg){
         return arg;
     }

     //primitives

     var age: number=21;
     var score: number =34.56;
     var rating=99.99;

     var hasData: boolean =true;
     var isReady=true;
     var isBald = function(){return 'yes';}
     var hasHair=!!isBald();

     // string array
      var firstName:string='Nag';
      var lastName = 'kar';
     function getArrayLength(x:string[])
     {
         var len:number=x.length;
         return len;
     }

     var names:string[]=['Nag','Dat','Sri','Ven'];

     var firstPerson =names[0];

     console.log(getArrayLength(names));

     //null examples

     var casiosales: any=null;
     var keyboard=null;
     var ordedate:Date=null;

     //undefined

     var quantity :number;
     var company : undefined;

     console.log("undefined examples");

     console.log(quantity);
     console.log(company);

}