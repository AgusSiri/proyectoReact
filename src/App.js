import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Contador from './components/contador';

function App() {

  return (

    <>

        <NavBar/>         

        <Home greeting="BIENVENIDOS"/>

        <Contador/>

    </>

  );

}

export default App;
