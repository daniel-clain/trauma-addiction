
import { observer } from 'mobx-react';
import * as React from 'react';
import { Alien_C } from '../components/alien.c';
import { Game_D } from '../../game/types/game.type.';
import { pause, unpause } from '../../services/time.service';
import background from './../images/planet.jpg';


export const Game_V = observer(({game}: {game: Game_D}) => {


  return <>
    <game-view>
      {game.aliens.map(alien => 
        <Alien_C key={alien.name} {...{alien}}/>
      )}


      <player-interface>
        <game-level>Level: {game.level}</game-level>


        <game-time>{game.time}</game-time>

        <pause-button onClick={() => game.paused ? unpause() : pause()}>
          {game.paused ? 'Unpause' : 'Pause'}
        </pause-button>

        <pass-time-button 
          onMouseDown={unpause.bind(game)}
          onMouseUp={pause.bind(game)}
        >
          Pass Time
        </pass-time-button>

      </player-interface>

      <game-background>
        <img src={background} />
      </game-background>


    </game-view>
  </>
})

