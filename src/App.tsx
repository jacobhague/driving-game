import ListGroup from './components/ListGroup'
import Button from './components/Button'

function App() {

  let items = [
    'Cardiff',
    'Gloucester',
    'Birmingham',
    'Worcester',
    'Swansea'
  ];

    
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <Button />
    </div>
  )
}

export default App;