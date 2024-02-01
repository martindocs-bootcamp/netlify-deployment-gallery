

const Character = ({name, img, death, birth, race, realm, spouse}) => {
    
  return (
    <div>
      <h2>{name}</h2>
      <img src={img}  />     
      <ul>
        <li>Date of Birth: {birth}</li>
        <li>Date of Death: {death}</li>
        <li>Race: {race}</li>
        <li>Realm: {realm}</li>
        <li>Spouse: {spouse}</li>      
      </ul>
    </div>
  )
}

export default Character;