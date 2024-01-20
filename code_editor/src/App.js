
import './App.css';
import { BrowserRouter, Routers, Route } from 'react-router-dom'
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routers>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routers>
      </BrowserRouter>
    </>
  );
}

export default App;
