export default function typeColor(type) {
  switch (type) {
    case 'normal':
      return '#a8a878';
    case 'fire':
      return '#f08030';
    case 'water':
      return '#6890f0';
    case 'grass':
      return '#78c850';
    case 'electric':
      return '#f8d030';
    case 'ice':
      return '#98d8d8';
    case 'fighting':
      return '#c03028';
    case 'poison':
      return '#a040a0';
    case 'flying':
      return '#a890f0';
    case 'ground':
      return '#e0c068';
    case 'rock':
      return '#b8a038';
    case 'bug':
      return '#a8b820';
    case 'ghost':
      return '#705898';
    case 'steel':
      return '#b8b8d0';
    case 'psychic':
      return '#f85888';
    case 'dragon':
      return '#7038f8';
    case 'dark':
      return '#705848';
    case 'fairy':
      return '#ee99ac';
    default:
      return '#000000';
  }
}
