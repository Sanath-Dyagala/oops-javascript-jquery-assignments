function sum(a = 0, b = 0, ...c) {
    var result = a + b
    for (let i = 0; i < c.length; i++) {
        result += c[i]
    }
    return result;

}
console.log(`sum:${sum()}`);
