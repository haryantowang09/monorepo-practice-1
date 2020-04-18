import React from 'react';

const Button = ({ type = 'buton', children, onClick }) => (
  // this still has bug here because CRA webpack does not allow things here.
  // the fixes "cheat" can be found here at
  // https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875
  // read the "Rewire your app" part, the last step that i did not complete.
  // bcs i dont like the hacky way to do things, unless necessary.
  // bcs of this, i'll jump to other article.
  <div> 
    <button type={type} className="button" onClick={onClick}>
      { children }
    </button>
  </div>
);

export default Button;