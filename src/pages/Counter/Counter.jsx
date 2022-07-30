import React from "react";
import { Count, Button } from "../../components";
import "./Styles.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleAddClick = () => {
    setCount(count + 1);
  };

  const handleSubtractClick = () => {
    // subtract 1 from count only works if count is greater than 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  React.useEffect(() => {
    // useEffect that will be called when the count changes to reset it to zero if it reaches 10
    if (count === 10) {
      setCount(0);
    }
  }, [count]);

  return (
    // root div
    <div className="myDiv">
      {/* div to display counter */}
      <Count count={count} />
      {/* div to display buttons */}
      <div>
        {/* button to add 1 to count */}
        <Button
          colorFromProps="limegreen"
          handleClick={handleAddClick}
          buttonText="+"
        />
        {/* button to subtract 1 from count */}
        <Button
          colorFromProps="palevioletred"
          handleClick={handleSubtractClick}
          buttonText="-"
        />
      </div>
    </div>
  );
};

export default Counter;
