import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      {<Header/>}
      {<Content/>}
      {<Footer/>}
    </div>
  );
}

export default App;
