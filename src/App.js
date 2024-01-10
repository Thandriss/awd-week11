import './App.css';
import MyContainer from './components/MyContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<MyContainer/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
