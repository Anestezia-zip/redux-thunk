import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../redux/actions/dataActions.ts';
import { AppDispatch, AppStateType } from '../redux/storage.ts';
import { Album } from '../redux/reducers/dataReducer.ts';

const Albums = () => {
    const dispatch: AppDispatch = useDispatch();
    const albums: Album[] = useSelector((state: AppStateType) => state.data.albums);

    useEffect(() => {
      dispatch(getAlbums())
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