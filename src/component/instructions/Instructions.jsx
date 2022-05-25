import React from 'react'
import "./instructions.css"

const instructions = () => {
  return (
      
    <div className="instructions">
    <ol className='ulist'>
      <li><a href="/">Insert a TODO task.</a></li>
      <li><a href="/">Toggle between tasks "Completed, Uncompleted and All".</a></li>
      <li><a href="/">CLick the checkbox to complete a task or deleteIcon to delete a task.</a></li>
    </ol>
  </div>
  )
}

export default instructions