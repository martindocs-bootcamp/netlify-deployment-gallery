import characterData from '../data/characterData.json';
import Character from './Character';
// this component show json data 
// shold render characters

const CharacterGallery = () => {
  return (
    <div>
      {
        characterData.map((char)=> {
         console.log(char)
          const{_id, name, imgUrl, death, birth, race, realm, spouse} = char;

          return <Character 
              key={_id}
              name={name}
              img={imgUrl}
              death={death}
              birth={birth}
              race={race}
              realm={realm}
              spouse={spouse}
            />
          })
      }
    
    </div>
  )
}

export default CharacterGallery;