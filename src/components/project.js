import React from 'react'
import './project.scss'

export default props => (
  <div className="project-pill" style={{ backgroundImage: `url(${props.image})`, backgroundColor: `${props.backgroundColor}`  }}>
    <div className="overlay">
      <p>{props.name}</p>
      <div className="tags">
        {props.tags.map(function(name, index){
          return <span className="tag" key={ index }>{name}</span>;
        })}
      </div>
    </div>
  </div>
)