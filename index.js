const driver = 'bob';

console.log('this code was called');
console.log(spy.calledWithExactly('this code was called'));

console.log(driver);
console.log(spy.calledWithExactly('bob'));


