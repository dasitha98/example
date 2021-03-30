function getvalue() {
    let value = 0;
    return new Promise(function (res,rej) {
        setTimeout(function () {
            value = 8;
            console.log(value);
            res(value);
        },2000);
    });

}

function add(value) {
    return new Promise(function (res,rej) {
        setTimeout(function (){
            let val = value+2;
            console.log(val);
            res(val);
        },2000);
    })

}


function mul(value) {
    return new Promise(function (res,rej) {
        setTimeout(function () {
            res(value*2);
        },2000);
    })

}




async function print(){
    let val1 = await getvalue();
    let val2 = await add(val1);
    let val3 = await mul(val2);
    console.log(val3);
}

print();

/*
getvalue().then(function (val1) {
    return add(val1)
}).then(function (val2) {
    return mul(val2)
}).then(function (val3){
    console.log(val3);
});
*/