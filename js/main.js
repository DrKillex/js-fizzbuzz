'use strict';

const container = document.getElementById('container')

for(let i = 1; i <= 100; i++){

    const divEz = document.createElement('div');

    if(i % 3 === 0 && i % 5 === 0) {

        console.log('FizzBuzz');

        divEz.append('FizzBuzz');

        container.append(divEz);

        divEz.classList.add('fizzbuzz');

    } else if(i % 5 === 0){

        console.log('Buzz');

        divEz.append('Buzz');

        container.append(divEz);

        divEz.classList.add('buzz');

    } else if(i % 3 === 0){

        console.log('Fizz');

        divEz.append('Fizz');

        container.append(divEz);

        divEz.classList.add('fizz');

    } else {

        console.log(i);

        divEz.append(i);

        container.append(divEz);

        divEz.classList.add('numero');
    }
};
