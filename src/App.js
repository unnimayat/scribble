import Home from "./components/home/Home"
import Content from "./components/content/Content" 
import {Routes,Route} from 'react-router-dom';
function App() {
  return ( 
    
    <Routes>
      <Route  exact path="/" element={<Home/>} />
      <Route path="/content" element={<Content/>} />
    </Routes>
   
  );
}

export default App;
