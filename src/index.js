import React from "react";
import { render } from "react-dom";

function Hi() {
  return <div>Hi</div>;
}

// export default Hi
render(<Hi />, document.getElementById("app"));
