import React from "react";

import CandidatureComponent from "./CandidatureComponent"; // Importez le composant CandidatureComponent

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CandidatureComponent />{" "}
        {/* Incluez le composant CandidatureComponent ici */}
      </header>
    </div>
  );
}

export default App;
