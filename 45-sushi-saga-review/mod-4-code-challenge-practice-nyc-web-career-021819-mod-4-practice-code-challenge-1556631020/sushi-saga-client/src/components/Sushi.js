import React from "react";

const Sushi = props => {
  const onSushiClick = () => {
    props.handleSushiClick(props.sushi.id);
  };
  return (
    <div className="sushi">
      <div className="plate" onClick={onSushiClick}>
        {props.sushi.eaten ? null : (
          <img alt="hi" src={props.sushi.img_url} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
