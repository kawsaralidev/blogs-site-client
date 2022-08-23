import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";
import Navigation from "./Components/Pages/Shared/Navigation/navigation";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import TopNav from "./Components/Pages/Shared/TopNav/TopNav";
import Logo from "./Components/Pages/Shared/Logo/Logo";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <TopNav></TopNav>
                <Logo></Logo>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
