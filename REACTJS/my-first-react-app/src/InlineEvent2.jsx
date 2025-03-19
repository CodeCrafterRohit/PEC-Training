import React from "react";

const InlineEvent2 = () => {
  //! External Event
  let handleClick = () => { //! handleClick -> Event Handler
    alert("Button Clicked");
  };
  return (
    <div>
        {/* onClick = {FunctionName or eventHandlerName} */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default InlineEvent2;
