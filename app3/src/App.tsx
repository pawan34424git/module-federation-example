import "./App.css";

import AppOneCarousel from "app1/AppOneCarousel";
import App1Button from "app1/button";
import App2Button from "app2/button";

const App = () => {
  return (
    <div className="content">
      <h1>App 3</h1>
      <App1Button name="App 3"></App1Button>
      <App2Button name="App 3"></App2Button>
      <AppOneCarousel></AppOneCarousel>
    </div>
  );
};

export default App;
