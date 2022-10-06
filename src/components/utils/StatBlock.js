import React from 'react';
import StatBar from './StatBar';
import './utils.styles.css';
import { Tooltip } from '@mui/material';

export default function StatBlock(props) {
  let stats = {
    hp: 0 || props.hp,
    attack: 0 || props.attack,
    defense: 0 || props.defense,
    specialAtk: 0 || props.spAtk,
    specialDef: 0 || props.spDef,
    speed: 0 || props.speed,
  };

  return (
    <div className='stat-box'>
      <div className='left-stat-group'>
        <Tooltip title='Hit Points' arrow>
          <div className='hp-stat stat-row'>
            HP:
            <StatBar stat={stats.hp} />
          </div>
        </Tooltip>
        <Tooltip title='Phsyical Attack' arrow>
          <div className='atk-stat stat-row'>
            Atk:
            <StatBar stat={stats.attack} />
          </div>
        </Tooltip>
        <Tooltip title='Physical Defense' arrow>
          <div className='def-stat stat-row'>
            Def:
            <StatBar stat={stats.defense} />
          </div>
        </Tooltip>
      </div>
      <div className='right-stat-group'>
        <Tooltip title='Special Attack' arrow>
          <div className='spatk-stat stat-row'>
            SpA:
            <StatBar stat={stats.specialAtk} />
          </div>
        </Tooltip>
        <Tooltip title='Special Defense' arrow>
          <div className='spdef-stat stat-row'>
            SpD:
            <StatBar stat={stats.specialDef} />
          </div>
        </Tooltip>
        <Tooltip title='Speed' arrow>
          <div className='spd-stat stat-row'>
            Spd:
            <StatBar stat={stats.speed} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
