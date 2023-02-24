'use strict';

const container = document.getElementById('container')

for(let i = 1; i <= 100; i++){
    const divEz = document.createElement('div');
    container.append(divEz);

    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
        divEz.append('FizzBuzz');
        divEz.classList.add('fizzbuzz');
    } else if(i % 5 === 0){
        console.log('Buzz');
        divEz.append('Buzz');
        divEz.classList.add('buzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
        divEz.append('Fizz');
        divEz.classList.add('fizz');
    } else {
        console.log(i);
        divEz.append(i);
        divEz.classList.add('numero');
    }
};
