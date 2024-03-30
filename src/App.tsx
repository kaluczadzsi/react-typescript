import RandomNumber from './components/restriction/RandomNumber';

const App = () => {
  return (
    <div>
      <RandomNumber value={10} isPositive isNegative />
    </div>
  );
};

export default App;
