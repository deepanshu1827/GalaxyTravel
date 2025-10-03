import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({handleClick}) => {
  return (
    <div className='overlay'>
        <div className='modal'>
          <div className='cross'>
          <FaTimes style={{color: "white"}} size={25} onClick={handleClick}/>
          </div>
          <h2>Lorem ipsum, dolor sit amet consectetur adipiscing elit. Eos suscipit impedit veniam dolores rerum tempribus cupiditate enim 
            recusandae perspiciatis numquam</h2>
        </div>
    </div>
  )
}

export default Modal