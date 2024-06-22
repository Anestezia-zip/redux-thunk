import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRMNextPageThunk, getRMThunk, Character, Info } from "../redux/reducers/ricknMortyReducer.ts";
import { AppDispatch, AppStateType } from "../redux/storage.ts";
import React from "react";

const RicknMorty = () => {
  const dispatch: AppDispatch = useDispatch();
  const getCharacters = () => dispatch(getRMThunk());
  const getNextCharacters = (url: string) => dispatch(getRMNextPageThunk(url));
  const characters: Character[] | [] = useSelector((store: AppStateType) => store.ricknMortyReducer.results)
  const info: Info | {} = useSelector((store: AppStateType) => store.ricknMortyReducer.info)
    

  useEffect(() => {
    getCharacters()    
  }, []);

  return (
    <div>
      <h3>Rick & Morty</h3>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
        {characters.map(item => (
          <div key={item.id}>
            <img width={100} height={100} src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <button onClick={() => getNextCharacters('next' in info ? info.next : '')}>Get more</button>
    </div>
  )
};

export default RicknMorty;
