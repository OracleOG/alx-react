import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';

// Configure Enzyme to use the adapter for React 16
configure({ adapter: new Adapter() });