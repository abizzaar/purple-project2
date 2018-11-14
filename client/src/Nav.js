import React from 'react';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

const navCss = {
  width: "100%",
  height: "5rem",
  padding: "1.5rem",
  backgroundColor: "black",
  color: "white",
  textAlign: "center"
}


const Nav = (props) => {
  return (
    <div>
      <h2 style={navCss}>compañero</h2>
  </div>
  );
};

export default Nav;
