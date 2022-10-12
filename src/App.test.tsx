import App from './App';
import ReactDOM from 'react-dom';

test('App renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});
