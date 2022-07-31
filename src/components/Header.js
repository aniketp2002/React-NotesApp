import React, { useState } from "react";
import PropTypes from 'prop-types';
function Header(props) {
  const [count, setCount] = useState(0);
  function fun() {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  }
  const bun = () => {
    fun();
    fun();
  };
  return (
    <>
      <h1>count of {props.name} = {count}</h1>
      <button onClick={bun}>increase</button>
    </>
  );
}
Header.propTypes = {
  name:PropTypes.string
}

export default Header;
