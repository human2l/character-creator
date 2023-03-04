import React from "react";

import styles from "./App.module.css";
import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className={styles.backgroundScreen}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
