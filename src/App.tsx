import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Tasks from './Pages/Tasks.tsx';
import NavBar from "./Components/NavBar.tsx";

function App() {
    return (
        <div className="container-fluid">
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;