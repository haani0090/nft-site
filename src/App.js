
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

function App() {
  return (
    <div className='app'>
          <Header />
          <CollectionCard
            id ={0}
            name ={'iz punk'}
            traits ={[{'value': 7}]} 
            image = ''
            />

    </div>


  );
}

export default App;
