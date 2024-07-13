import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStateType } from "../redux/storage";
import React from "react";
import { Character, Info } from "../redux/interfaces/interfaces";
import { getFirstPageThunk, getNextPageThunk } from "../redux/slices/ricknMortySlice.ts";

const RicknMorty = () => {
  const dispatch: AppDispatch = useDispatch();
  const characters: Character[] | [] = useSelector((store: AppStateType) => store.ricknMorty.results)  
  const info: Info | {} = useSelector((store: AppStateType) => store.ricknMorty.info)

  useEffect(() => {
    // RicknMortyService.getCharacters()
    //   .then(res => dispatch(getFirstPage(res.data)))
    //   .catch(err => console.error('API Error:', err));
    dispatch(getFirstPageThunk())
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
      <button onClick={() => dispatch(getNextPageThunk('next' in info ? info.next : ''))}>Get more</button>
    </div>
  )
};

export default RicknMorty;

