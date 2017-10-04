import React from 'react';
import { render } from 'react-dom';
import Welcome from './Welcome';

const App = () => (
    <Welcome />
);

render(<App />, document.getElementById('App'));

