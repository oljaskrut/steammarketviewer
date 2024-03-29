import { ALL } from "../auxiliary/constants"
import { subConfigsPTRN } from "./subConfigsPTRN"

function c(i: number, j: number) {
	return { ...subConfigsPTRN[i], name: subConfigsPTRN[i].name + ALL[j] }
}

export const ConfigsPTRN = [
	c(0, 0), //0
	c(0, 1), //1
	c(0, 2), //2
	c(0, 3), //3
	c(0, 4), //4
	c(1, 0), //5
	c(1, 1), //6
	c(1, 2), //7
	c(2, 0), //8
	c(2, 1), //9
	c(2, 2), //10
	c(2, 3), //11
	c(2, 4), //12
	c(3, 0), //13
	c(3, 1), //14
	c(3, 2), //15
	c(4, 0), //16
	c(4, 1), //17
	c(4, 2), //18
	c(4, 3), //19
	c(4, 4), //20
	c(5, 0), //21
	c(5, 1), //22
	c(5, 2), //23
	c(6, 0), //24
	c(6, 1), //25
	c(6, 2), //26
	c(6, 3), //27
	c(6, 4), //28
	c(7, 0), //29
	c(7, 1), //30
	c(7, 2), //31
	c(8, 0), //32
	c(8, 1), //33
	c(8, 2), //34
	c(8, 3), //35
	c(8, 4), //36
	c(9, 0), //37
	c(9, 1), //38
	c(9, 2), //39
	c(10, 0), //40
	c(10, 1), //41
	c(10, 2), //42
	c(10, 3), //43
	c(10, 4), //44
	c(11, 0), //45
	c(11, 1), //46
	c(11, 2), //47
	c(12, 0), //48
	c(12, 1), //49
	c(12, 2), //50
	c(12, 3), //51
	c(12, 4), //52
	c(13, 0), //53
	c(13, 1), //54
	c(13, 2), //55
	c(14, 0), //56
	c(14, 1), //57
	c(14, 2), //58
	c(14, 3), //59
	c(14, 4), //60
	c(15, 0), //61
	c(15, 1), //62
	c(15, 2), //63
	c(16, 0), //64
	c(16, 1), //65
	c(16, 2), //66
	c(16, 3), //67
	c(16, 4), //68
	c(17, 0), //69
	c(17, 1), //70
	c(17, 2), //71
	c(18, 0), //72
	c(18, 1), //73
	c(18, 2), //74
	c(18, 3), //75
	c(18, 4), //76
	c(19, 0), //77
	c(19, 1), //78
	c(19, 2), //79
	c(20, 0), //80
	c(20, 1), //81
	c(20, 2), //82
	c(20, 3), //83
	c(20, 4), //84
	c(21, 0), //85
	c(21, 1), //86
	c(21, 2), //87
	c(22, 0), //88
	c(22, 1), //89
	c(22, 2), //90
	c(22, 3), //91
	c(22, 4), //92
	c(23, 0), //93
	c(23, 1), //94
	c(23, 2), //95
	c(24, 0), //96
	c(24, 1), //97
	c(24, 2), //98
	c(24, 3), //99
	c(24, 4), //100
	c(25, 0), //101
	c(25, 1), //102
	c(25, 2), //103
	c(26, 0), //104
	c(26, 1), //105
	c(26, 2), //106
	c(26, 3), //107
	c(26, 4), //108
	c(27, 0), //109
	c(27, 1), //110
	c(27, 2), //111
	c(28, 0), //112
	c(28, 1), //113
	c(28, 2), //114
	c(28, 3), //115
	c(28, 4), //116
	c(29, 0), //117
	c(29, 1), //118
	c(29, 2), //119
	c(30, 0), //120
	c(30, 1), //121
	c(30, 2), //122
	c(30, 3), //123
	c(30, 4), //124
	c(31, 0), //125
	c(31, 1), //126
	c(31, 2), //127
	c(32, 0), //128
	c(32, 1), //129
	c(32, 2), //130
	c(32, 3), //131
	c(32, 4), //132
	c(33, 0), //133
	c(33, 1), //134
	c(33, 2), //135
	c(34, 0), //136
	c(34, 1), //137
	c(34, 2), //138
	c(34, 3), //139
	c(34, 4), //140
	c(35, 0), //141
	c(35, 1), //142
	c(35, 2), //143
	c(36, 0), //144
	c(36, 1), //145
	c(36, 2), //146
	c(36, 3), //147
	c(36, 4), //148
	c(37, 0), //149
	c(37, 1), //150
	c(37, 2), //151
	c(38, 0), //152
	c(38, 1), //153
	c(38, 2), //154
	c(38, 3), //155
	c(38, 4), //156
	c(39, 0), //157
	c(39, 1), //158
	c(39, 2), //159
	c(40, 0), //160
	c(40, 1), //161
	c(40, 2), //162
	c(40, 3), //163
	c(40, 4), //164
	c(41, 0), //165
	c(41, 1), //166
	c(41, 2), //167
	c(42, 0), //168
	c(42, 1), //169
	c(42, 2), //170
	c(42, 3), //171
	c(42, 4), //172
	c(43, 0), //173
	c(43, 1), //174
	c(43, 2), //175
	c(44, 0), //176
	c(44, 1), //177
	c(44, 2), //178
	c(44, 3), //179
	c(44, 4), //180
	c(45, 0), //181
	c(45, 1), //182
	c(45, 2), //183
	c(46, 0), //184
	c(46, 1), //185
	c(46, 2), //186
	c(46, 3), //187
	c(46, 4), //188
	c(47, 0), //189
	c(47, 1), //190
	c(47, 2), //191
	c(48, 0), //192
	c(48, 1), //193
	c(48, 2), //194
	c(48, 3), //195
	c(48, 4), //196
	c(49, 0), //197
	c(49, 1), //198
	c(49, 2), //199
	c(50, 0), //200
	c(50, 1), //201
	c(50, 2), //202
	c(50, 3), //203
	c(50, 4), //204
	c(51, 0), //205
	c(51, 1), //206
	c(51, 2), //207
	c(52, 0), //208
	c(52, 1), //209
	c(52, 2), //210
	c(52, 3), //211
	c(52, 4), //212
	c(53, 0), //213
	c(53, 1), //214
	c(53, 2), //215
	c(54, 0), //216
	c(54, 1), //217
	c(54, 2), //218
	c(54, 3), //219
	c(54, 4), //220
	c(55, 0), //221
	c(55, 1), //222
	c(55, 2), //223
	c(55, 3), //224
	c(55, 4), //225
]
