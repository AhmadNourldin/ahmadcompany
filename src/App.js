//This File is the base components of the app
//It is going to hold the other components

//Import The navbar from the components folder
import Nav from "./components/Nav";
//Import The Main from the components folder
import Main from './components/Main'

const App = () => {
    return(
        <div>
            <Nav />
            <Main />
        </div>
    )
};

export default App;