import { BrowserRouter } from 'react-router-dom';
import AlbumCard from './AlbumCard';

export default {
  title: 'AlbumCard',
  component: AlbumCard,
};

const album = {
  id: 3,
  title: 'Trench',
  slug: 'trench',
  imageSrc:
    'https://cms.kerrang.com/images/twenty-one-pilots-Trench-header-album-cover.jpg',
  songs: [],
  author: 'Twenty One Pilots',
  releaseDate: '2018-10-05',
};

const Template = (args) => (
  <BrowserRouter>
    <AlbumCard {...args} />
  </BrowserRouter>
);

export const TrenchAlbum = Template.bind({});
TrenchAlbum.args = {
  album,
};
