const caches = [[], [], []]

const MAXES = [217, 226, 21]
for (let j = 0; j < 3; j++) {
  for (let i = 0; i < MAXES[j]; i++) {
    caches[j].push([])
  }
}

const logs = [[], [], [], []]

module.exports = { caches, logs }
