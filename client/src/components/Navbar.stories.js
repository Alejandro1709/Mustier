import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import '../assets/css/index.css';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => (
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
);

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {};
