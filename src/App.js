import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Popular from "./components/Popular"
import { CssBaseline, GlobalStyles } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material";
import Reviews from "./components/Reviews";
import Category from "./components/Category";
import Footer from "./components/Footer";


const theme = createTheme({
  palette: {
    primary: {
      main: "#217dbb", 
    },
    secondary: {
      main: "#364464", 
    },
    background:{
      default: '#fff0de'
    }
  },
  textfield: {
    background: 'white'
  }
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
    <Popular />
    <Reviews/>
    <About />
    <Category/>
    <Footer />
 </ThemeProvider>
  </div>
)}

export default App;
