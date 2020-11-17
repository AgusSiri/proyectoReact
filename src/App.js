import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Contador from './components/contador';
import ItemList from './components/itemList';

function App() {

  return (

    <>

        <NavBar/>         

        <Home greeting="BIENVENIDOS"/>

        <Contador init="0" min="0" max="20" onAdd={() => console.log("onAdd")} />
        <div className="products">
        <ItemList></ItemList>
        </div>

    </>

  );

}



export default App;
