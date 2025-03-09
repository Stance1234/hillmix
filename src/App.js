
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from "./component/home";
import './styles/sweetalert.css';
import About from './component/About';
import Pricing from './component/pricing';
import LiveChatWidget from './component/chatbot';



function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
      <LiveChatWidget />
    </div>
  );
}


export default App;
