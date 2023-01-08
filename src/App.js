import './App.css';

import SettingSearchBar from './SettingSearchBar';
import SettingGallery from './SettingGallery';
import SettingFooter from './SettingFooter';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Monospace',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="container">
        <div className="title">
            <h1><span className="blink">_</span>the settings agency</h1>
        </div>
        <div className="tagline">
            <h4>unified heroes and lore across various mediums</h4>
        </div>
        <div className="gallery">
            <div className="search-bar">
                <SettingSearchBar />
            </div>
            <SettingGallery />
        </div>
        <div className="aboutus">
            <SettingFooter />
        </div>
    </div>
  </ThemeProvider>
  );
}

export default App;
