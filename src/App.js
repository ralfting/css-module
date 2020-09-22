import React, { useState } from "react";
import cn from "classnames";

import "./global.module.css";
import buttonStyle from "./Button.module.css";

function App() {
  const [smallButton, setSmallButton] = useState(false);

  // Class decision
  const primaryClasses = cn(buttonStyle.primary, {
    [buttonStyle.small]: smallButton,
  });

  return (
    <>
      <h1>Buttons</h1>

      <button className={buttonStyle.normal}>Normal</button>
      <button
        className={primaryClasses}
        onClick={() => setSmallButton(!smallButton)}
      >
        Primary
      </button>
      <button className={buttonStyle.danger}>Danger</button>
      <button className={buttonStyle.outline}>Outline</button>
      <button className={buttonStyle.outlinePrimary}>Primary Outline</button>
    </>
  );
}

export default App;
