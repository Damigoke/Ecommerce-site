import Message from "./Message";
import ListGroup from "./Component/ListGroup";
import Button from "./Component/Button";

function App() {
  return (
    <div>
      <Message />
      <ListGroup />
      <br />
      <Button color="danger"  onClick={() => console.log('Clicked') } children="My Button" />
    </div>
  );
}

export default App;


