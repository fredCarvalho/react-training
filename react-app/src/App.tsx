import Button from "./components/Button";
import Like from "./components/Like/Like";
import ListGroup from "./components/ListGroup";
import { FaCalendar } from "react-icons/fa";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <Like onClick={() => console.log("clicked")}></Like>
      <Button
        color="primary"
        onClick={() => {
          console.log("Hello");
        }}
      >
        My Button
      </Button>
      <br></br>
      <FaCalendar color="red" size="40"></FaCalendar>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
