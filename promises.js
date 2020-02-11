const myPromise = new Promise((resolve, reject) => {
    if (false) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        reject('I have failed23, on littlefeature branch');
    }
});

myPromise
    .then(value => value + '!!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectedValue => console.log(rejectedValue));