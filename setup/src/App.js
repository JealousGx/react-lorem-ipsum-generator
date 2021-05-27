import React, { useState, useEffect } from 'react';
import { LoremIpsum, loremIpsum } from 'react-lorem-ipsum';
import data from './data';


function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let num = parseInt(count);
    if (count <= 0) {
      num = 1;
    }
    if (count > 8) {
      num = 8;
    }
    setText(data.slice(0, num));
  }
  
  return (
    <main>
      <section className='section-center'>
        <h3>Lorem Ipsum</h3>
        <form className='lorem-form' onSubmit={handleSubmit}> 
        {/* Insert onSubmit={ handleSubmit} in form */}
          <label htmlFor='amount'>paragraphs:</label>
          <input type='number' name='amount' id='amount' value={count} onChange={((e) => setCount(e.target.value))} defaultValue='0' />
          <button type='submit' className='btn'>generate</button>
        </form>
        <article className='result lorem-text'>
          {/* Generate lorem ipsum using the following component */}
          <LoremIpsum p={count} />

          {/* Or generate lorem ipsum using the following function
          {
            loremIpsum({ p: count }).map(text => (
              <div key={text}>{text}</div>
            ))
          } */}

          {/* Or generate random from data.js (Limited)
          {
            text.map((item, index) => { return (
              <p key={index}>{item}</p>
            )})
          } */}
        </article>
      </section>
    </main>
    )
}

export default App;
