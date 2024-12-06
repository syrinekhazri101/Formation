import React from 'react'

export default function Banner(props) {
    const {title,url}=props
  return (
   
    <div className="site-section">
        <div
        className="hero overlay"
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 mx-auto text-center">
              <h1 className="text-white" >{title}</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
