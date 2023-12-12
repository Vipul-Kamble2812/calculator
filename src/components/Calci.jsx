import React from 'react'

function Calci() {
  return (
    <>
    
    <div></div>

    <div>
      <input type="text" name='input' id='input' />
    </div>

    <div className='row'>
        <button className='btn btn-outline-dark col m-1 fs-3'>cls</button>
        <button className='btn btn-outline-dark col m-1 fs-3'>backspace</button>
      
    
    </div>

    <div className='row'>
        <button className='btn btn-dark col m-1 fs-3'>9</button>
        <button className='btn btn-dark col m-1 fs-3'>8</button>
        <button className='btn btn-dark col m-1 fs-3'>7</button>
        <button className='btn btn-dark col m-1 fs-3'>+</button>
    
    </div>
    <div className='row'>
        <button className='btn btn-dark col m-1 fs-3'>6</button>
        <button className='btn btn-dark col m-1 fs-3'>5</button>
        <button className='btn btn-dark col m-1 fs-3'>4</button>
        <button className='btn btn-dark col m-1 fs-3'>-</button>
    
    </div>
    <div className='row'>
        <button className='btn btn-dark col m-1 fs-3'>3</button>
        <button className='btn btn-dark col m-1 fs-3'>2</button>
        <button className='btn btn-dark col m-1 fs-3'>1</button>
        <button className='btn btn-dark col m-1 fs-3'>x</button>
    
    </div>
    <div className='row'>
        <button className='btn btn-dark col m-1 fs-3'>0</button>
        <button className='btn btn-dark col m-1 fs-3'>.</button>
        <button className='btn btn-dark col m-1 fs-3'>=</button>
        <button className='btn btn-dark col m-1 fs-3'>/</button>
    
    </div>
    </>

  )
}

export default Calci
