import { Provider } from 'react-redux';
import HomePage from './HomePage';
import { store } from './Redux/store';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = createTheme();
  return (
    <Provider store={store}>
      {/* <StyledEngineProvider injectFirst>  */}
      {/* <ThemeProvider theme={theme}>  */}
      {/* <CssBaseline /> */}
      <HomePage />
      {/* </ThemeProvider>  */}
      {/* </StyledEngineProvider>  */}
    </Provider>
  );
}

export default App;
