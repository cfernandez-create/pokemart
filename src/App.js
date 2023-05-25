import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Popular from "./components/Popular"
import { CssBaseline, GlobalStyles } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#44A4E4", 
    },
    secondary: {
      main: "#364464", 
    },
    background:{
      default: '#fff0de'
    }
  },
});

function App() {
  return(
    <div className="App">
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={{ 
        html: {
        maxWidth: '800px',
        margin: '0 auto',
        }
        }} />
    <Header />
    <Main />
    <About />
    <Popular />
 </ThemeProvider>
  </div>
)}

export default App;
