import './App.css';
import Header from './components/Header/Header'; //Header 컴포넌트 임포트
import LeftArea from './components/Contents/LeftArea/LeftArea';
import Rule from './components/Contents/Rule/Rule';
import Privacy from './components/Contents/Privacy/Privacy';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() { 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LeftArea />} />
        <Route path="Rule" element={<Rule />} />
        <Route path="Privacy" element={<Privacy/>}/>
      </Routes>
  </BrowserRouter>
  );
}
  
export default App;
