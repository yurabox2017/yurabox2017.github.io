import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='text-left'>
          <li> В компании по импортозамещению необходимо переписать проект с Blazor на React.</li>
          <li> Владею Blazor, AspNet, net6</li>
          <li> FullStack разработчик, разрабатываю информационно-аналитическую систему.</li>
          <li> 2022-2023гг проходил обучение по курсу AspNet core Otus.</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
