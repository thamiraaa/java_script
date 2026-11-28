console.log("start");

setTimeout(() => {
    console.log("timeout");
}, 2000);

Promise.resolve().then(() => {
    console.log("first promises");
});

console.log("end");

Promise.resolve().then(() => {
    console.log("From promise");
});

console.log("end");