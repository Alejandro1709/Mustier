import AlbumList from './AlbumList';
import { getAlbums } from '../albums';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'AlbumList',
  component: AlbumList,
};

const albums = getAlbums();

const Template = (args) => (
  <BrowserRouter>
    <AlbumList {...args}></AlbumList>
  </BrowserRouter>
);

export const DefaultList = Template.bind({});

DefaultList.args = {
  albums,
};
