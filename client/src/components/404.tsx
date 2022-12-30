import React from 'react'
import errorImg from '../404.png';

const Error = () => {
  const { width } = document.body.getBoundingClientRect();
  return (
    <div className='Error'>
      <div className="container">
        <div className="Error-wrapper">
          <div className="Error-image">
            <img src={errorImg} alt="Error 404" />
          </div>
          <h2 className="Error-text">
            page not found!
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Error