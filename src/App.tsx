import { useEffect } from "react";
import { Hero } from "./Components/Hero";

function App() {
  useEffect(() => {
    // Force dark mode on app mount
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
}

export default App;
