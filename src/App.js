import Header from "./components/header-directory/Header";
import Play from "./components/play-directory/Play";
import Songs from "./components/songs-directory/Songs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Play />
      <Songs />
    </div>
  );
}

export default App;
