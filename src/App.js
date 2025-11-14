import './App.css';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Main from './pages/main/Main'
import Teachers from './pages/teachers/Teachers';
import Do from './pages/whatWeDo/Do';

function App() {
  return (
    <div className="App">
       <Header/>
       <Main/>
       <Do/>
       <Teachers/>
       <Footer/>
    </div>
  );
}

export default App;
