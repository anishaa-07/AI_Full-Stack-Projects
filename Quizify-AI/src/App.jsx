import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero />

      <Generator />

      <QuestionCard />

      <Result />

      <Footer />
    </div>
  );
}

export default App;