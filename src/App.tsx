import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { QuillTextEditor } from "./Quill";
import { Quill_generic } from "./Quill_generic";
import { Editor } from "./RoosterEditor/Editor";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <Link to={"/"}>Rooster</Link> <Link to={"/quill"}>Quill</Link>{" "}
        <Link to={"/quill_generic"}>Generic Quill</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Editor />} />
        {/* <Route path="/quill" element={<QuillTextEditor />} />
        <Route path="/quill_generic" element={<Quill_generic />} /> */}
      </Routes>
    </div>
  );
}

export default App;
