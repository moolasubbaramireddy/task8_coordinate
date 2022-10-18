import React from "react";

const Card = (props) => {
  const dragStart = (e) => {
    const traget = e.traget;
    e.dataTransfer.setData("card_id", traget?.id);
    // if (typeof dragStart === 'undefined' || !dragStart) {
    //        return;
    //     }
console.log(props)
    // setTimeout (()=>{
    //   traget.style.display = "none"
    // },0)
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Card;
