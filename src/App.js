import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import WordList from './component/WordList';
import EmptyPage from './component/EmtpyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<WordList />}/>
          <Route path='*' element={<EmptyPage />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
