import React ,{useState , useRef} from "react";
import logo from './assets/bg2.jpg';
import Card from "./Card";
import Board from "./Board";


const Coordinate = (props) => {
    const containerRef = useRef();
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
      <Board id='board-1' className='board'>
        <Card id='card-1' className="card" graggable="true">
          <p>m</p>
        </Card>
       </Board>
      
    </>
  );
};

export default Coordinate;
