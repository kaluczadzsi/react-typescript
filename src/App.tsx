import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';

const App = () => {
  return (
    <>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
};

export default App;
