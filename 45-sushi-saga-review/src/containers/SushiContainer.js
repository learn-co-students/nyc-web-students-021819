import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  const renderSushi = () => {
    return props.sushis.map(sushi => (
      <Sushi
        handleSushiClick={props.handleSushiClick}
        key={sushi.id}
        sushi={sushi}
      />
    ));
  };

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton handleMoreButtonClick={props.handleMoreButtonClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
