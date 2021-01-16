import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Employees from './components/Employees';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/employees" component={Employees} />
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

const mountNode = document.querySelector('#app');
ReactDOM.render(<App />, mountNode);