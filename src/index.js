import React from 'react';
import ReactDom from 'react-dom';

//JSX Rules
//return single element
//div / section / article or Fragment
//use camelCase for html attributes
//className instead of class
//close every element
//formatting


// function Greeting(){
//   return (
//   <div>
//     <h3>
//       This is abishek and this is my first component.
//     </h3>
//   </div>);
// }
// const Greeting =() =>{
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{}, 'hello world'));
// };

//Nested Components, React Tools

function Greeting(){
  return (
  <div>
    <Person/>
    <Message/>
  </div>);
}
const Person = () =><h2>abishek gautam</h2>;
const Message = () => {
  return <p>Thank You!</p>
};


ReactDom.render(<Greeting/>, document.getElementById('root'));
 