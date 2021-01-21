import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import MemeCustomizer from "./components/MemeCustomizer";
import MemeList from "./components/MemeList";

function App() {
  const [currentPicture, setcurrentPicture] = useState(null);
  const [memes, setMemes] = useState([]);
  const fileInput = React.createRef();

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      console.log(response.data.data.memes);
      setMemes(response.data.data.memes);
    });
  }, []);
  const onFileUpload = (ev) => {
    ev.preventDefault();
    const objectURL = URL.createObjectURL(fileInput.current.files[0]);
    setcurrentPicture(objectURL);
    console.log(objectURL);
  };
  const onMemeSelected = (meme) => {
    console.log(meme);
    setcurrentPicture(meme.url);
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <form onSubmit={onFileUpload}>
        <input type="file" ref={fileInput} id="input"></input>
        <button type="submit">Submit</button>
      </form>
      {currentPicture ? <MemeCustomizer picture={currentPicture} /> : null}
      <MemeList memes={memes} onSelect={onMemeSelected} />
    </div>
  );
}

export default App;
