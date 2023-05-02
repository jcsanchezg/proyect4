import React from "react";

const Dish = (props) => {
    const { image, name, description, price=0, action=null} = props;

    return (
        <article>
            <img href="https://www.google.com" src={image} alt="" className=" rounded-3xl"/>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <h2>${price}</h2>
                <div>{action}</div>
            </div>
        </article>
    )
}

export default Dish;