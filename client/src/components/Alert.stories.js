import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args}></Alert>;

export const Default = Template.bind({});
Default.args = {
  type: '',
  children: 'Default Alert',
};

export const Success = Template.bind({});
Default.args = {
  type: 'succes',
  children: 'Success Alert',
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'loading',
  children: 'Loading Alert',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  children: 'Danger Alert',
};
