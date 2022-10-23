import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { useState } from 'react';

function App() {
    const [date, setDate] = useState(new Date());

    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];
    let monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];

    return (
        <div className='App'>
            <Navbar monthNames={monthNames} date={date} />
            <Main monthNames={monthNames} date={date} days={days} />
        </div>
    );
}

export default App;
