function receivesAFunction(cb)
{
    return cb();
}

function returnsANamedFunction()
{
    const funct = function(){
        console.log("I'm inside.");
    } 
    return funct;
}

function returnsAnAnonymousFunction()
{
    return (function(){
        console.log("Inside anon function expression.");
    })
}