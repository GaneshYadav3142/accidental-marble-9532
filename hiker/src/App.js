import Header from './components/header';
import './App.css';
import  Footer from "./components/footer"
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
     <Header/>
     <Homepage/>
     <Footer/>
    </div>
  );
}

export default App;
