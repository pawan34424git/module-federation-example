import "./App.css";
import AppOneCarousel from "app1/AppOneCarousel";
import App1Button from "./button";

const App = () => {
  return (
    <div className="content">
      <h1>App 2</h1>
      <App1Button name="App2"></App1Button>
      <AppOneCarousel></AppOneCarousel>
    </div>
  );
};

export default App;
