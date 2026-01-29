import ListGroup from './components/ListGroup'



function App() {

  let items = [
    'Cardiff',
    'Gloucester',
    'Birmingham',
    'Worcester',
    'Swansea'
  ];

  const handleSelectItem = item;

  return <div><ListGroup items={items} heading='Cities' onSelectItem={}/></div>
}

export default App;