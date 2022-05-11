import './App.css';
import Header from './components/Header/Header'; //Header 컴포넌트 임포트
import LeftArea from './components/Header/Contents/LeftArea/LeftArea'; //LeftArea 컴포넌트 임포트
function App() { 
  return (
    <div>
      <Header />
      <LeftArea/>
    </div>
  );
}

export default App;
