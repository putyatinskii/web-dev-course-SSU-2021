function accumulate(str) {
    let result =  str.split('').reduce((res,current,index)=>{
        res += "-"+current.toUpperCase()+current.toLowerCase().repeat(index)
        return res
    })
    result = result[0].toUpperCase() + result.slice(1);
    return result;
};

console.log(accumulate('abcd'));
console.log(accumulate('RqaEzty'));
console.log(accumulate('cwAt'));