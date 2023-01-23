import Link from 'next/link'
import {Spacer, Text ,useTheme, Image, Link as NextLink } from "@nextui-org/react"

export const Navbar = () => {

    const {theme} = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'}
            alt="icono de la app"
            width={70}
            height={70}
        />

        <Link href='/' passHref>
            <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
              <Text color="white" h2>P</Text>
              <Text color="white" h3>okémon</Text>
            </div>
        </Link>

        <Spacer css={{flex: 1}}/>

        <Link href='/favorites' passHref>
          <Text color="white">Favoritos</Text>
        </Link>
    </div>
  )
}
