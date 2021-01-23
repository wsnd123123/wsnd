function test() {
    console.log(1)
    setTimeout(function () { // timer1
        console.log(2)
    }, 1000)
}
test();//函数的执行是同步


setTimeout(function () { // timer2
    console.log(3)
})

    
new Promise(function (resolve) {
    console.log(4)
    setTimeout(function () { // timer3
        console.log(5)
    }, 100)
    resolve()
}).then(function () {
    setTimeout(function () { // timer4
        console.log(6)
    }, 0)
    console.log(7)
})


console.log(8)