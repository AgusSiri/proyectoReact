import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Contador from './components/contador';

function App() {

  return (

    <>

        <NavBar/>         

        <Home greeting="BIENVENIDOS"/>

        <Contador init="0" min="0" max="20" onAdd={() => console.log("onAdd")} />

    </>

  );

}

export default App;
