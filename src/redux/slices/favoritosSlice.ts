import { createSlice } from "@reduxjs/toolkit";

export interface IFavorito {
  id?: number;
  nombre: string;
  imagen: string;
}

export type favoritosState = {
  listaFavoritos: IFavorito[];
};

const initialState: favoritosState = {
  listaFavoritos: [],
};

/***
 * @author Juan David Velasquez Oviedo
 * @description Slice con reducers para agregar/quitar y limpiar el estado "favoritos". El estado inicial de la lista de favoritos es un array vacío.
 * @returns {void}
 */
export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState: initialState,
  reducers: {
    handleFavorito: (state, action) => {
      const favoritoIndex = state.listaFavoritos.findIndex(
        (item) => item.id === action.payload.id
      );

      if (favoritoIndex !== -1) {
        state.listaFavoritos.splice(favoritoIndex, 1);
      } else {
        state.listaFavoritos.push(action.payload);
      }
    },
    clearFavoritos: (state) => {
      state.listaFavoritos = [];
    },
  },
});

export const { handleFavorito, clearFavoritos } = favoritosSlice.actions;

const favoritosReducer = favoritosSlice.reducer;

export default favoritosReducer;
