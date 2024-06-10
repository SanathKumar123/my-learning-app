import logo from './logo.svg';
import './App.css';
import Message from './Message';
import ListGroup from './components/ListGroup';
import { Button } from './components/Button';
import { Alert } from './components/Alert';
import { useState } from 'react';
// import { Alert } from 'bootstrap';
// import { Button } from 'bootstrap';
// import ListGroup from './components/ListGroup';

function App() {
  let items = ["New york", "San Fransico", "Delhi", "Tokyo"];
  const handleClick = (item: string) => {
    console.log(item);
  }
  const onClck = () => {
    console.log('clicked');
  }
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    // <ListGroup items = {items} heading="Cities" onSelectItem={handleClick}/>
    <>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}> My Alert </Alert>}
      <Button color = 'primary' onClick={() => setAlertVisible(!alertVisible)}>
        SWE 681
      </Button>
    </>
  );
}

export default App;
