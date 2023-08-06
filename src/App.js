import "./app.css";
import "./inputs.css";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav className="app__nav" />
      <main className="app__main">
        <Hero />
      </main>
    </div>
  );
}

export default App;
