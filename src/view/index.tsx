
import { render } from 'react-dom'
import * as React from 'react';
import { observer } from 'mobx-react';

import './style.sass'
import { Game_V } from './views/game.v';

import { state } from '../state';
import { initialSetup } from '../services/main.service';


initialSetup()

const Index = observer(() => {
  
  const {game, savedGame} = state

  return (
    <>
      {game ?        
        <Game_V {...{game}} />
        : <></>
      }
    </>
  )
  
})



render(<Index />, 
  document.body.appendChild(
    document.createElement('risk-management')
  )
)
