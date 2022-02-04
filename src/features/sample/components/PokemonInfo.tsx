import styles from '~/styles/pokemonInfo.module.css'

interface IPokemonInfo {
  name?: string
  url?: string
}

export const PokemonInfo = ({ name, url }: IPokemonInfo) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      {url ? <a href={url}>Go to Page</a> : null}
    </div>
  )
}
