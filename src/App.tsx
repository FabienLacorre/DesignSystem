import { useState } from "react";
import { Accordion } from "./Organisms/Accordion/Accordion";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Accordion title="THIS IS A TITLE" isOpen={isOpen} onClick={() => {
        setIsOpen(!isOpen)
      }}>
        This is a text in this accordion
        <br />
        This is a text in this accordion
        <br />
        This is a text in this accordion
        <br />
        This is a text in this accordion
        <br />


      </Accordion>
    </>
  );
}

export default App;
