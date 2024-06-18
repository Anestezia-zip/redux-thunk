import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../redux/actions/dataActions';

const Albums = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.data.albums);

    useEffect(() => {
      dispatch(getAlbums(dispatch))
    }, [])

  return (
    <div style={{backgroundColor: 'lightsalmon'}}>
      <h2 style={{margin: '20px'}}>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Albums