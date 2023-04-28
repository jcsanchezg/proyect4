import React from "react";

import Dish from "../components/Dish.jsx";
import breky from "../images/breky.jpg";
import lunch from "../images/lunch.png";
import ricedinner from "../images/ricedinner.png";

const contentStyle = {
    margin: 0,
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    };
const Product = () => {

//data for products
  const list = [
    {id:1,
    name:"breakfast",
    description:'morning breky',
    image:breky,
    price:5000
  },
    {id:2,
    name:"lunch",
    description:'time to lunch',
    image:lunch,
    price:25000
  },
    {id:3,
    name:"dinner",
    description:'soft to end a day',
    image:ricedinner,
    price:15000
  }
  ]

  return (
    // <React.Fragment>
    <section>
      {list.map(({id,name, description, price, image}) => (
      <Dish
      key={id}
      content={<h4>{name}</h4>}
      image={image}
      description={description}
      price={price}
      action={<button>checkout</button>}
      />
    ))}
    </section>
    // </React.Fragment>
  );
};
export default Product;