export function pitchTypeToInt(type: string): number {
  if (type === 'FT') {  // Fastball 2-seam
    return 0;
  } else if (type === 'FF') {  // Fastball 4-seam
    return 1;
  } else if (type === 'FS') {  // Fastball sinker
    return 2;
  } else if (type === 'FC') {  // Fastball cutter
    return 3;
  } else if (type === 'SL') {  // Slider
    return 4;
  } else if (type === 'CH') {  // Changeup
    return 5;
  } else if (type === 'CB') {  // Curveball
    return 6;
    } else if (type === 'KC') {  // Knuckle-curve
      return 7;
    } else if (type === 'KN') {  // Knuckleball
      return 8;
    } else if (type === 'EP') {  // Eephus
      return 9;
  } else {
    return -1;
  }
}

export function pitchFromType(type: number): string {
  switch (type) {
    case 0:
      return 'Fastball (2-seam)';
    case 1:
      return 'Fastball (4-seam)';
    case 2:
      return 'Fastball (sinker)';
    case 3:
      return 'Fastball (cutter)';
    case 4:
      return 'Slider';
    case 5:
      return 'Changeup';
    case 6:
      return 'Curveball';
    default:
      return 'Unknown';
  }
}