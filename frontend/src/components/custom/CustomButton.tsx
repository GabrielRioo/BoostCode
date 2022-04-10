import React from 'react'



function Button(props: any) {
  console.log('button', props)
  return (
    <button 
      className={`simple-button`} 
      id={props.id}
      style={{
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.color}`,
        padding: `${props.padding}`
      }}>
        {props.children}
      </button>
  )
}

export default Button