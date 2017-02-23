import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          {/* 三种实现方式效果相同 */}
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
