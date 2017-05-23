function parseArg(n) {
    if(Array.isArray(n))    return add.apply(this, n);
    if (typeof n === "function") return parseArg(n());
    return isNaN(n) ? 0 : parseInt(n,10);
}

function add(x,y){    
    return arguments.length <=1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(parseArg([].slice.call(arguments,1)));
}