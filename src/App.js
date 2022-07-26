
import './App.css';
import Main from './components/main/Main';
import {Row,Col, Container} from 'reactstrap'
import {Routes,Route} from 'react-router-dom'
import SearchedCity from './components/searchedCity/SearchedCity';
function App() {
  return (
    <div className="App">
      <Container>
      <Routes>
          <Route path='/' exact element={<Main/>}/>
          <Route path='/city/:search' element={<SearchedCity/>}/>
          
        </Routes>
      </Container>
    </div>
  );
}

export default App;
