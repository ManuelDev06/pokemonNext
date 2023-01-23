import { Card, Grid, Row, Text , Image} from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[]
}


const HomePage: NextPage<Props> = ({pokemons}) =>  {

  return (
    <>
      <Layout title="Listado de pokemons">
 
       <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(pokemon => (
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
              />
            </Grid>
          ))
        }
       </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((item, index) => (
    {
      ...item,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
    }
  ))

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage
