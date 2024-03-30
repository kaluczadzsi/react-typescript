import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

const App = () => {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
};

export default App;
