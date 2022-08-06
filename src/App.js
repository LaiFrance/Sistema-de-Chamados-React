import React from "react";

const Bemvindo = (props) => 
{
  return(
    <div>
      <h1>bem vindo ao sistema {props.nome}</h1>
    </div>
  );
}

function App(){
  return(
    <div>
      Olá mundo!
      <Bemvindo nome = "Laise"/>




    </div>

  )
}

export default App;