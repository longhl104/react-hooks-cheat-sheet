import './App.css';
import Navbar from "./navbar/Navbar";
import 'primereact/resources/themes/viva-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Content from "./content/Content";

function App() {
    return (
        <>
            <Navbar />
            <Content />
        </>
    );
}

export default App;
