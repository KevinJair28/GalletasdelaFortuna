import { useState } from "react";
import phrases from "../../phrases.json";
import Author from "./Author";
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'

const Phrase = () => {
  console.log(phrases);
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const [ index, setIndex] = useState(randomIndex);

  const changePhrase = () => {
    const anotherRandom = Math.floor(Math.random() * phrases.length);
    setIndex(anotherRandom);
  }
  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671'];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const pictures = [img1, img2, img3, img4];
  
  return (
    <>
    <img className="image" src={pictures[randomColorIndex]} />
    <div className="phrase" style={{color: colors[randomColorIndex]}}>
      <div className="next-phrase">
        <i className="fa-solid fa-quote-left"></i>
        <p>{phrases[index].phrase}</p>
      </div>
      <div className="next-author">
        <Author  index={index}/>
        <button onClick={changePhrase} style={{background: colors[randomColorIndex]}}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    </>
  );
};

export default Phrase;
