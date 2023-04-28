import React from "react";

const Dish = (props) => {
    const { image, name, description, price=0} = props;

    return (
        <article>
            <a><img src={image} alt="" className=" rounded-3xl"/></a>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <h2>${price}</h2>
                {/* <button type="button" className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >{action}</button> */}
            </div>
        </article>
    )
}

export default Dish;