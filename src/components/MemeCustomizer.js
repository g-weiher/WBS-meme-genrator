import domtoimage from "dom-to-image";
import { useRef, useState } from "react";

const MemeCustomizer = ({ picture }) => {
  const [caption1, setCaption1] = useState("Caption1");
  const [caption2, setCaption2] = useState("Caption2");
  const meme = useRef();
  const [generatedMeme, setGeneratedMeme] = useState(null);

  const onSubmit = () => {
    domtoimage
      .toPng(meme.current)
      .then(function (dataUrl) {
        setGeneratedMeme(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <>
      <div ref={meme} className="current-meme">
        <img src={picture} />
        <textarea
          value={caption1}
          onChange={(ev) => setCaption1(ev.target.value)}
          className="text text1"
        ></textarea>
        <textarea
          value={caption2}
          onChange={(ev) => setCaption2(ev.target.value)}
          className="text text2"
        ></textarea>
      </div>
      <button onClick={onSubmit}>Submit</button>
      {generatedMeme ? <img src={generatedMeme}></img> : null}
    </>
  );
};
export default MemeCustomizer;
