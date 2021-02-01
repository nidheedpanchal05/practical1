import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tablehad from './Table';
import Content from './Content';
import Home from './Home';

class Navbar extends Component {
    render () {
    return (
    <html>
        <body>
        <Router>
        <div>
            <nav className="nav">
                <ul>
                    <li className="nav-items"><Link to={'./Home'} className="nav-link">Home</Link></li>
                    <li className="nav-items"><Link to={'./Content'} className="nav-link">Content</Link></li>
                    <li className="nav-items"><Link to={'./Table'} className="nav-link">Table</Link></li>
                </ul>
            </nav>
            <Switch>
              <Route path='/Home' component={Home}/>
              <Route path='/Content' component={Content} />
              <Route path='/Table' component={Tablehad} />
            </Switch>
        </div>
        </Router>
        </body>
      </html>
      /*
    <html>
        <div class="nav">
            <a class="nav-main" href="#">Home</a>
            <div class="navbar">
            <ul class="nav-style">
            <Link to={'./Content'} className="nav-link">Content</Link>
                    <li class="nav-items"><a href="#">Contact</a></li>
                    <li class="nav-items"><a href="#">Services</a></li>
                    <li class="nav-items"><a href="#">Join Us</a></li>
                </ul>
            </div>
        </div>
    </html>
    */
    );

}
}
export default Navbar;
