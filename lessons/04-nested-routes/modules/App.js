import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>

        {this.props.children}

      </div>
    )
  }
})

/* 使用this.props.children则可以通过Link将Route的子Route显示在自己的下方 */
