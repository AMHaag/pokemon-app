import React from 'react';
import Chip from '@mui/material/Chip';
import capitalizeFirstLetter from '../../helpers/capitalize';
import typeColor from './typeColor';


export default function TypeChip(props){
    const type = props.type


    return (
      <>
          <Chip
            variant='filled'
            sx={{bgcolor:`${typeColor(type)}`}}
            label={capitalizeFirstLetter(type)}
          />
      </>
    );
}
