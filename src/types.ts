export type GameJson = {
  game: Game
};

export type Game = {
  atBat: string,
  inning: Inning|Inning[]
};

export type Inning = {
  num: string,
  away_team: string,
  home_team: string,
  next: string,
  top: InningHalf,
  bottom: InningHalf
};

export type InningHalf = {
  atbat: AtBat|AtBat[]
};

export type AtBat = {
  num: string,
  b: string,
  s: string,
  o: string,
  start_tfs: string,
  start_tfs_zulu: string,
  end_tfs_zulu: string,
  batter: string,
  stand: string,
  b_height: string,
  pitcher: string,
  p_throws: string,
  des: string,
  event_num: string,
  event: string,
  play_guid: string,
  pitch: PitchJson|PitchJson[]
};

export type PitchJson = {
  des: string,
  id: string,
  type: string,
  code: string,
  tfs: string,
  tfs_zulu: string,
  x: string,
  y: string,
  event_num: string,
  sv_id: string,
  play_guid: string,
  start_speed: string,
  end_speed: string,
  sz_top: string,
  sz_bot: string,
  pfx_x: string,
  pfx_z: string,
  px: string,
  pz: string,
  x0: string,
  y0: string,
  z0: string,
  vx0: string,
  vy0: string,
  vz0: string,
  ax: string,
  ay: string,
  az: string,
  break_y: string,
  break_angle: string,
  break_length: string,
  pitch_type: string,
  type_confidence: string,
  zone: string,
  nasty: string,
  spin_dir: string,
  spin_rate: string,
};

export type PitchKeys = keyof Pitch;

export type Pitch = {
  des: string,
  id: number,
  type: string,
  code: string,
  tfs_zulu: string,
  x: number,
  y: number,
  start_speed: number,
  end_speed: number,
  sz_top: number,
  sz_bot: number,
  pfx_x: number,
  pfx_z: number,
  px: number,
  pz: number,
  x0: number,
  y0: number,
  z0: number,
  vx0: number,
  vy0: number,
  vz0: number,
  ax: number,
  ay: number,
  az: number,
  break_y: number,
  break_angle: number,
  break_length: number,
  pitch_type: string,
  pitch_code: number,
  type_confidence: number,
  zone: number,
  nasty: number,
  spin_dir: number,
  spin_rate: number,
  left_handed_pitcher: number,
  left_handed_batter: number
};

export type SZData = {
  px: number,
  pz: number,
  sz_top: number,
  sz_bot: number,
  label: number
};