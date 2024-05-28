import "./App.css";

import AppButton from "./button";
import AppOneCarousel from "./appcarousel";

const App = () => {
  return (
    <div className="content">
      <h1>App 1</h1>
      <AppButton name="APP1" />

      <AppOneCarousel></AppOneCarousel>
    </div>
  );
};

export default App;
