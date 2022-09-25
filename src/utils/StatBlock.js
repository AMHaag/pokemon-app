import React from 'react';
import StatBar from './StatBar';
import '../components/ComponentsStyle.css';
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
        <div className='atk-stat stat-row'>
          Atk:
          <StatBar stat={stats.attack} />
        </div>
        <div className='def-stat stat-row'>
          Def:
          <StatBar stat={stats.defense} />
        </div>
      </div>
      <div className='right-stat-group'>
        <div className='def-stat stat-row'>
          SpA:
          <StatBar stat={stats.specialAtk} />
        </div>
        <div className='def-stat stat-row'>
          SpD:
          <StatBar stat={stats.specialDef} />
        </div>
        <div className='def-stat stat-row'>
          Spd:
          <StatBar stat={stats.speed} />
        </div>
      </div>
    </div>
  );
}
