import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  return (
    <div>
      <Button
        handleClick={(event, id) => console.log('Button clicked', event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
};

export default App;
