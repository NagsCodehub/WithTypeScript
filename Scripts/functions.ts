module demo_functions
{
    var squaresimple=function(h: number,w: number)
    {
      return h*w;
    }

    var squarearrow=(h: number,w: number) => h*w;

    var helloarrow :(name ?: string) => void

    helloarrow=(name?: string) => {
        console.log('Hello '+ (name || 'unknown Person'));
    }

    helloarrow();

    helloarrow('Nag');

    var squarearrowopt: (rect :{h: number ; w?: number}) => number;

    var rectA={h:7};
    var rectB={h:7,w:12};

    squarearrowopt=function(rect){
        if(rect.w ===undefined)
        {
            return rect.h * rect.h;
        }

        return rect.h * rect.w;
    }

    console.log(squarearrowopt(rectA));

    console.log(squarearrowopt(rectB));
}