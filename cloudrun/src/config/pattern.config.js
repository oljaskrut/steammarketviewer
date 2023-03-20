const pattern_config = [
  { name: "★ Ursus Knife | Case Hardened (Factory New)", nid: "176000149" }, //0
  { name: "★ Ursus Knife | Case Hardened (Minimal Wear)", nid: "176000442" }, //1
  { name: "★ Ursus Knife | Case Hardened (Field-Tested)", nid: "176000312" }, //2
  { name: "★ Ursus Knife | Case Hardened (Well-Worn)", nid: "176000180" }, //3
  { name: "★ Ursus Knife | Case Hardened (Battle-Scarred)", nid: "176000267" }, //4
  { name: "★ StatTrak™ Ursus Knife | Case Hardened (Factory New)", nid: "176020871" }, //5
  { name: "★ StatTrak™ Ursus Knife | Case Hardened (Minimal Wear)", nid: "176011978" }, //6
  { name: "★ StatTrak™ Ursus Knife | Case Hardened (Field-Tested)", nid: "176005617" }, //7
  { name: "★ Classic Knife | Case Hardened (Factory New)", nid: "176092140" }, //8
  { name: "★ Classic Knife | Case Hardened (Minimal Wear)", nid: "176091938" }, //9
  { name: "★ Classic Knife | Case Hardened (Field-Tested)", nid: "176092018" }, //10
  { name: "★ Classic Knife | Case Hardened (Well-Worn)", nid: "176092002" }, //11
  { name: "★ Classic Knife | Case Hardened (Battle-Scarred)", nid: "176092044" }, //12
  { name: "★ StatTrak™ Classic Knife | Case Hardened (Factory New)", nid: "176098617" }, //13
  { name: "★ StatTrak™ Classic Knife | Case Hardened (Minimal Wear)", nid: "176092037" }, //14
  { name: "★ StatTrak™ Classic Knife | Case Hardened (Field-Tested)", nid: "176092148" }, //15
  { name: "★ Butterfly Knife | Case Hardened (Factory New)", nid: "15434948" }, //16
  { name: "★ Butterfly Knife | Case Hardened (Minimal Wear)", nid: "15038000" }, //17
  { name: "★ Butterfly Knife | Case Hardened (Field-Tested)", nid: "15008080" }, //18
  { name: "★ Butterfly Knife | Case Hardened (Well-Worn)", nid: "15013481" }, //19
  { name: "★ Butterfly Knife | Case Hardened (Battle-Scarred)", nid: "14986884" }, //20
  { name: "★ StatTrak™ Butterfly Knife | Case Hardened (Factory New)", nid: "20120134" }, //21
  { name: "★ StatTrak™ Butterfly Knife | Case Hardened (Minimal Wear)", nid: "16965260" }, //22
  { name: "★ StatTrak™ Butterfly Knife | Case Hardened (Field-Tested)", nid: "15076647" }, //23
  { name: "★ Talon Knife | Case Hardened (Factory New)", nid: "176002215" }, //24
  { name: "★ Talon Knife | Case Hardened (Minimal Wear)", nid: "176001314" }, //25
  { name: "★ Talon Knife | Case Hardened (Field-Tested)", nid: "176000144" }, //26
  { name: "★ Talon Knife | Case Hardened (Well-Worn)", nid: "176000747" }, //27
  { name: "★ Talon Knife | Case Hardened (Battle-Scarred)", nid: "176000450" }, //28
  { name: "★ StatTrak™ Talon Knife | Case Hardened (Factory New)", nid: "176032544" }, //29
  { name: "★ StatTrak™ Talon Knife | Case Hardened (Minimal Wear)", nid: "176000558" }, //30
  { name: "★ StatTrak™ Talon Knife | Case Hardened (Field-Tested)", nid: "176000926" }, //31
  { name: "★ M9 Bayonet | Case Hardened (Factory New)", nid: "1391770" }, //32
  { name: "★ M9 Bayonet | Case Hardened (Minimal Wear)", nid: "1333690" }, //33
  { name: "★ M9 Bayonet | Case Hardened (Field-Tested)", nid: "1338569" }, //34
  { name: "★ M9 Bayonet | Case Hardened (Well-Worn)", nid: "1333696" }, //35
  { name: "★ M9 Bayonet | Case Hardened (Battle-Scarred)", nid: "1322063" }, //36
  { name: "★ StatTrak™ M9 Bayonet | Case Hardened (Factory New)", nid: "11316265" }, //37
  { name: "★ StatTrak™ M9 Bayonet | Case Hardened (Minimal Wear)", nid: "9688037" }, //38
  { name: "★ StatTrak™ M9 Bayonet | Case Hardened (Field-Tested)", nid: "9670627" }, //39
  { name: "★ Bayonet | Case Hardened (Factory New)", nid: "1512969" }, //40
  { name: "★ Bayonet | Case Hardened (Minimal Wear)", nid: "1338724" }, //41
  { name: "★ Bayonet | Case Hardened (Field-Tested)", nid: "1322024" }, //42
  { name: "★ Bayonet | Case Hardened (Well-Worn)", nid: "1322210" }, //43
  { name: "★ Bayonet | Case Hardened (Battle-Scarred)", nid: "1322356" }, //44
  { name: "★ StatTrak™ Bayonet | Case Hardened (Factory New)", nid: "11107741" }, //45
  { name: "★ StatTrak™ Bayonet | Case Hardened (Minimal Wear)", nid: "9666816" }, //46
  { name: "★ StatTrak™ Bayonet | Case Hardened (Field-Tested)", nid: "9690372" }, //47
  { name: "★ Skeleton Knife | Case Hardened (Factory New)", nid: "176097787" }, //48
  { name: "★ Skeleton Knife | Case Hardened (Minimal Wear)", nid: "176097345" }, //49
  { name: "★ Skeleton Knife | Case Hardened (Field-Tested)", nid: "176097510" }, //50
  { name: "★ Skeleton Knife | Case Hardened (Well-Worn)", nid: "176096938" }, //51
  { name: "★ Skeleton Knife | Case Hardened (Battle-Scarred)", nid: "176097742" }, //52
  { name: "★ StatTrak™ Skeleton Knife | Case Hardened (Factory New)", nid: "176097676" }, //53
  { name: "★ StatTrak™ Skeleton Knife | Case Hardened (Minimal Wear)", nid: "176098197" }, //54
  { name: "★ StatTrak™ Skeleton Knife | Case Hardened (Field-Tested)", nid: "176097691" }, //55
  { name: "★ Classic Knife | Fade (Factory New)", nid: "176091941" }, //56
  { name: "★ Classic Knife | Fade (Minimal Wear)", nid: "176092077" }, //57
  { name: "★ Classic Knife | Fade (Field-Tested)", nid: "undefined" }, //58
  { name: "★ Classic Knife | Fade (Well-Worn)", nid: "undefined" }, //59
  { name: "★ Classic Knife | Fade (Battle-Scarred)", nid: "undefined" }, //60
  { name: "★ StatTrak™ Classic Knife | Fade (Factory New)", nid: "176092149" }, //61
  { name: "★ StatTrak™ Classic Knife | Fade (Minimal Wear)", nid: "176092355" }, //62
  { name: "★ StatTrak™ Classic Knife | Fade (Field-Tested)", nid: "undefined" }, //63
  { name: "★ Stiletto Knife | Fade (Factory New)", nid: "176000152" }, //64
  { name: "★ Stiletto Knife | Fade (Minimal Wear)", nid: "176013105" }, //65
  { name: "★ Stiletto Knife | Fade (Field-Tested)", nid: "undefined" }, //66
  { name: "★ Stiletto Knife | Fade (Well-Worn)", nid: "undefined" }, //67
  { name: "★ Stiletto Knife | Fade (Battle-Scarred)", nid: "undefined" }, //68
  { name: "★ StatTrak™ Stiletto Knife | Fade (Factory New)", nid: "176005915" }, //69
  { name: "★ StatTrak™ Stiletto Knife | Fade (Minimal Wear)", nid: "176031717" }, //70
  { name: "★ StatTrak™ Stiletto Knife | Fade (Field-Tested)", nid: "undefined" }, //71
  { name: "★ Bayonet | Fade (Factory New)", nid: "1336989" }, //72
  { name: "★ Bayonet | Fade (Minimal Wear)", nid: "1375375" }, //73
  { name: "★ Bayonet | Fade (Field-Tested)", nid: "undefined" }, //74
  { name: "★ Bayonet | Fade (Well-Worn)", nid: "undefined" }, //75
  { name: "★ Bayonet | Fade (Battle-Scarred)", nid: "undefined" }, //76
  { name: "★ StatTrak™ Bayonet | Fade (Factory New)", nid: "9846303" }, //77
  { name: "★ StatTrak™ Bayonet | Fade (Minimal Wear)", nid: "14698943" }, //78
  { name: "★ StatTrak™ Bayonet | Fade (Field-Tested)", nid: "undefined" }, //79
  { name: "★ Bowie Knife | Fade (Factory New)", nid: "139748202" }, //80
  { name: "★ Bowie Knife | Fade (Minimal Wear)", nid: "139948508" }, //81
  { name: "★ Bowie Knife | Fade (Field-Tested)", nid: "undefined" }, //82
  { name: "★ Bowie Knife | Fade (Well-Worn)", nid: "undefined" }, //83
  { name: "★ Bowie Knife | Fade (Battle-Scarred)", nid: "undefined" }, //84
  { name: "★ StatTrak™ Bowie Knife | Fade (Factory New)", nid: "140372904" }, //85
  { name: "★ StatTrak™ Bowie Knife | Fade (Minimal Wear)", nid: "150964736" }, //86
  { name: "★ StatTrak™ Bowie Knife | Fade (Field-Tested)", nid: "undefined" }, //87
  { name: "★ Survival Knife | Fade (Factory New)", nid: "176096927" }, //88
  { name: "★ Survival Knife | Fade (Minimal Wear)", nid: "176097618" }, //89
  { name: "★ Survival Knife | Fade (Field-Tested)", nid: "undefined" }, //90
  { name: "★ Survival Knife | Fade (Well-Worn)", nid: "undefined" }, //91
  { name: "★ Survival Knife | Fade (Battle-Scarred)", nid: "undefined" }, //92
  { name: "★ StatTrak™ Survival Knife | Fade (Factory New)", nid: "176097921" }, //93
  { name: "★ StatTrak™ Survival Knife | Fade (Minimal Wear)", nid: "176099578" }, //94
  { name: "★ StatTrak™ Survival Knife | Fade (Field-Tested)", nid: "undefined" }, //95
  { name: "★ Nomad Knife | Fade (Factory New)", nid: "176097169" }, //96
  { name: "★ Nomad Knife | Fade (Minimal Wear)", nid: "176097602" }, //97
  { name: "★ Nomad Knife | Fade (Field-Tested)", nid: "undefined" }, //98
  { name: "★ Nomad Knife | Fade (Well-Worn)", nid: "undefined" }, //99
  { name: "★ Nomad Knife | Fade (Battle-Scarred)", nid: "undefined" }, //100
  { name: "★ StatTrak™ Nomad Knife | Fade (Factory New)", nid: "176097449" }, //101
  { name: "★ StatTrak™ Nomad Knife | Fade (Minimal Wear)", nid: "176117423" }, //102
  { name: "★ StatTrak™ Nomad Knife | Fade (Field-Tested)", nid: "undefined" }, //103
  { name: "★ Huntsman Knife | Case Hardened (Factory New)", nid: "9121050" }, //104
  { name: "★ Huntsman Knife | Case Hardened (Minimal Wear)", nid: "8996299" }, //105
  { name: "★ Huntsman Knife | Case Hardened (Field-Tested)", nid: "9001896" }, //106
  { name: "★ Huntsman Knife | Case Hardened (Well-Worn)", nid: "8993300" }, //107
  { name: "★ Huntsman Knife | Case Hardened (Battle-Scarred)", nid: "8993611" }, //108
  { name: "★ StatTrak™ Huntsman Knife | Case Hardened (Factory New)", nid: "16959537" }, //109
  { name: "★ StatTrak™ Huntsman Knife | Case Hardened (Minimal Wear)", nid: "10410130" }, //110
  { name: "★ StatTrak™ Huntsman Knife | Case Hardened (Field-Tested)", nid: "10302326" }, //111
  { name: "★ Bowie Knife | Case Hardened (Factory New)", nid: "139718950" }, //112
  { name: "★ Bowie Knife | Case Hardened (Minimal Wear)", nid: "139813603" }, //113
  { name: "★ Bowie Knife | Case Hardened (Field-Tested)", nid: "139705925" }, //114
  { name: "★ Bowie Knife | Case Hardened (Well-Worn)", nid: "139763397" }, //115
  { name: "★ Bowie Knife | Case Hardened (Battle-Scarred)", nid: "139763391" }, //116
  { name: "★ StatTrak™ Bowie Knife | Case Hardened (Factory New)", nid: "146748041" }, //117
  { name: "★ StatTrak™ Bowie Knife | Case Hardened (Minimal Wear)", nid: "140180082" }, //118
  { name: "★ StatTrak™ Bowie Knife | Case Hardened (Field-Tested)", nid: "140035442" }, //119
  { name: "★ Flip Knife | Case Hardened (Factory New)", nid: "1348279" }, //120
  { name: "★ Flip Knife | Case Hardened (Minimal Wear)", nid: "1340661" }, //121
  { name: "★ Flip Knife | Case Hardened (Field-Tested)", nid: "1341792" }, //122
  { name: "★ Flip Knife | Case Hardened (Well-Worn)", nid: "1354455" }, //123
  { name: "★ Flip Knife | Case Hardened (Battle-Scarred)", nid: "1397881" }, //124
  { name: "★ StatTrak™ Flip Knife | Case Hardened (Factory New)", nid: "11665465" }, //125
  { name: "★ StatTrak™ Flip Knife | Case Hardened (Minimal Wear)", nid: "9750433" }, //126
  { name: "★ StatTrak™ Flip Knife | Case Hardened (Field-Tested)", nid: "9845561" }, //127
  { name: "★ Falchion Knife | Case Hardened (Factory New)", nid: "49705375" }, //128
  { name: "★ Falchion Knife | Case Hardened (Minimal Wear)", nid: "49440521" }, //129
  { name: "★ Falchion Knife | Case Hardened (Field-Tested)", nid: "49419347" }, //130
  { name: "★ Falchion Knife | Case Hardened (Well-Worn)", nid: "49399588" }, //131
  { name: "★ Falchion Knife | Case Hardened (Battle-Scarred)", nid: "49539759" }, //132
  { name: "★ StatTrak™ Falchion Knife | Case Hardened (Factory New)", nid: "49845667" }, //133
  { name: "★ StatTrak™ Falchion Knife | Case Hardened (Minimal Wear)", nid: "49949768" }, //134
  { name: "★ StatTrak™ Falchion Knife | Case Hardened (Field-Tested)", nid: "49877571" }, //135
  { name: "★ Paracord Knife | Case Hardened (Factory New)", nid: "176098010" }, //136
  { name: "★ Paracord Knife | Case Hardened (Minimal Wear)", nid: "176097887" }, //137
  { name: "★ Paracord Knife | Case Hardened (Field-Tested)", nid: "176097390" }, //138
  { name: "★ Paracord Knife | Case Hardened (Well-Worn)", nid: "176097499" }, //139
  { name: "★ Paracord Knife | Case Hardened (Battle-Scarred)", nid: "176097677" }, //140
  { name: "★ StatTrak™ Paracord Knife | Case Hardened (Factory New)", nid: "176098083" }, //141
  { name: "★ StatTrak™ Paracord Knife | Case Hardened (Minimal Wear)", nid: "176098335" }, //142
  { name: "★ StatTrak™ Paracord Knife | Case Hardened (Field-Tested)", nid: "176104734" }, //143
  { name: "★ Nomad Knife | Case Hardened (Factory New)", nid: "176097565" }, //144
  { name: "★ Nomad Knife | Case Hardened (Minimal Wear)", nid: "176097868" }, //145
  { name: "★ Nomad Knife | Case Hardened (Field-Tested)", nid: "176097664" }, //146
  { name: "★ Nomad Knife | Case Hardened (Well-Worn)", nid: "176097566" }, //147
  { name: "★ Nomad Knife | Case Hardened (Battle-Scarred)", nid: "176097665" }, //148
  { name: "★ StatTrak™ Nomad Knife | Case Hardened (Factory New)", nid: "176097780" }, //149
  { name: "★ StatTrak™ Nomad Knife | Case Hardened (Minimal Wear)", nid: "176097781" }, //150
  { name: "★ StatTrak™ Nomad Knife | Case Hardened (Field-Tested)", nid: "176097582" }, //151
  { name: "★ Survival Knife | Case Hardened (Factory New)", nid: "176097583" }, //152
  { name: "★ Survival Knife | Case Hardened (Minimal Wear)", nid: "176098056" }, //153
  { name: "★ Survival Knife | Case Hardened (Field-Tested)", nid: "176097442" }, //154
  { name: "★ Survival Knife | Case Hardened (Well-Worn)", nid: "176097555" }, //155
  { name: "★ Survival Knife | Case Hardened (Battle-Scarred)", nid: "176097416" }, //156
  { name: "★ StatTrak™ Survival Knife | Case Hardened (Factory New)", nid: "176102496" }, //157
  { name: "★ StatTrak™ Survival Knife | Case Hardened (Minimal Wear)", nid: "176097814" }, //158
  { name: "★ StatTrak™ Survival Knife | Case Hardened (Field-Tested)", nid: "176097897" }, //159
  { name: "★ Karambit | Case Hardened (Factory New)", nid: "1322592" }, //160
  { name: "★ Karambit | Case Hardened (Minimal Wear)", nid: "1355701" }, //161
  { name: "★ Karambit | Case Hardened (Field-Tested)", nid: "1321684" }, //162
  { name: "★ Karambit | Case Hardened (Well-Worn)", nid: "1332749" }, //163
  { name: "★ Karambit | Case Hardened (Battle-Scarred)", nid: "1338769" }, //164
  { name: "★ StatTrak™ Karambit | Case Hardened (Factory New)", nid: "11122142" }, //165
  { name: "★ StatTrak™ Karambit | Case Hardened (Minimal Wear)", nid: "9846435" }, //166
  { name: "★ StatTrak™ Karambit | Case Hardened (Field-Tested)", nid: "10097077" }, //167
  { name: "★ Flip Knife | Marble Fade (Factory New)", nid: "29213035" }, //168
  { name: "★ Flip Knife | Marble Fade (Minimal Wear)", nid: "30357542" }, //169
  { name: "★ Flip Knife | Marble Fade (Field-Tested)", nid: "undefined" }, //170
  { name: "★ Flip Knife | Marble Fade (Well-Worn)", nid: "undefined" }, //171
  { name: "★ Flip Knife | Marble Fade (Battle-Scarred)", nid: "undefined" }, //172
  { name: "★ StatTrak™ Flip Knife | Marble Fade (Factory New)", nid: "30704363" }, //173
  { name: "★ StatTrak™ Flip Knife | Marble Fade (Minimal Wear)", nid: "47756728" }, //174
  { name: "★ StatTrak™ Flip Knife | Marble Fade (Field-Tested)", nid: "undefined" }, //175
  { name: "★ Stiletto Knife | Case Hardened (Factory New)", nid: "176003464" }, //176
  { name: "★ Stiletto Knife | Case Hardened (Minimal Wear)", nid: "176001343" }, //177
  { name: "★ Stiletto Knife | Case Hardened (Field-Tested)", nid: "176000004" }, //178
  { name: "★ Stiletto Knife | Case Hardened (Well-Worn)", nid: "176000252" }, //179
  { name: "★ Stiletto Knife | Case Hardened (Battle-Scarred)", nid: "176000594" }, //180
  { name: "★ StatTrak™ Stiletto Knife | Case Hardened (Factory New)", nid: "176005925" }, //181
  { name: "★ StatTrak™ Stiletto Knife | Case Hardened (Minimal Wear)", nid: "176001928" }, //182
  { name: "★ StatTrak™ Stiletto Knife | Case Hardened (Field-Tested)", nid: "176006159" }, //183
  { name: "★ Karambit | Marble Fade (Factory New)", nid: "29285555" }, //184
  { name: "★ Karambit | Marble Fade (Minimal Wear)", nid: "29669714" }, //185
  { name: "★ Karambit | Marble Fade (Field-Tested)", nid: "undefined" }, //186
  { name: "★ Karambit | Marble Fade (Well-Worn)", nid: "undefined" }, //187
  { name: "★ Karambit | Marble Fade (Battle-Scarred)", nid: "undefined" }, //188
  { name: "★ StatTrak™ Karambit | Marble Fade (Factory New)", nid: "34760463" }, //189
  { name: "★ StatTrak™ Karambit | Marble Fade (Minimal Wear)", nid: "35223870" }, //190
  { name: "★ StatTrak™ Karambit | Marble Fade (Field-Tested)", nid: "undefined" }, //191
  { name: "★ Bayonet | Marble Fade (Factory New)", nid: "29482177" }, //192
  { name: "★ Bayonet | Marble Fade (Minimal Wear)", nid: "31859018" }, //193
  { name: "★ Bayonet | Marble Fade (Field-Tested)", nid: "undefined" }, //194
  { name: "★ Bayonet | Marble Fade (Well-Worn)", nid: "undefined" }, //195
  { name: "★ Bayonet | Marble Fade (Battle-Scarred)", nid: "undefined" }, //196
  { name: "★ StatTrak™ Bayonet | Marble Fade (Factory New)", nid: "30947550" }, //197
  { name: "★ StatTrak™ Bayonet | Marble Fade (Minimal Wear)", nid: "32926677" }, //198
  { name: "★ StatTrak™ Bayonet | Marble Fade (Field-Tested)", nid: "undefined" }, //199
  { name: "★ Paracord Knife | Fade (Factory New)", nid: "176097634" }, //200
  { name: "★ Paracord Knife | Fade (Minimal Wear)", nid: "176100814" }, //201
  { name: "★ Paracord Knife | Fade (Field-Tested)", nid: "undefined" }, //202
  { name: "★ Paracord Knife | Fade (Well-Worn)", nid: "undefined" }, //203
  { name: "★ Paracord Knife | Fade (Battle-Scarred)", nid: "undefined" }, //204
  { name: "★ StatTrak™ Paracord Knife | Fade (Factory New)", nid: "176097738" }, //205
  { name: "★ StatTrak™ Paracord Knife | Fade (Minimal Wear)", nid: "176107543" }, //206
  { name: "★ StatTrak™ Paracord Knife | Fade (Field-Tested)", nid: "undefined" }, //207
  { name: "★ M9 Bayonet | Fade (Factory New)", nid: "1322028" }, //208
  { name: "★ M9 Bayonet | Fade (Minimal Wear)", nid: "1338849" }, //209
  { name: "★ M9 Bayonet | Fade (Field-Tested)", nid: "undefined" }, //210
  { name: "★ M9 Bayonet | Fade (Well-Worn)", nid: "undefined" }, //211
  { name: "★ M9 Bayonet | Fade (Battle-Scarred)", nid: "undefined" }, //212
  { name: "★ StatTrak™ M9 Bayonet | Fade (Factory New)", nid: "9844568" }, //213
  { name: "★ StatTrak™ M9 Bayonet | Fade (Minimal Wear)", nid: "11386830" }, //214
  { name: "★ StatTrak™ M9 Bayonet | Fade (Field-Tested)", nid: "undefined" }, //215
  { name: "MAC-10 | Case Hardened (Factory New)", nid: "176263103" }, //216
  { name: "MAC-10 | Case Hardened (Minimal Wear)", nid: "176262998" }, //217
  { name: "MAC-10 | Case Hardened (Field-Tested)", nid: "176262872" }, //218
  { name: "MAC-10 | Case Hardened (Well-Worn)", nid: "176262746" }, //219
  { name: "MAC-10 | Case Hardened (Battle-Scarred)", nid: "176263114" }, //220
  { name: "★ Specialist Gloves | Crimson Kimono (Factory New)", nid: "175854627" }, //221
  { name: "★ Specialist Gloves | Crimson Kimono (Minimal Wear)", nid: "175854634" }, //222
  { name: "★ Specialist Gloves | Crimson Kimono (Field-Tested)", nid: "175854649" }, //223
  { name: "★ Specialist Gloves | Crimson Kimono (Well-Worn)", nid: "175855146" }, //224
  { name: "★ Specialist Gloves | Crimson Kimono (Battle-Scarred)", nid: "175855222" }, //225
]

module.exports = pattern_config
