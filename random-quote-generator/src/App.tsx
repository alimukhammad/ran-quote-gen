import React from 'react';
import QuoteGenerator from './components/QuoteGenerator';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Random Quote Generator</h1>
            <QuoteGenerator />
        </div>
    );
};

export default App;