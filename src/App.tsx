import Person from './components/Person';

const App = () => {
  return (
    <div>
      <Person name={{ first: 'Tom', last: 'Cage' }} />
    </div>
  );
};

export default App;
