
import './App.css';
// import Product from './pages/Productpage';
// import Homepage from './pages/homepage';
// import Admin from './pages/admin';
import Header from './components/header';
import AllRoute from './components/allroute';
function App() {
  return (
    <div className="App">
   <Header/>
   <AllRoute/>
     {/* <Homepage/> */}
  
      {/* <Admin/> */}
   {/* <Product/> */}
    </div>
  );
}

export default App;
