import React from 'react'
import './section.css'

function Section(props) {
  
  return (
    <section>
      <div className="carName">
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
      </div>

      <div className="cta">
        <div className="buttons">
          <a href="">{props.leftBtn}</a><a href=""></a>
          <a href="">{props.rightBtn}</a><a href=""></a>
        </div>
        <img src="tesla images/down-arrow.svg" alt="" />
      </div>

    </section>
  )
}

export default Section