import React, { Component } from 'react'
import './App.css';

class Home extends Component {
  render() {
    return <div>
<div className="Title"><h1>All About Snakes</h1></div>
<div className="Buttons">
<button>Ball Pythons</button>
<button>Boa Constrictors</button>
<button>Corn Snakes</button>
<button>Milk Snakes</button>
</div>
<div className="text">
  <h2>Welcome to the website about snakes!</h2>
  <p>Pick a snake to learn about </p>
</div>
    </div>
    
  }
}

export default Home
