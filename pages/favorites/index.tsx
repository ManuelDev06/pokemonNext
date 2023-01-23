import React, { useState } from 'react'

import { Card, Grid } from '@nextui-org/react';

import { Layout } from '../../components/layouts/Layout';
import {FavoritePokemons, NoFavorites} from '../../components/ui'
import { useEffect } from 'react';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])
  
  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons)
  },[])

  return (
    <Layout title='Pokemons - Favoritos'>

      {
        favoritesPokemons.length === 0
        ? <NoFavorites/>
        :  (<FavoritePokemons pokemons={favoritesPokemons}/>
        )
      }

    </Layout>
  )
}

export default FavoritesPage