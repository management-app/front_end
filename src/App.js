import "./App.css";
import NavBar from "./components/navbar";
import Login from "./components/login";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Login />
      </div>
    </>
  );
}

export default App;
