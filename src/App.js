import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home/Home';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/personal" component={Home} exact/>
             <Route path="/personal/photography" component={Home} exact/>
             <Route path="/personal/favorites" component={Home} exact/>
             <Route path="/personal/resume" component={Resume}/>
             {/* <Route path="/contact" component={Contact}/> */}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;