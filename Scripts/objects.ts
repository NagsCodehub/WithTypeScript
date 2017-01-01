// var square = {g: 10,h: 15};

// var points:Object={z: 10,a: 20};

// var multiply=function(x:number){
//     return x*x;
// };

// var multiplyAgain:Function;

// multiplyAgain=function (x:number){
//     return x*x;
// };

module demo_objects
{
    var points1={g: 10,h:  20};

    var x=points1.g;

    var points2:{};

    points2={g: 10,h: 20};

    var points3:Object ={x:1};

    var rectangle={
        g:10,
        h:20,
        calcArea:function(){
            return  this.g * this.h;
        }
    };
    console.log('Rectangle Object Area ='+ rectangle.calcArea());


    //Functions

    var squarert1=function(x:number){
        return x*x;
    };

    var val1=squarert1(2);

    console.log('squarert1='+val1);

    val1=squarert1(8);

    console.log('squarert1='+val1);

    var squarert=function(
        rect:{h:number;w?:number;}){
            if(rect.w===undefined){
               return rect.h * rect.h;
            }
            return rect.h*rect.w;
        }
        var sq1: number=squarert({h:10});
        console.log('rectangle h and w of 10 ='+ sq1)

         var sq2: number=squarert({h:10,w:40});
        console.log('rectangle h and w of 10 and 40 ='+sq2)

}