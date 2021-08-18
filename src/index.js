import React from 'react';
import ReactDom from 'react-dom';

const element = <h1>Hello world, my name is Chingis</h1>
// const element2 = <h2>testing hot reload</h2>

// console.log(element);

ReactDom.render(element, document.getElementById('root'));
// ReactDom.render(element2, document.getElementById('root'));
