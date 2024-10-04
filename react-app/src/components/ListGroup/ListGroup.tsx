import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// Can also be: function ListGroup({props, heading}: Props) {
function ListGroup(props: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  // EventHandler
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No item found</p>}
      <List className="list-group" style={{ backgroundColor: "yellow" }}>
        {props.items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
