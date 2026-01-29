import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {




    
    // useState = hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getClass = (index: any, selectedIndex: any) => {

      let className = 'list-group-item';

      if (index === selectedIndex) {
        return className + ' active';
      }

      return className;



    }


  return (
  
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>no cities</p>}
      <ul className="list-group">
        {items.map((item, index) => <li 
          key={item} 
          className={ getClass(index, selectedIndex) }
          onClick={() => { setSelectedIndex(index);

        }}>
          

          {item}
        </li>)}
      </ul>

    </>


  );
}

export default ListGroup;
