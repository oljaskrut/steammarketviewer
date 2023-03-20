import {
  // BAYONET,
  // BAYONET_ST,
  // FLIP_KNIFE,
  // FLIP_KNIFE_ST,
  // NAVAJA_KNIFE,
  // NAVAJA_KNIFE_ST,
  // STILETTO_KNIFE,
  // STILETTO_KNIFE_ST,
  BUTTERFLY_KNIFE,
  BUTTERFLY_KNIFE_ST,
  // FALCHION_KNIFE,
  // FALCHION_KNIFE_ST,
  // BOWIE_KNIFE,
  // BOWIE_KNIFE_ST,
  // HUNTSMAN_KNIFE,
  // HUNTSMAN_KNIFE_ST,
  // KARAMBIT,
  // KARAMBIT_ST,
  // M9_BAYONET,
  // M9_BAYONET_ST,
  // TALON_KNIFE,
  // TALON_KNIFE_ST,
  // URSUS_KNIFE,
  // URSUS_KNIFE_ST,
  DOPPLER,
  GAMMA_DOPPLER,
  // SHADOW_DAGGERS,
  FN,
  // SHADOW_DAGGERS_ST,
} from "../auxiliary/constants"

const p13 = [419, 421, 415, 416, 417, 570, 572, 568, 618, 619, 617, 853, 855]

export const ConfigsPHS = [
  // { name: BAYONET + DOPPLER + FN, PHS: p13 }, //0
  // { name: BAYONET_ST + DOPPLER + FN, PHS: p13 }, //1
  // { name: M9_BAYONET + DOPPLER + FN, PHS: p13 }, //2
  // { name: M9_BAYONET_ST + DOPPLER + FN, PHS: p13 }, //3
  // { name: KARAMBIT + DOPPLER + FN, PHS: p13 }, //4
  // { name: KARAMBIT_ST + DOPPLER + FN, PHS: p13 }, //5
  { name: BUTTERFLY_KNIFE + DOPPLER + FN, PHS: p13 }, //6//0
  { name: BUTTERFLY_KNIFE_ST + DOPPLER + FN, PHS: p13 }, //7//1
  // { name: BAYONET + GAMMA_DOPPLER + FN, PHS: p13 }, //8
  // { name: BAYONET_ST + GAMMA_DOPPLER + FN, PHS: p13 }, //9
  // { name: M9_BAYONET + GAMMA_DOPPLER + FN, PHS: p13 }, //10
  // { name: M9_BAYONET_ST + GAMMA_DOPPLER + FN, PHS: p13 }, //11
  // { name: KARAMBIT + GAMMA_DOPPLER + FN, PHS: p13 }, //12
  // { name: KARAMBIT_ST + GAMMA_DOPPLER + FN, PHS: p13 }, //13
  { name: BUTTERFLY_KNIFE + GAMMA_DOPPLER + FN, PHS: p13 }, //14//2
  { name: BUTTERFLY_KNIFE_ST + GAMMA_DOPPLER + FN, PHS: p13 }, //15//3
  // { name: FLIP_KNIFE + GAMMA_DOPPLER + FN, PHS: p13 }, //16
  // { name: FLIP_KNIFE_ST + GAMMA_DOPPLER + FN, PHS: p13 }, //17
  // { name: SHADOW_DAGGERS + GAMMA_DOPPLER + FN, PHS: p13 }, //18
  // { name: HUNTSMAN_KNIFE + GAMMA_DOPPLER + FN, PHS: p13 }, //19
  // { name: BOWIE_KNIFE + GAMMA_DOPPLER + FN, PHS: p13 }, //20
]
