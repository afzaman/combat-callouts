import Damage from './components/Damage'
import { useState } from 'react';
import Images from './resources/Images'
import Callouts from './resources/Callouts'


function App() {

  const [callout, changeCallout] = useState("")

  function handleClick(type, result){
    const typeFilter = Callouts.filter(e => e.type === type)
    const resultFilter = typeFilter.filter(e => e.result === result)
    var x = Math.floor(Math.random() * resultFilter.length)
    changeCallout(resultFilter[x].msg)
  }

  return (
    <div>
      <div>{callout}</div>
      <div>
        {Images.map((damageType) =>
          <Damage key={damageType.name} type={damageType} handleClick={handleClick}/>
        )}
      </div>
      <div>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </div>
  );
}

export default App;