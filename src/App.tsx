import ListGroup from './components/ListGroup'

function App() {

  let items = [
    'Cardiff',
    'Gloucester',
    'Birmingham',
    'Worcester',
    'Swansea'
  ];

    


  return <div><ListGroup items={items} heading='Cities' /></div>
}

export default App;