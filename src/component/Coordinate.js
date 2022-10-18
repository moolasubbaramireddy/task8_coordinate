import React ,{useState , useRef} from "react";
import logo from './assets/bg2.jpg';
import Card from "./Card";
import Board from "./Board";
import './Css.css';


const Coordinate = () => {
    const containerRef = useRef();
    const cardRef = useRef();
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    //clientX, pageX, screenX, offsetX
    setCoord({
      x: e.pageX - containerRef.current.getBoundingClientRect().left,
      y: e.pageY - containerRef.current.getBoundingClientRect().top,
    });
   console.log("X="+ coord.x,"Y="+ coord.y)
  };
     
  return (
    <>
    <Board id='board-1' className='board'>
      <div
        ref={containerRef}
        onMouseDown={handleMouseMove}
        style={{ cursor: 'pointer', height: '415px', width: '624px' }}
        className="flexbox"
      >
        <img
          src={logo}
          alt='stadium'
          height='415px'
          width='624px'
        />
       
      </div>
      </Board>
      
        <Card ref={cardRef} left={coord.x} top={coord.y}  id='card-1' className="card" graggable="true">
          <p>m</p>
        </Card>

        <Card ref={cardRef} left={coord.x} top={coord.y} id='card-2' className="card" graggable="true">
          <p>m</p>
        </Card>
       

      
      
    </>
  );
};

export default Coordinate;
