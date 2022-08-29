import Home from "./pages/home/Home";
import Header from "./pages/header/Header";
import './App.css';


function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Home />
    </div>
  );
}

export default App;
