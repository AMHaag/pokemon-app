import React from 'react';

export default function StatBar(props) {
  function statGrade(stat) {
    let colorGrade = '';
    switch (true) {
      case stat>=150:
        colorGrade = '#004d00';
        break;
      case stat >= 120:
        colorGrade = '#006600'
        break
      case stat >= 100:
        colorGrade = '#009900'
        break
      case stat >=80:
        colorGrade = '#aaff00';
        break;
      case stat >=60:
        colorGrade = '#ffff66'
        break
      case stat >= 40:
        colorGrade = '#ff751a'
        break
      default:
        colorGrade = '#ff0000';
        break;
    }
    return colorGrade;
  }

  let fillColor = props.color;
  if (!props.color) fillColor = statGrade(props.stat);
  let x = { fill: `${fillColor}` };
  function reverseDirection() {
    if (props.reverse) {
      return 102 - props.fill;
    } else {
      return 2;
    }
  }
  //This treats 150 as a full statbar or perfect stat.
  let percent = (props.stat * 100) / 150;

  return (
    <>
      <svg width={104} height={21}>
        <rect
          width={percent}
          rx='4'
          y={3}
          x={reverseDirection()}
          height={15}
          style={x}
        />
        <rect
          rx='4'
          y={3}
          x={2}
          width={100}
          height={15}
          strokeWidth={0.5}
          style={{ fill: 'none', stroke: '#737373' }}
        />
      </svg>
    </>
  );
}
