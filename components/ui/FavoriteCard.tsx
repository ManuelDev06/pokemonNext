
import React from 'react'
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react'

interface Props {
    pokemonId: number
}

export const FavoriteCard = ({pokemonId}:Props) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

  return (
    <Grid xs={6} sm={2} md={2} xl={1} key={pokemonId}>
        <Card isHoverable isPressable css={{padding: 10}}
            onPress={onFavoriteClicked}
        >
        <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={'100%'}
            height={140}
            alt={'pokemon' + pokemonId}
        />
        </Card>
    </Grid>
  )
}
