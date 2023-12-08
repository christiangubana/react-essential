import { CORE_CONCEPTS } from "./data/data";
import Header from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [valueTab, setValueTab] = useState("Please select a tab");

  const handleClick = (selectedItem) => {
    setValueTab(selectedItem);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelectTab={() => handleClick("Compoent")}>
              Component
            </TabButton>
            <TabButton onSelectTab={() => handleClick("Jsx")}>Jsx</TabButton>
            <TabButton onSelectTab={() => handleClick("Props")}>
              Props
            </TabButton>
            <TabButton onSelectTab={() => handleClick("State")}>
              State
            </TabButton>
          </menu>
          {valueTab}
        </section>
      </main>
    </div>
  );
}

export default App;
