import { useState } from "react";
import Button from "./components/Button";
import Like from "./components/Like/Like";
import ListGroup from "./components/ListGroup";
import { FaCalendar } from "react-icons/fa";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isLoading, setLoading] = useState(false);
  const fullName = firstName + " " + lastName;

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  // Updating Object
  const handleDrink = () => {
    const newDrink = {
      ...drink,
      price: drink.price + 1,
    };

    setDrink(newDrink);
  };

  // or const handleDrink = () => {setDrink({...drink, price: 6})};

  // Updating Nested Objects
  // On React ... copy operator is shallow, meaning it will no go deep when copying
  const [customer, setCustomer] = useState({
    firstName: "John",
    lastName: "Doe",
    address: {
      city: "San Francisco",
      zipCode: "94111",
    },
  });

  const handleCustomer = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: "74112" },
    });
  };

  // Updating Arrays
  const [tags, setTags] = useState(["happy", "sad"]);

  const handleTags = () => {
    // Add
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    // Updating Array Objects
    const [bugs, setBugs] = useState([
      { id: 1, title: "Bug 1", fixed: false },
      { id: 2, title: "Bug 2", fixed: false },
    ]);

    const handleBugs = () => {
      setBugs(
        bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
      );
    };
  };

  // Update objects with Immer

  const [bugs2, setBugs2] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBugs2 = () => {
    setBugs2(
      produce<Bug[]>(bugs2, (draft) => {
        const bug = draft.find((b) => b.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  // Update objects with Immer with Class

  type Bug = {
    id: number;
    title: string;
    fixed: boolean;
  };

  const [bugs3, setBugs3] = useState<Bug[]>([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBugs3 = () => {
    setBugs3(
      produce<Bug[]>(bugs3, (draft) => {
        const bug = draft.find((b) => b.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  // Share State between components

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // return (
  //   <>
  //     <div>
  //       <p>{drink.price}</p>
  //       <button onClick={handleDrink}>Drink</button>
  //     </div>
  //     <div>
  //       <p>{customer.firstName}</p>
  //       <p>{customer.lastName}</p>
  //       <p>{customer.address.zipCode}</p>
  //       <button onClick={handleCustomer}>Update Zip Code</button>
  //     </div>
  //     <div>
  //       {bugs2.map((bug) => (
  //         <p key={bug.id}>
  //           {bug.title} {bug.fixed ? "Fixed" : "To be fixed"}
  //         </p>
  //       ))}
  //       <button onClick={handleBugs2}>Fix bug</button>
  //     </div>
  //   </>
  // );

  // return (
  //   <>
  //     <div>
  //       <NavBar cartItemsCount={cartItems.length}></NavBar>
  //       <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div>
        <ExpandableText maxChars={10}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          esse illo doloribus. At suscipit temporibus cum dicta, est voluptatum
          in illum magnam dolorem nemo voluptatibus nobis assumenda iure earum
          eaque beatae ad, possimus, sequi quae ex atque voluptas! Doloremque
          culpa delectus ullam tempora nisi incidunt reiciendis vitae
          consequuntur minima mollitia eum omnis, harum nihil cumque non ex.
          Unde suscipit reprehenderit, eaque explicabo labore ut corporis
          deserunt quia magni dicta enim exercitationem nemo veniam adipisci,
          dolorem, fugiat accusamus. Aliquid laboriosam veritatis illo tempore,
          nihil dolor quibusdam commodi asperiores porro eaque officiis et
          consequuntur laborum, quasi temporibus ut eum adipisci ipsum!
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
