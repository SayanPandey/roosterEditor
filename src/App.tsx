import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import { QuillTextEditor } from "./Quill";
import { Editor } from "./RoosterEditor/Editor";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Rooster</Link> <Link to={"/quill"}>Quill</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/quill" element={<QuillTextEditor />} />
      </Routes>
    </div>
  );
}

export default App;
