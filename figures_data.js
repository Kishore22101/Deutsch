/**
 * figures_data.js – Official dMAT Figure Sequences (Formenreihen)
 * Standard: 20 Questions · 25 Minutes per Test · Tests 1 to 5 + Easy/Medium Tracks
 * Includes 100 fully verified questions with SVG-ready matrix vectors & worked explanations.
 */

const FIGURES_DATA = {
  easy: [
  {
    "id": 1,
    "testSet": 1,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 2,
    "testSet": 1,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 3,
    "testSet": 1,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 4,
    "testSet": 1,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 21,
    "testSet": 2,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 22,
    "testSet": 2,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 23,
    "testSet": 2,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 24,
    "testSet": 2,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 41,
    "testSet": 3,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 42,
    "testSet": 3,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 43,
    "testSet": 3,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 44,
    "testSet": 3,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 61,
    "testSet": 4,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 62,
    "testSet": 4,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 63,
    "testSet": 4,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 64,
    "testSet": 4,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 81,
    "testSet": 5,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "up"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 82,
    "testSet": 5,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 83,
    "testSet": 5,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 84,
    "testSet": 5,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  }
],
  medium: [
  {
    "id": 8,
    "testSet": 1,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 9,
    "testSet": 1,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  },
  {
    "id": 10,
    "testSet": 1,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves 2 fields clockwise around the border each matrix. pink arrow: moves 2 fields clockwise around the border each matrix. Arrow rotates 90° clockwise each step. green diamond: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 11,
    "testSet": 1,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue). green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 28,
    "testSet": 2,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 29,
    "testSet": 2,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves 2 fields clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. yellow hexagon: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 30,
    "testSet": 2,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ green)."
  },
  {
    "id": 31,
    "testSet": 2,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves 2 fields clockwise around the border each matrix. Bracket rotates 90° clockwise each step. green diamond: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 48,
    "testSet": 3,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 49,
    "testSet": 3,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves 2 fields clockwise around the border each matrix. Bracket rotates 90° clockwise each step. orange circle: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 50,
    "testSet": 3,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 51,
    "testSet": 3,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "circle: moves 2 fields clockwise around the border each matrix. Cycles color (orange ➔ blue). yellow hexagon: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 68,
    "testSet": 4,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 69,
    "testSet": 4,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "arrow: moves 2 fields clockwise around the border each matrix. Cycles color (black ➔ pink). green diamond: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 70,
    "testSet": 4,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "left"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step."
  },
  {
    "id": 71,
    "testSet": 4,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "blue square: moves 2 fields clockwise around the border each matrix. circle: moves 2 fields clockwise around the border each matrix. Cycles color (orange ➔ blue)."
  },
  {
    "id": 88,
    "testSet": 5,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 89,
    "testSet": 5,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black bracket: moves 2 fields clockwise around the border each matrix. Bracket rotates 90° clockwise each step. yellow hexagon: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 90,
    "testSet": 5,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ green). green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 91,
    "testSet": 5,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "arrow: moves 2 fields clockwise around the border each matrix. Cycles color (black ➔ pink). black bracket: moves 2 fields clockwise around the border each matrix."
  }
],
  hard: [
  {
    "id": 1,
    "testSet": 1,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 2,
    "testSet": 1,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 3,
    "testSet": 1,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 4,
    "testSet": 1,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 5,
    "testSet": 1,
    "qNum": 5,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 6,
    "testSet": 1,
    "qNum": 6,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 7,
    "testSet": 1,
    "qNum": 7,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 8,
    "testSet": 1,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 9,
    "testSet": 1,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  },
  {
    "id": 10,
    "testSet": 1,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves 2 fields clockwise around the border each matrix. pink arrow: moves 2 fields clockwise around the border each matrix. Arrow rotates 90° clockwise each step. green diamond: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 11,
    "testSet": 1,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue). green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 12,
    "testSet": 1,
    "qNum": 12,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 13,
    "testSet": 1,
    "qNum": 13,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 14,
    "testSet": 1,
    "qNum": 14,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 15,
    "testSet": 1,
    "qNum": 15,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 16,
    "testSet": 1,
    "qNum": 16,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green)."
  },
  {
    "id": 17,
    "testSet": 1,
    "qNum": 17,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 18,
    "testSet": 1,
    "qNum": 18,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. orange circle: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 19,
    "testSet": 1,
    "qNum": 19,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 20,
    "testSet": 1,
    "qNum": 20,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). blue square: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  }
], // Default hard = Test 1
  hard_t1: [
  {
    "id": 1,
    "testSet": 1,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 2,
    "testSet": 1,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 3,
    "testSet": 1,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 4,
    "testSet": 1,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 5,
    "testSet": 1,
    "qNum": 5,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 6,
    "testSet": 1,
    "qNum": 6,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 7,
    "testSet": 1,
    "qNum": 7,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 8,
    "testSet": 1,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 9,
    "testSet": 1,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  },
  {
    "id": 10,
    "testSet": 1,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves 2 fields clockwise around the border each matrix. pink arrow: moves 2 fields clockwise around the border each matrix. Arrow rotates 90° clockwise each step. green diamond: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 11,
    "testSet": 1,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue). green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 12,
    "testSet": 1,
    "qNum": 12,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 13,
    "testSet": 1,
    "qNum": 13,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 14,
    "testSet": 1,
    "qNum": 14,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 15,
    "testSet": 1,
    "qNum": 15,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 16,
    "testSet": 1,
    "qNum": 16,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green)."
  },
  {
    "id": 17,
    "testSet": 1,
    "qNum": 17,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 18,
    "testSet": 1,
    "qNum": 18,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. orange circle: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 19,
    "testSet": 1,
    "qNum": 19,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 20,
    "testSet": 1,
    "qNum": 20,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). blue square: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  }
],
  hard_t2: [
  {
    "id": 21,
    "testSet": 2,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 22,
    "testSet": 2,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 23,
    "testSet": 2,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 24,
    "testSet": 2,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 25,
    "testSet": 2,
    "qNum": 5,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 26,
    "testSet": 2,
    "qNum": 6,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 27,
    "testSet": 2,
    "qNum": 7,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 28,
    "testSet": 2,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 29,
    "testSet": 2,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves 2 fields clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. yellow hexagon: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 30,
    "testSet": 2,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ green)."
  },
  {
    "id": 31,
    "testSet": 2,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves 2 fields clockwise around the border each matrix. Bracket rotates 90° clockwise each step. green diamond: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 32,
    "testSet": 2,
    "qNum": 12,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). blue square: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 33,
    "testSet": 2,
    "qNum": 13,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "orange circle: moves 2 fields clockwise around the border each matrix. black bracket: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 34,
    "testSet": 2,
    "qNum": 14,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 35,
    "testSet": 2,
    "qNum": 15,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink)."
  },
  {
    "id": 36,
    "testSet": 2,
    "qNum": 16,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step."
  },
  {
    "id": 37,
    "testSet": 2,
    "qNum": 17,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 38,
    "testSet": 2,
    "qNum": 18,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. orange circle: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 39,
    "testSet": 2,
    "qNum": 19,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). yellow hexagon: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 40,
    "testSet": 2,
    "qNum": 20,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step."
  }
],
  hard_t3: [
  {
    "id": 41,
    "testSet": 3,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 42,
    "testSet": 3,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 43,
    "testSet": 3,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 44,
    "testSet": 3,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 45,
    "testSet": 3,
    "qNum": 5,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 46,
    "testSet": 3,
    "qNum": 6,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 47,
    "testSet": 3,
    "qNum": 7,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 48,
    "testSet": 3,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Cycles color (black ➔ pink). yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 49,
    "testSet": 3,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves 2 fields clockwise around the border each matrix. Bracket rotates 90° clockwise each step. orange circle: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 50,
    "testSet": 3,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 51,
    "testSet": 3,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "circle: moves 2 fields clockwise around the border each matrix. Cycles color (orange ➔ blue). yellow hexagon: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 52,
    "testSet": 3,
    "qNum": 12,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 53,
    "testSet": 3,
    "qNum": 13,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black arrow: moves 2 fields clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 54,
    "testSet": 3,
    "qNum": 14,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. green circle: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 55,
    "testSet": 3,
    "qNum": 15,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  },
  {
    "id": 56,
    "testSet": 3,
    "qNum": 16,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). blue square: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step."
  },
  {
    "id": 57,
    "testSet": 3,
    "qNum": 17,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 58,
    "testSet": 3,
    "qNum": 18,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 59,
    "testSet": 3,
    "qNum": 19,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). green diamond: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  },
  {
    "id": 60,
    "testSet": 3,
    "qNum": 20,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. green diamond: moves one field clockwise around the border each matrix."
  }
],
  hard_t4: [
  {
    "id": 61,
    "testSet": 4,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 62,
    "testSet": 4,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 63,
    "testSet": 4,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 64,
    "testSet": 4,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 65,
    "testSet": 4,
    "qNum": 5,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 66,
    "testSet": 4,
    "qNum": 6,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 67,
    "testSet": 4,
    "qNum": 7,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 68,
    "testSet": 4,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 69,
    "testSet": 4,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "arrow: moves 2 fields clockwise around the border each matrix. Cycles color (black ➔ pink). green diamond: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 70,
    "testSet": 4,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "left"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step."
  },
  {
    "id": 71,
    "testSet": 4,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "blue square: moves 2 fields clockwise around the border each matrix. circle: moves 2 fields clockwise around the border each matrix. Cycles color (orange ➔ blue)."
  },
  {
    "id": 72,
    "testSet": 4,
    "qNum": 12,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 73,
    "testSet": 4,
    "qNum": 13,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black arrow: moves 2 fields clockwise around the border each matrix. Arrow rotates 90° clockwise each step. orange circle: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 74,
    "testSet": 4,
    "qNum": 14,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 75,
    "testSet": 4,
    "qNum": 15,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 76,
    "testSet": 4,
    "qNum": 16,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). green diamond: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step."
  },
  {
    "id": 77,
    "testSet": 4,
    "qNum": 17,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 78,
    "testSet": 4,
    "qNum": 18,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). blue square: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 79,
    "testSet": 4,
    "qNum": 19,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "left"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step."
  },
  {
    "id": 80,
    "testSet": 4,
    "qNum": 20,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. orange circle: moves one field clockwise around the border each matrix."
  }
],
  hard_t5: [
  {
    "id": 81,
    "testSet": 5,
    "qNum": 1,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "up"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "down"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix."
  },
  {
    "id": 82,
    "testSet": 5,
    "qNum": 2,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 83,
    "testSet": 5,
    "qNum": 3,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix."
  },
  {
    "id": 84,
    "testSet": 5,
    "qNum": 4,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 85,
    "testSet": 5,
    "qNum": 5,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "orange circle: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 86,
    "testSet": 5,
    "qNum": 6,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 87,
    "testSet": 5,
    "qNum": 7,
    "difficulty": "easy",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 88,
    "testSet": 5,
    "qNum": 8,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 89,
    "testSet": 5,
    "qNum": 9,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black bracket: moves 2 fields clockwise around the border each matrix. Bracket rotates 90° clockwise each step. yellow hexagon: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 90,
    "testSet": 5,
    "qNum": 10,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ green). green diamond: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 91,
    "testSet": 5,
    "qNum": 11,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "arrow: moves 2 fields clockwise around the border each matrix. Cycles color (black ➔ pink). black bracket: moves 2 fields clockwise around the border each matrix."
  },
  {
    "id": 92,
    "testSet": 5,
    "qNum": 12,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue circle: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix."
  },
  {
    "id": 93,
    "testSet": 5,
    "qNum": 13,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "down"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "up"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "blue square: moves 2 fields clockwise around the border each matrix. pink arrow: moves 2 fields clockwise around the border each matrix. Arrow rotates 90° clockwise each step."
  },
  {
    "id": 94,
    "testSet": 5,
    "qNum": 14,
    "difficulty": "medium",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tl"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. yellow hexagon: moves one field clockwise around the border each matrix. orange circle: moves one field clockwise around the border each matrix."
  },
  {
    "id": 95,
    "testSet": 5,
    "qNum": 15,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "right"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "br"
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 7
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "down"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. green diamond: moves one field clockwise around the border each matrix. arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink)."
  },
  {
    "id": 96,
    "testSet": 5,
    "qNum": 16,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "br"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "up"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 7,
          "dir": "left"
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix. black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° counter-clockwise each step."
  },
  {
    "id": 97,
    "testSet": 5,
    "qNum": 17,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 1
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ],
      [
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "circle",
          "color": "green",
          "pos": 0
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "green diamond: moves one field clockwise around the border each matrix. circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). blue square: moves one field clockwise around the border each matrix. yellow hexagon: moves one field clockwise around the border each matrix."
  },
  {
    "id": 98,
    "testSet": 5,
    "qNum": 18,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 2
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 1,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 2,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "right"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 4
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "down"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 5
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 6
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ],
      [
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "up"
        },
        {
          "shape": "circle",
          "color": "orange",
          "pos": 7
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 0
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 1
    },
    "ruleExplanation": "black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. Cycles color (black ➔ pink). orange circle: moves one field clockwise around the border each matrix. blue square: moves one field clockwise around the border each matrix."
  },
  {
    "id": 99,
    "testSet": 5,
    "qNum": 19,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 0
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 1
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 2,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 3,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 1
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 4,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 2
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 5,
          "dir": "down"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 3
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 6,
          "dir": "left"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 6
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 7,
          "dir": "up"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 4
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tr"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        }
      ],
      [
        {
          "shape": "hexagon",
          "color": "yellow",
          "pos": 5
        },
        {
          "shape": "diamond",
          "color": "green",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        },
        {
          "shape": "arrow",
          "color": "pink",
          "pos": 0,
          "dir": "right"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 3
    },
    "ruleExplanation": "yellow hexagon: moves one field clockwise around the border each matrix. green diamond: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step. pink arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step."
  },
  {
    "id": 100,
    "testSet": 5,
    "qNum": 20,
    "difficulty": "hard",
    "subtest": "figures",
    "matrices": [
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 0
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 1,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 2
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 3,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 1
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 2,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 3
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 4,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 2
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 3,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 5,
          "bracketRot": "br"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "orange",
          "pos": 3
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 4,
          "dir": "up"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 5
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 6,
          "bracketRot": "bl"
        }
      ]
    ],
    "optionsM5": [
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "right"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "blue",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 5,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 6
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 7,
          "bracketRot": "tl"
        }
      ]
    ],
    "optionsM6": [
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 4
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "down"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ],
      [
        {
          "shape": "circle",
          "color": "green",
          "pos": 5
        },
        {
          "shape": "arrow",
          "color": "black",
          "pos": 6,
          "dir": "left"
        },
        {
          "shape": "square",
          "color": "blue",
          "pos": 7
        },
        {
          "shape": "bracket",
          "color": "black",
          "pos": 0,
          "bracketRot": "tr"
        }
      ]
    ],
    "solution": {
      "m5": 2,
      "m6": 2
    },
    "ruleExplanation": "circle: moves one field clockwise around the border each matrix. Cycles color (orange ➔ blue ➔ green). black arrow: moves one field clockwise around the border each matrix. Arrow rotates 90° clockwise each step. blue square: moves one field clockwise around the border each matrix. black bracket: moves one field clockwise around the border each matrix. Bracket rotates 90° clockwise each step."
  }
]
};

if (typeof window !== 'undefined') {
  window.FIGURES_DATA = FIGURES_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  FIGURES_DATA.FIGURES_DATA = FIGURES_DATA;
  module.exports = FIGURES_DATA;
}
