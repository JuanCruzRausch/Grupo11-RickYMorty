import React, { Component } from "react"
import { Link } from "react-router-dom"

class Landing extends Component{

    render(){
        return(
            <div>
                <Link to="/home">
                    <button>Home</button>
                </Link>
            </div>
        )
    }
}

export default Landing