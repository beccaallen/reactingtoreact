import React from "react";


const Greeter = props => {
    return (
        <div className="list-group justify-content-center">
            <h1 className="list-group-item">{props.greeting}, {props.name}!</h1>
        </div>
    )
}

export default Greeter