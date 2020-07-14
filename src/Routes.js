import React from 'react';
import { BrowserRouter as Router, 
    Switch, 
    Route
} from "react-router-dom";
import Home from './Components/Home.js';
import About from './Components/About.js';
import Navbar from './Components/Navbar.js';
import Product from './Components/Product.js';
import ProductItem from './Components/ProductItem.js';

function RouteConfig() {
    return(
        <div>
            
           <Router>
           <Navbar />
               <Switch>
                   <Route exact path="/"  component={Product} />
                   <Route path="/about"  component={About} />
                   <Route exact path="/Product"  component={Product} />
                   <Route path="/Product/:id"  component={ProductItem} />
                   <Route path="*"  component={() => <h2>ERROR 404 Not found</h2>} />
               </Switch>
           </Router>
        </div>
    );
}

export default RouteConfig;