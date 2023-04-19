import Card from './components/Card/Card';
import data from './global/store/data.json';

const App = () => {
  return (
    <div className='wrapper'>
      {data.length > 0 &&
        data.map((item) => <Card key={item.id} product={item} />)}
    </div>
  );
};

export default App;
