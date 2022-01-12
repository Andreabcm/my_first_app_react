import React, { Component, Fragment } from "react";
import '../styles/dish.css';

export class Flag extends Component{
    render(){
        return(
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }
}

export class Ingredient extends Component{
    render(){
        return(
            <Fragment>
                <h4>Ingredientes</h4>
                <h4>Ingredientes</h4>
            </Fragment>
        );
    }
}

class Dish extends Component{
    render(){
        return(
            <div className="dish">
                <h1>Platos</h1>
                <Ingredient/>
            </div>
        )
    }
}

export default Dish;