import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { CSSProperties } from 'react';
import { gameConfig } from '../../game/config/game-config';
import { Alien_D } from '../../game/types/alien.type';
import { hasProperties, twoDec } from '../../helper-functions';
import { isAnxious, isDepressed, isFurious } from '../../services/view.service';
import { state } from '../../state';

export const Alien_C = observer(({alien}: {alien: Alien_D}) => {
  const {name, position, age, color, modelBase, daysDead, currentEmotions, currentFocus} = alien
  const {game} = state

  const depthModifier = twoDec(position.bottom * 0.085)
  const teenScale =  1 + age*.5
  let sizeNum = (age > gameConfig.olderAdultStartsAt ? 16 : teenScale) - depthModifier
  if(sizeNum < 2){
    sizeNum = 2
  }

  const isSelectedAlien = game!.selectedAlien?.name == alien.name

  const alienStyle: CSSProperties = {
    left: position.left + '%',
    bottom: position.bottom*.3 + '%',
    filter: `
      hue-rotate(${color}deg) 
      ${isSelectedAlien ? `brightness(1.1)`:''}
      ${age > gameConfig.oldAgeStartsAt ? `grayscale(${(age - gameConfig.oldAgeStartsAt)/10})`:''}
    `,
    height: `${sizeNum}%`,
    zIndex: isSelectedAlien ? 101 : 100 - position.bottom
  }


  return <>
    <alien-element 
      style={alienStyle} 
      class={`
        ${isSelectedAlien ? 'is-selected' : ''}
        model-base-${modelBase}
        ${daysDead ? 'is-dead' : ''}
        ${age < gameConfig.teenStartsAt ? 'baby-model' : 'adult-model'}
        ${isFurious(alien) ? 'furious-model' : ''}
        ${isDepressed(alien) ? 'depressed-model' : ''}
        ${isAnxious(alien) ? 'anxious-model' : ''}
      `}
      onClick={() => {
        runInAction(() => {
          game!.selectedAlien = alien        
        })
      }
    }
    >
      <alien-name-container class='container'>
        <t-heading>{name}</t-heading>
      </alien-name-container>

      <alien-info-container 
        class={`
          container 
          ${position.left > 80 ? 'is-on-the-left' : ''}`}>

        <t-row>
          <t-label>Age</t-label>
          <t-data>{Math.round(age)}</t-data>
        </t-row>

        
        
        {hasProperties(currentEmotions) ?
          <t-container id='currentEmotions'>

            <t-heading>Emotions</t-heading>

            {Object.keys(currentEmotions).map(key => 
              <t-row {...{key}}>
                <t-label>{key}</t-label>
                <t-data>{currentEmotions[key]}</t-data>
              </t-row>
            )}

          </t-container>
          : <></>
        }
          


      </alien-info-container>
    </alien-element>
  </>
})