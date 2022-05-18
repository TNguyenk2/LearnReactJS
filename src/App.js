import { render } from '@testing-library/react';
import React from "react";
// import MediumScore from "./Components/Forms/MediumScore";
// import Form from "./Components/Forms/MediumScore";
import Score from './Components/Forms/Score';
import Menu from './Components/Forms/Menu';
function App(){
  return(
    <div>

    {/* <MediumScore></MediumScore> */}
    <Score></Score>
    <Menu></Menu>
    </div>
  );
}
export default App;