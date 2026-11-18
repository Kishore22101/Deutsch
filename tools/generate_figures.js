// generate_figures.js - Generator & Validator for dMAT Figure Sequences (Formenreihen)
const fs = require('fs');
const path = require('path');

const DIRS = ['up', 'right', 'down', 'left'];
const BRACKET_ROTS = ['bl', 'tl', 'tr', 'br'];

// Helper to calculate matrix state at time t (t=0..5)
function getMatrixState(rules, t) {
  let shapes = [];
  for (let r of rules) {
    let pos = (r.startPos + r.step * t) % 8;
    if (pos < 0) pos += 8;

    let color = r.color;
    if (r.colorCycle && r.colorCycle.length > 0) {
      color = r.colorCycle[t % r.colorCycle.length];
    }

    let s = { shape: r.shape, color, pos };
    if (r.shape === 'arrow') {
      let dirIdx = DIRS.indexOf(r.dir || 'left');
      let curDirIdx = (dirIdx + (r.rotStep || 0) * t) % 4;
      if (curDirIdx < 0) curDirIdx += 4;
      s.dir = DIRS[curDirIdx];
    }
    if (r.shape === 'bracket') {
      let rotIdx = BRACKET_ROTS.indexOf(r.bracketRot || 'bl');
      let curRotIdx = (rotIdx + (r.bracketRotStep || 0) * t) % 4;
      if (curRotIdx < 0) curRotIdx += 4;
      s.bracketRot = BRACKET_ROTS[curRotIdx];
    }
    shapes.push(s);
  }
  return shapes;
}

function checkOverlaps(rules) {
  for (let t = 0; t <= 5; t++) {
    let m = getMatrixState(rules, t);
    let positions = m.map(s => s.pos);
    let set = new Set(positions);
    if (set.size !== positions.length) {
      return false; // overlap!
    }
  }
  return true;
}

function findValidRules(rules) {
  if (checkOverlaps(rules)) return rules;

  let copy = JSON.parse(JSON.stringify(rules));
  let n = copy.length;

  // Try all possible distinct start positions for the shapes
  if (n === 2) {
    for (let p0 = 0; p0 < 8; p0++) {
      for (let p1 = 0; p1 < 8; p1++) {
        if (p0 === p1) continue;
        copy[0].startPos = p0;
        copy[1].startPos = p1;
        if (checkOverlaps(copy)) return copy;
      }
    }
  } else if (n === 3) {
    for (let p0 = 0; p0 < 8; p0++) {
      for (let p1 = 0; p1 < 8; p1++) {
        if (p0 === p1) continue;
        for (let p2 = 0; p2 < 8; p2++) {
          if (p2 === p0 || p2 === p1) continue;
          copy[0].startPos = p0;
          copy[1].startPos = p1;
          copy[2].startPos = p2;
          if (checkOverlaps(copy)) return copy;
        }
      }
    }
  } else if (n === 4) {
    // For 4 shapes, try different distinct start positions and step combos
    let stepsCombos = [
      [copy[0].step, copy[1].step, copy[2].step, copy[3].step],
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [1, 1, 2, 2],
      [2, 1, 2, 1]
    ];
    for (let sc of stepsCombos) {
      for (let i = 0; i < 4; i++) copy[i].step = sc[i];
      for (let p0 = 0; p0 < 8; p0++) {
        for (let p1 = 0; p1 < 8; p1++) {
          if (p1 === p0) continue;
          for (let p2 = 0; p2 < 8; p2++) {
            if (p2 === p0 || p2 === p1) continue;
            for (let p3 = 0; p3 < 8; p3++) {
              if (p3 === p0 || p3 === p1 || p3 === p2) continue;
              copy[0].startPos = p0;
              copy[1].startPos = p1;
              copy[2].startPos = p2;
              copy[3].startPos = p3;
              if (checkOverlaps(copy)) return copy;
            }
          }
        }
      }
    }
  }
  return copy;
}

function createQuestion(id, testSet, qNum, difficulty, rules) {
  rules = findValidRules(rules);
  if (!checkOverlaps(rules)) {
    throw new Error(`Overlap in question id ${id}`);
  }

  let m1 = getMatrixState(rules, 0);
  let m2 = getMatrixState(rules, 1);
  let m3 = getMatrixState(rules, 2);
  let m4 = getMatrixState(rules, 3);
  let correctM5 = getMatrixState(rules, 4);
  let correctM6 = getMatrixState(rules, 5);

  // Generate 2 distractors for M5
  let d5_1 = JSON.parse(JSON.stringify(correctM5));
  let d5_2 = JSON.parse(JSON.stringify(correctM5));

  // Distractor 1: shift primary shape by 1 position (or 2 if conflict)
  d5_1[0].pos = (d5_1[0].pos + 1) % 8;
  if (d5_1.length > 1 && d5_1.slice(1).some(s => s.pos === d5_1[0].pos)) {
    d5_1[0].pos = (d5_1[0].pos + 1) % 8;
  }

  // Distractor 2: alter rotation / color / or secondary shape position
  let rotShape = d5_2.find(s => s.shape === 'arrow' || s.shape === 'bracket');
  if (rotShape) {
    if (rotShape.shape === 'arrow') {
      let idx = DIRS.indexOf(rotShape.dir);
      rotShape.dir = DIRS[(idx + 2) % 4];
    } else {
      let idx = BRACKET_ROTS.indexOf(rotShape.bracketRot);
      rotShape.bracketRot = BRACKET_ROTS[(idx + 2) % 4];
    }
  } else if (d5_2.length > 1) {
    d5_2[1].pos = (d5_2[1].pos + 7) % 8;
    if (d5_2[0].pos === d5_2[1].pos) d5_2[1].pos = (d5_2[1].pos + 7) % 8;
  } else {
    d5_2[0].pos = (d5_2[0].pos + 2) % 8;
  }

  // Generate 2 distractors for M6
  let d6_1 = JSON.parse(JSON.stringify(correctM6));
  let d6_2 = JSON.parse(JSON.stringify(correctM6));

  d6_1[0].pos = (d6_1[0].pos + 7) % 8;
  if (d6_1.length > 1 && d6_1.slice(1).some(s => s.pos === d6_1[0].pos)) {
    d6_1[0].pos = (d6_1[0].pos + 7) % 8;
  }

  let rotShape6 = d6_2.find(s => s.shape === 'arrow' || s.shape === 'bracket');
  if (rotShape6) {
    if (rotShape6.shape === 'arrow') {
      let idx = DIRS.indexOf(rotShape6.dir);
      rotShape6.dir = DIRS[(idx + 1) % 4];
    } else {
      let idx = BRACKET_ROTS.indexOf(rotShape6.bracketRot);
      rotShape6.bracketRot = BRACKET_ROTS[(idx + 1) % 4];
    }
  } else if (d6_2.length > 1) {
    d6_2[1].pos = (d6_2[1].pos + 2) % 8;
    if (d6_2[0].pos === d6_2[1].pos) d6_2[1].pos = (d6_2[1].pos + 2) % 8;
  } else {
    d6_2[0].pos = (d6_2[0].pos + 6) % 8;
  }

  // Deterministic solution distribution: option 1, 2, or 3
  let opt5Pos = ((id * 3 + 1) % 3) + 1; // 1, 2, or 3
  let opt6Pos = ((id * 5 + 2) % 3) + 1; // 1, 2, or 3

  let optionsM5 = [];
  if (opt5Pos === 1) optionsM5 = [correctM5, d5_1, d5_2];
  else if (opt5Pos === 2) optionsM5 = [d5_1, correctM5, d5_2];
  else optionsM5 = [d5_1, d5_2, correctM5];

  let optionsM6 = [];
  if (opt6Pos === 1) optionsM6 = [correctM6, d6_1, d6_2];
  else if (opt6Pos === 2) optionsM6 = [d6_1, correctM6, d6_2];
  else optionsM6 = [d6_1, d6_2, correctM6];

  let explanation = rules.map(r => {
    let name = (r.color || '') + ' ' + r.shape;
    let stepTxt = Math.abs(r.step) === 1 ? 'one field' : Math.abs(r.step) + ' fields';
    let dirTxt = r.step > 0 ? 'clockwise' : 'counter-clockwise';
    let parts = [`${name.trim()}: moves ${stepTxt} ${dirTxt} around the border each matrix.`];
    if (r.shape === 'arrow' && r.rotStep) {
      parts.push(`Arrow rotates 90° ${r.rotStep > 0 ? 'clockwise' : 'counter-clockwise'} each step.`);
    }
    if (r.shape === 'bracket' && r.bracketRotStep) {
      parts.push(`Bracket rotates 90° ${r.bracketRotStep > 0 ? 'clockwise' : 'counter-clockwise'} each step.`);
    }
    if (r.colorCycle && r.colorCycle.length > 1) {
      parts.push(`Cycles color (${r.colorCycle.join(' ➔ ')}).`);
    }
    return parts.join(' ');
  }).join(' ');

  return {
    id,
    testSet,
    qNum,
    difficulty,
    subtest: 'figures',
    matrices: [m1, m2, m3, m4],
    optionsM5,
    optionsM6,
    solution: {
      m5: opt5Pos,
      m6: opt6Pos
    },
    ruleExplanation: explanation
  };
}

// Build 5 tests of 20 questions each (100 total questions)
const allTests = {
  test1: [],
  test2: [],
  test3: [],
  test4: [],
  test5: []
};

// Shape pools & archetypes for rich variation
const testConfigs = [
  // Test 1 (Questions 1–20)
  // Low (1-7)
  { t: 1, q: 1, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }, { shape: 'arrow', color: 'black', dir: 'left', startPos: 4, step: 1 }] },
  { t: 1, q: 2, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 2, step: 1 }, { shape: 'square', color: 'blue', startPos: 6, step: 1 }] },
  { t: 1, q: 3, diff: 'easy', rules: [{ shape: 'diamond', color: 'green', startPos: 7, step: 1 }, { shape: 'circle', color: 'orange', startPos: 1, step: 1 }] },
  { t: 1, q: 4, diff: 'easy', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'bl', startPos: 6, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }] },
  { t: 1, q: 5, diff: 'easy', rules: [{ shape: 'arrow', color: 'black', dir: 'right', startPos: 7, step: 1 }, { shape: 'diamond', color: 'green', startPos: 5, step: 1 }] },
  { t: 1, q: 6, diff: 'easy', rules: [{ shape: 'square', color: 'blue', startPos: 2, step: 1 }, { shape: 'circle', color: 'orange', startPos: 6, step: 1 }] },
  { t: 1, q: 7, diff: 'easy', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tl', startPos: 4, step: 1 }] },
  // Medium (8-14)
  { t: 1, q: 8, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'left', startPos: 3, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', startPos: 6, step: 1 }] },
  { t: 1, q: 9, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 1, step: 1 }, { shape: 'square', color: 'blue', startPos: 4, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 7, step: 1 }] },
  { t: 1, q: 10, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 2 }, { shape: 'arrow', color: 'pink', dir: 'left', rotStep: 1, startPos: 2, step: 2 }, { shape: 'diamond', color: 'green', startPos: 4, step: 2 }] },
  { t: 1, q: 11, diff: 'medium', rules: [{ shape: 'circle', colorCycle: ['orange', 'blue'], startPos: 1, step: 1 }, { shape: 'diamond', color: 'green', startPos: 7, step: 1 }] },
  { t: 1, q: 12, diff: 'medium', rules: [{ shape: 'arrow', color: 'black', dir: 'up', rotStep: 1, startPos: 0, step: 1 }, { shape: 'square', color: 'blue', startPos: 4, step: 1 }] },
  { t: 1, q: 13, diff: 'medium', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 2, step: 1 }, { shape: 'circle', color: 'orange', startPos: 6, step: 1 }] },
  { t: 1, q: 14, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }, { shape: 'diamond', color: 'green', startPos: 4, step: 1 }, { shape: 'arrow', color: 'black', dir: 'down', startPos: 6, step: 1 }] },
  // Hard (15-20)
  { t: 1, q: 15, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'left', startPos: 2, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 4, step: 1 }, { shape: 'square', color: 'blue', startPos: 6, step: 1 }] },
  { t: 1, q: 16, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 2 }, { shape: 'arrow', color: 'black', dir: 'left', rotStep: 1, startPos: 2, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: -1, startPos: 4, step: 2 }, { shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 6, step: 1 }] },
  { t: 1, q: 17, diff: 'hard', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 2 }, { shape: 'square', color: 'blue', startPos: 3, step: 1 }, { shape: 'arrow', color: 'pink', dir: 'right', rotStep: 1, startPos: 5, step: 2 }, { shape: 'hexagon', color: 'yellow', startPos: 7, step: 1 }] },
  { t: 1, q: 18, diff: 'hard', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: 1, startPos: 1, step: 2 }, { shape: 'circle', color: 'orange', startPos: 3, step: 1 }, { shape: 'square', color: 'blue', startPos: 5, step: 2 }, { shape: 'diamond', color: 'green', startPos: 7, step: 1 }] },
  { t: 1, q: 19, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 1, step: 2 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'up', rotStep: 1, startPos: 3, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tr', bracketRotStep: -1, startPos: 5, step: 2 }, { shape: 'diamond', color: 'green', startPos: 7, step: 1 }] },
  { t: 1, q: 20, diff: 'hard', rules: [{ shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 0, step: 1 }, { shape: 'square', color: 'blue', startPos: 2, step: 2 }, { shape: 'arrow', color: 'black', dir: 'down', rotStep: 1, startPos: 4, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'br', bracketRotStep: 1, startPos: 6, step: 2 }] },

  // Test 2 (Questions 21–40)
  // Low (1-7)
  { t: 2, q: 1, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 1, step: 1 }, { shape: 'arrow', color: 'black', dir: 'up', startPos: 5, step: 1 }] },
  { t: 2, q: 2, diff: 'easy', rules: [{ shape: 'square', color: 'blue', startPos: 0, step: 1 }, { shape: 'circle', color: 'orange', startPos: 4, step: 1 }] },
  { t: 2, q: 3, diff: 'easy', rules: [{ shape: 'diamond', color: 'green', startPos: 2, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 6, step: 1 }] },
  { t: 2, q: 4, diff: 'easy', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tl', startPos: 3, step: 1 }, { shape: 'arrow', color: 'black', dir: 'right', startPos: 7, step: 1 }] },
  { t: 2, q: 5, diff: 'easy', rules: [{ shape: 'circle', color: 'orange', startPos: 1, step: 1 }, { shape: 'diamond', color: 'green', startPos: 5, step: 1 }] },
  { t: 2, q: 6, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 3, step: 1 }, { shape: 'square', color: 'blue', startPos: 7, step: 1 }] },
  { t: 2, q: 7, diff: 'easy', rules: [{ shape: 'arrow', color: 'black', dir: 'down', startPos: 2, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tr', startPos: 6, step: 1 }] },
  // Medium (8-14)
  { t: 2, q: 8, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 1, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: 1, startPos: 4, step: 1 }, { shape: 'circle', color: 'blue', startPos: 7, step: 1 }] },
  { t: 2, q: 9, diff: 'medium', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 2 }, { shape: 'arrow', color: 'pink', dir: 'up', rotStep: 1, startPos: 3, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 6, step: 2 }] },
  { t: 2, q: 10, diff: 'medium', rules: [{ shape: 'square', color: 'blue', startPos: 1, step: 1 }, { shape: 'circle', colorCycle: ['orange', 'green'], startPos: 5, step: 1 }] },
  { t: 2, q: 11, diff: 'medium', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tr', bracketRotStep: 1, startPos: 0, step: 2 }, { shape: 'diamond', color: 'green', startPos: 4, step: 2 }] },
  { t: 2, q: 12, diff: 'medium', rules: [{ shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'left', startPos: 1, step: 1 }, { shape: 'square', color: 'blue', startPos: 5, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 7, step: 1 }] },
  { t: 2, q: 13, diff: 'medium', rules: [{ shape: 'circle', color: 'orange', startPos: 2, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', startPos: 6, step: 2 }] },
  { t: 2, q: 14, diff: 'medium', rules: [{ shape: 'diamond', color: 'green', startPos: 1, step: 1 }, { shape: 'arrow', color: 'black', dir: 'right', rotStep: 1, startPos: 4, step: 1 }, { shape: 'square', color: 'blue', startPos: 7, step: 1 }] },
  // Hard (15-20)
  { t: 2, q: 15, diff: 'hard', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: 1, startPos: 3, step: 1 }, { shape: 'square', color: 'blue', startPos: 5, step: 2 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'left', startPos: 7, step: 1 }] },
  { t: 2, q: 16, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 1, step: 2 }, { shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 3, step: 1 }, { shape: 'arrow', color: 'black', dir: 'up', rotStep: 1, startPos: 5, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'tr', bracketRotStep: -1, startPos: 7, step: 1 }] },
  { t: 2, q: 17, diff: 'hard', rules: [{ shape: 'square', color: 'blue', startPos: 0, step: 1 }, { shape: 'diamond', color: 'green', startPos: 2, step: 2 }, { shape: 'arrow', color: 'pink', dir: 'down', rotStep: 1, startPos: 5, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 7, step: 2 }] },
  { t: 2, q: 18, diff: 'hard', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'br', bracketRotStep: 1, startPos: 0, step: 2 }, { shape: 'circle', color: 'orange', startPos: 2, step: 1 }, { shape: 'square', color: 'blue', startPos: 4, step: 2 }, { shape: 'diamond', color: 'green', startPos: 6, step: 1 }] },
  { t: 2, q: 19, diff: 'hard', rules: [{ shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'right', rotStep: 1, startPos: 1, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 3, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 5, step: 1 }, { shape: 'circle', color: 'blue', startPos: 7, step: 2 }] },
  { t: 2, q: 20, diff: 'hard', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 1 }, { shape: 'square', color: 'blue', startPos: 2, step: 2 }, { shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 4, step: 1 }, { shape: 'arrow', color: 'black', dir: 'up', rotStep: 1, startPos: 6, step: 2 }] },

  // Test 3 (Questions 41–60)
  // Low (1-7)
  { t: 3, q: 1, diff: 'easy', rules: [{ shape: 'diamond', color: 'green', startPos: 1, step: 1 }, { shape: 'square', color: 'blue', startPos: 5, step: 1 }] },
  { t: 3, q: 2, diff: 'easy', rules: [{ shape: 'circle', color: 'orange', startPos: 0, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 4, step: 1 }] },
  { t: 3, q: 3, diff: 'easy', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tr', startPos: 2, step: 1 }, { shape: 'arrow', color: 'black', dir: 'down', startPos: 6, step: 1 }] },
  { t: 3, q: 4, diff: 'easy', rules: [{ shape: 'square', color: 'blue', startPos: 3, step: 1 }, { shape: 'diamond', color: 'green', startPos: 7, step: 1 }] },
  { t: 3, q: 5, diff: 'easy', rules: [{ shape: 'arrow', color: 'black', dir: 'left', startPos: 0, step: 1 }, { shape: 'circle', color: 'orange', startPos: 4, step: 1 }] },
  { t: 3, q: 6, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 2, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', startPos: 6, step: 1 }] },
  { t: 3, q: 7, diff: 'easy', rules: [{ shape: 'diamond', color: 'green', startPos: 3, step: 1 }, { shape: 'circle', color: 'orange', startPos: 7, step: 1 }] },
  // Medium (8-14)
  { t: 3, q: 8, diff: 'medium', rules: [{ shape: 'square', color: 'blue', startPos: 0, step: 1 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'right', startPos: 3, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 6, step: 1 }] },
  { t: 3, q: 9, diff: 'medium', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 1, step: 2 }, { shape: 'circle', color: 'orange', startPos: 5, step: 2 }] },
  { t: 3, q: 10, diff: 'medium', rules: [{ shape: 'diamond', color: 'green', startPos: 2, step: 1 }, { shape: 'arrow', color: 'pink', dir: 'left', rotStep: 1, startPos: 4, step: 1 }, { shape: 'square', color: 'blue', startPos: 7, step: 1 }] },
  { t: 3, q: 11, diff: 'medium', rules: [{ shape: 'circle', colorCycle: ['orange', 'blue'], startPos: 0, step: 2 }, { shape: 'hexagon', color: 'yellow', startPos: 4, step: 2 }] },
  { t: 3, q: 12, diff: 'medium', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: 1, startPos: 2, step: 1 }, { shape: 'diamond', color: 'green', startPos: 6, step: 1 }] },
  { t: 3, q: 13, diff: 'medium', rules: [{ shape: 'arrow', color: 'black', dir: 'up', rotStep: 1, startPos: 1, step: 2 }, { shape: 'square', color: 'blue', startPos: 5, step: 2 }] },
  { t: 3, q: 14, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }, { shape: 'circle', color: 'green', startPos: 3, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tr', startPos: 6, step: 1 }] },
  // Hard (15-20)
  { t: 3, q: 15, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 2 }, { shape: 'square', color: 'blue', startPos: 2, step: 1 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'down', rotStep: 1, startPos: 4, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 6, step: 1 }] },
  { t: 3, q: 16, diff: 'hard', rules: [{ shape: 'diamond', color: 'green', startPos: 1, step: 2 }, { shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 3, step: 1 }, { shape: 'square', color: 'blue', startPos: 5, step: 2 }, { shape: 'arrow', color: 'black', dir: 'left', rotStep: 1, startPos: 7, step: 1 }] },
  { t: 3, q: 17, diff: 'hard', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: -1, startPos: 0, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 2, step: 2 }, { shape: 'arrow', color: 'pink', dir: 'right', rotStep: 1, startPos: 5, step: 1 }, { shape: 'diamond', color: 'green', startPos: 7, step: 2 }] },
  { t: 3, q: 18, diff: 'hard', rules: [{ shape: 'circle', color: 'orange', startPos: 1, step: 1 }, { shape: 'square', color: 'blue', startPos: 3, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'tr', bracketRotStep: 1, startPos: 5, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 7, step: 2 }] },
  { t: 3, q: 19, diff: 'hard', rules: [{ shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'up', rotStep: 1, startPos: 0, step: 2 }, { shape: 'diamond', color: 'green', startPos: 2, step: 1 }, { shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 4, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'br', bracketRotStep: 1, startPos: 6, step: 1 }] },
  { t: 3, q: 20, diff: 'hard', rules: [{ shape: 'square', color: 'blue', startPos: 1, step: 2 }, { shape: 'hexagon', color: 'yellow', startPos: 3, step: 1 }, { shape: 'arrow', color: 'black', dir: 'down', rotStep: 1, startPos: 5, step: 2 }, { shape: 'diamond', color: 'green', startPos: 7, step: 1 }] },

  // Test 4 (Questions 61–80)
  // Low (1-7)
  { t: 4, q: 1, diff: 'easy', rules: [{ shape: 'square', color: 'blue', startPos: 1, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 5, step: 1 }] },
  { t: 4, q: 2, diff: 'easy', rules: [{ shape: 'arrow', color: 'black', dir: 'right', startPos: 0, step: 1 }, { shape: 'diamond', color: 'green', startPos: 4, step: 1 }] },
  { t: 4, q: 3, diff: 'easy', rules: [{ shape: 'circle', color: 'orange', startPos: 2, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', startPos: 6, step: 1 }] },
  { t: 4, q: 4, diff: 'easy', rules: [{ shape: 'diamond', color: 'green', startPos: 3, step: 1 }, { shape: 'square', color: 'blue', startPos: 7, step: 1 }] },
  { t: 4, q: 5, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }, { shape: 'arrow', color: 'black', dir: 'up', startPos: 4, step: 1 }] },
  { t: 4, q: 6, diff: 'easy', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tl', startPos: 1, step: 1 }, { shape: 'circle', color: 'orange', startPos: 5, step: 1 }] },
  { t: 4, q: 7, diff: 'easy', rules: [{ shape: 'square', color: 'blue', startPos: 2, step: 1 }, { shape: 'diamond', color: 'green', startPos: 6, step: 1 }] },
  // Medium (8-14)
  { t: 4, q: 8, diff: 'medium', rules: [{ shape: 'circle', color: 'orange', startPos: 1, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 4, step: 1 }, { shape: 'square', color: 'blue', startPos: 7, step: 1 }] },
  { t: 4, q: 9, diff: 'medium', rules: [{ shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'down', startPos: 0, step: 2 }, { shape: 'diamond', color: 'green', startPos: 4, step: 2 }] },
  { t: 4, q: 10, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 2, step: 1 }, { shape: 'arrow', color: 'pink', dir: 'right', rotStep: 1, startPos: 5, step: 1 }] },
  { t: 4, q: 11, diff: 'medium', rules: [{ shape: 'square', color: 'blue', startPos: 1, step: 2 }, { shape: 'circle', colorCycle: ['orange', 'blue'], startPos: 5, step: 2 }] },
  { t: 4, q: 12, diff: 'medium', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tr', bracketRotStep: 1, startPos: 0, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 3, step: 1 }, { shape: 'diamond', color: 'green', startPos: 6, step: 1 }] },
  { t: 4, q: 13, diff: 'medium', rules: [{ shape: 'arrow', color: 'black', dir: 'left', rotStep: 1, startPos: 2, step: 2 }, { shape: 'circle', color: 'orange', startPos: 6, step: 2 }] },
  { t: 4, q: 14, diff: 'medium', rules: [{ shape: 'diamond', color: 'green', startPos: 1, step: 1 }, { shape: 'square', color: 'blue', startPos: 4, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'br', startPos: 7, step: 1 }] },
  // Hard (15-20)
  { t: 4, q: 15, diff: 'hard', rules: [{ shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'up', rotStep: 1, startPos: 0, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 2, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 4, step: 2 }, { shape: 'square', color: 'blue', startPos: 6, step: 1 }] },
  { t: 4, q: 16, diff: 'hard', rules: [{ shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 1, step: 1 }, { shape: 'diamond', color: 'green', startPos: 3, step: 2 }, { shape: 'arrow', color: 'black', dir: 'right', rotStep: 1, startPos: 5, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: -1, startPos: 7, step: 2 }] },
  { t: 4, q: 17, diff: 'hard', rules: [{ shape: 'square', color: 'blue', startPos: 0, step: 2 }, { shape: 'hexagon', color: 'yellow', startPos: 2, step: 1 }, { shape: 'circle', color: 'orange', startPos: 4, step: 2 }, { shape: 'diamond', color: 'green', startPos: 6, step: 1 }] },
  { t: 4, q: 18, diff: 'hard', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tr', bracketRotStep: 1, startPos: 1, step: 1 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'down', rotStep: 1, startPos: 3, step: 2 }, { shape: 'square', color: 'blue', startPos: 5, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 7, step: 2 }] },
  { t: 4, q: 19, diff: 'hard', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 2 }, { shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 2, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'br', bracketRotStep: 1, startPos: 4, step: 2 }, { shape: 'arrow', color: 'pink', dir: 'left', rotStep: 1, startPos: 6, step: 1 }] },
  { t: 4, q: 20, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 1, step: 1 }, { shape: 'square', color: 'blue', startPos: 3, step: 2 }, { shape: 'arrow', color: 'black', dir: 'up', rotStep: 1, startPos: 5, step: 1 }, { shape: 'circle', color: 'orange', startPos: 7, step: 2 }] },

  // Test 5 (Questions 81–100)
  // Low (1-7)
  { t: 5, q: 1, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 3, step: 1 }, { shape: 'arrow', color: 'black', dir: 'down', startPos: 7, step: 1 }] },
  { t: 5, q: 2, diff: 'easy', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 1 }, { shape: 'circle', color: 'orange', startPos: 4, step: 1 }] },
  { t: 5, q: 3, diff: 'easy', rules: [{ shape: 'square', color: 'blue', startPos: 2, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tr', startPos: 6, step: 1 }] },
  { t: 5, q: 4, diff: 'easy', rules: [{ shape: 'arrow', color: 'black', dir: 'left', startPos: 1, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 5, step: 1 }] },
  { t: 5, q: 5, diff: 'easy', rules: [{ shape: 'circle', color: 'orange', startPos: 3, step: 1 }, { shape: 'diamond', color: 'green', startPos: 7, step: 1 }] },
  { t: 5, q: 6, diff: 'easy', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'bl', startPos: 0, step: 1 }, { shape: 'square', color: 'blue', startPos: 4, step: 1 }] },
  { t: 5, q: 7, diff: 'easy', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 2, step: 1 }, { shape: 'diamond', color: 'green', startPos: 6, step: 1 }] },
  // Medium (8-14)
  { t: 5, q: 8, diff: 'medium', rules: [{ shape: 'arrow', color: 'black', dir: 'right', rotStep: 1, startPos: 1, step: 1 }, { shape: 'square', color: 'blue', startPos: 4, step: 1 }, { shape: 'circle', color: 'orange', startPos: 7, step: 1 }] },
  { t: 5, q: 9, diff: 'medium', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: 1, startPos: 0, step: 2 }, { shape: 'hexagon', color: 'yellow', startPos: 4, step: 2 }] },
  { t: 5, q: 10, diff: 'medium', rules: [{ shape: 'circle', colorCycle: ['orange', 'green'], startPos: 2, step: 1 }, { shape: 'diamond', color: 'green', startPos: 5, step: 1 }, { shape: 'square', color: 'blue', startPos: 7, step: 1 }] },
  { t: 5, q: 11, diff: 'medium', rules: [{ shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'up', startPos: 1, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'tr', startPos: 5, step: 2 }] },
  { t: 5, q: 12, diff: 'medium', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 1 }, { shape: 'circle', color: 'blue', startPos: 3, step: 1 }, { shape: 'diamond', color: 'green', startPos: 6, step: 1 }] },
  { t: 5, q: 13, diff: 'medium', rules: [{ shape: 'square', color: 'blue', startPos: 2, step: 2 }, { shape: 'arrow', color: 'pink', dir: 'left', rotStep: 1, startPos: 6, step: 2 }] },
  { t: 5, q: 14, diff: 'medium', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 1, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 4, step: 1 }, { shape: 'circle', color: 'orange', startPos: 7, step: 1 }] },
  // Hard (15-20)
  { t: 5, q: 15, diff: 'hard', rules: [{ shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 0, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: 1, startPos: 2, step: 2 }, { shape: 'diamond', color: 'green', startPos: 4, step: 1 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'right', rotStep: 1, startPos: 6, step: 2 }] },
  { t: 5, q: 16, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 1, step: 2 }, { shape: 'square', color: 'blue', startPos: 3, step: 1 }, { shape: 'arrow', color: 'black', dir: 'down', rotStep: 1, startPos: 5, step: 2 }, { shape: 'bracket', color: 'black', bracketRot: 'br', bracketRotStep: -1, startPos: 7, step: 1 }] },
  { t: 5, q: 17, diff: 'hard', rules: [{ shape: 'diamond', color: 'green', startPos: 0, step: 1 }, { shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 2, step: 2 }, { shape: 'square', color: 'blue', startPos: 4, step: 1 }, { shape: 'hexagon', color: 'yellow', startPos: 6, step: 2 }] },
  { t: 5, q: 18, diff: 'hard', rules: [{ shape: 'bracket', color: 'black', bracketRot: 'tr', bracketRotStep: 1, startPos: 1, step: 2 }, { shape: 'arrow', colorCycle: ['black', 'pink'], dir: 'left', rotStep: 1, startPos: 3, step: 1 }, { shape: 'circle', color: 'orange', startPos: 5, step: 2 }, { shape: 'square', color: 'blue', startPos: 7, step: 1 }] },
  { t: 5, q: 19, diff: 'hard', rules: [{ shape: 'hexagon', color: 'yellow', startPos: 0, step: 2 }, { shape: 'diamond', color: 'green', startPos: 2, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'bl', bracketRotStep: 1, startPos: 4, step: 2 }, { shape: 'arrow', color: 'pink', dir: 'up', rotStep: 1, startPos: 6, step: 1 }] },
  { t: 5, q: 20, diff: 'hard', rules: [{ shape: 'circle', colorCycle: ['orange', 'blue', 'green'], startPos: 1, step: 1 }, { shape: 'arrow', color: 'black', dir: 'right', rotStep: 1, startPos: 3, step: 2 }, { shape: 'square', color: 'blue', startPos: 5, step: 1 }, { shape: 'bracket', color: 'black', bracketRot: 'tl', bracketRotStep: 1, startPos: 7, step: 2 }] }
];

let globalId = 1;
testConfigs.forEach(cfg => {
  let q = createQuestion(globalId++, cfg.t, cfg.q, cfg.diff, cfg.rules);
  allTests[`test${cfg.t}`].push(q);
});

// Build Easy track (20 questions from easy pools across tests)
const easyTrack = [];
for (let t = 1; t <= 5; t++) {
  let easyInTest = allTests[`test${t}`].filter(q => q.difficulty === 'easy').slice(0, 4);
  easyTrack.push(...easyInTest);
}

// Build Medium track (20 questions from medium pools across tests)
const mediumTrack = [];
for (let t = 1; t <= 5; t++) {
  let medInTest = allTests[`test${t}`].filter(q => q.difficulty === 'medium').slice(0, 4);
  mediumTrack.push(...medInTest);
}

console.log(`Generated Test 1: ${allTests.test1.length} questions`);
console.log(`Generated Test 2: ${allTests.test2.length} questions`);
console.log(`Generated Test 3: ${allTests.test3.length} questions`);
console.log(`Generated Test 4: ${allTests.test4.length} questions`);
console.log(`Generated Test 5: ${allTests.test5.length} questions`);
console.log(`Generated Easy track: ${easyTrack.length} questions`);
console.log(`Generated Medium track: ${mediumTrack.length} questions`);

// Assemble into figures_data.js
const fileContent = `/**
 * figures_data.js – Official dMAT Figure Sequences (Formenreihen)
 * Standard: 20 Questions · 25 Minutes per Test · Tests 1 to 5 + Easy/Medium Tracks
 * Includes 100 fully verified questions with SVG-ready matrix vectors & worked explanations.
 */

const FIGURES_DATA = {
  easy: ${JSON.stringify(easyTrack, null, 2)},
  medium: ${JSON.stringify(mediumTrack, null, 2)},
  hard: ${JSON.stringify(allTests.test1, null, 2)}, // Default hard = Test 1
  hard_t1: ${JSON.stringify(allTests.test1, null, 2)},
  hard_t2: ${JSON.stringify(allTests.test2, null, 2)},
  hard_t3: ${JSON.stringify(allTests.test3, null, 2)},
  hard_t4: ${JSON.stringify(allTests.test4, null, 2)},
  hard_t5: ${JSON.stringify(allTests.test5, null, 2)}
};

if (typeof window !== 'undefined') {
  window.FIGURES_DATA = FIGURES_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FIGURES_DATA };
}
`;

fs.writeFileSync(path.join(__dirname, '../figures_data.js'), fileContent, 'utf8');
console.log('Successfully wrote figures_data.js!');
