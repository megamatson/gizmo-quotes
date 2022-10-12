import App from './App';
import {createRoot} from 'react-dom/client';

test('App renders', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App/>);
});
