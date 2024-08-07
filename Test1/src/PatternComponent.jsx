import React from 'react';

const Pattern=()=> {
 
  const outerbox ={
    width:'400px',
    height: '200px',
    backgroundColor: 'yellow',
    borderRadius: '70%', 
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto'
  }
  const outer2box = {
    width: '260px',
    height: '120px',
    backgroundColor: 'blue',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid blue', 
    margin: '20px auto' 
  }

 
  const innerbox = {
    width: '200px',
    height: '90px',
    backgroundColor: 'red',
    borderRadius: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

 
  const textbox = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
  }

  return (
    <>
        <div style={outerbox}>
    <div style={outer2box}>
      <div style={innerbox}>
      <div style={textbox}>CYBROM</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Pattern;
