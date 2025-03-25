import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import WordList from './component/WordList';
import EmptyPage from './component/EmtpyPage';
import AddWord from './component/AddWord';
import AddDay from './component/AddDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<WordList />}/>
          <Route path='/add_word' element={<AddWord />}/>
          <Route path='/add_day' element={<AddDay />}/>
          <Route path='*' element={<EmptyPage />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
