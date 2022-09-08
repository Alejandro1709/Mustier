import React from 'react';
import AlbumList from '../components/AlbumList';
import Alert from '../components/Alert';

const albums = [
  {
    id: 1,
    title: 'Vessel',
    slug: 'vessel',
    imageSrc: 'https://i.ytimg.com/vi/Fw3FyGK-ZLw/mqdefault.jpg',
    songs: [],
    author: 'Twenty One Pilots',
    releaseDate: '2013-05-26',
  },
  {
    id: 2,
    title: 'Blurryface',
    slug: 'blurryface',
    imageSrc:
      'https://pm1.narvii.com/6342/e48d28039aa2e1e360a0629afcf2c013f99d2435_hq.jpg',
    songs: [],
    author: 'Twenty One Pilots',
    releaseDate: '2015-05-26',
  },
  {
    id: 3,
    title: 'Trench',
    slug: 'trench',
    imageSrc:
      'https://cms.kerrang.com/images/twenty-one-pilots-Trench-header-album-cover.jpg',
    songs: [],
    author: 'Twenty One Pilots',
    releaseDate: '2018-10-05',
  },
  {
    id: 4,
    title: 'Scaled And Icy',
    slug: 'scaled-and-icy',
    imageSrc:
      'https://cdn.glidemagazine.com/wp-content/uploads/2021/05/21122336/twentyone.jpg',
    songs: [],
    author: 'Twenty One Pilots',
    releaseDate: '2021-05-21',
  },
];

function HomePage() {
  return (
    <div className='homePage'>
      <h1 className='mb-1'>My Albums ({albums.length})</h1>
      {/* <div className='alert-list'>
        <Alert type='loading'>Loading...</Alert>
        <Alert type='danger'>Error: Not Authenticated</Alert>
      </div> */}
      <AlbumList albums={albums} />
    </div>
  );
}

export default HomePage;
