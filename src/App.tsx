import { ThemeContextProvider } from './components/context/ThemeContext';
import { theme } from './components/context/theme';
import Box from './components/context/Box';

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </>
  );
};

export default App;
