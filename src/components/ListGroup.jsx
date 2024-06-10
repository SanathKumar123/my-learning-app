import React, { useState } from "react";
import {MouseEvent} from "react";

const handleClick = (event) => {console.log (event)};

interface ListGroupProps {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

const ListGroup : React.FC<ListGroupProps> = ({items, heading, onSelectItem}) => {
  // let items = ["New york", "San Fransico", "Delhi", "Tokyo"];
  // items = [];
  // const getMessage = () => {
  //     return  items.length === 0 ? <p>no items found</p> : null;
  // }
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const combinedHamdler = (index, event, item) => {
    // setSelectedIndex(index);
    // handleClick(event);
    onSelectItem(item); 
  }
  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {/* {items.length === 0 && <p>no items found</p> } */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={(event) => combinedHamdler(index,event, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
