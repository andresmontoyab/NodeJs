var async = require("async");

function doSomething(callback) {
    setTimeout(() => callback(null,1), 100);
}

function doSomethingElse(callback) {
    setTimeout(() => callback(null,2), 100);
}

function doSomeMore(callback) {
    setTimeout(() => callback(null,3), 100);
}

async.parallel([doSomething, doSomethingElse, doSomeMore], (err, values) => {
    if (err) {
        console.log(err);
        return
    }

    console.log(values);
});