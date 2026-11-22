// latin_data.js - dMAT Latin Squares Complete Question Bank (20 Sets x 20 Questions = 400 Questions)
// Extracted from official dMAT Practice Pack (15 sets) + 5 Full Exam Simulation Sets
const LATIN_DATA = {
  "easy_t1": [
    {
      "qNum": 1,
      "grid": [
        [
          null,
          "E",
          "D",
          "B",
          "C"
        ],
        [
          "C",
          "B",
          "A",
          null,
          "E"
        ],
        [
          "D",
          "C",
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "E",
          null,
          "D"
        ],
        [
          "E",
          null,
          "C",
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 5 and Column ε: Row contains {C, E} and Column contains {A, C, D, E}, leaving B as the only possible symbol for cell (5, ε)."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "D",
          "?",
          "A",
          "C",
          "E"
        ],
        [
          "A",
          "D",
          null,
          "B",
          null
        ],
        [
          "B",
          "C",
          null,
          "E",
          "A"
        ],
        [
          null,
          null,
          null,
          "D",
          "B"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 1 and Column β: Row contains {A, C, D, E} and Column contains {C, D}, leaving B as the only possible symbol for cell (1, β)."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          "E",
          null,
          null,
          null
        ],
        [
          "E",
          null,
          "A",
          "C",
          "B"
        ],
        [
          "D",
          "B",
          null,
          "A",
          "C"
        ],
        [
          "B",
          null,
          "D",
          "E",
          null
        ],
        [
          "C",
          "A",
          "B",
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {A, B, C} and Column contains {A, C, E}, leaving D as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "A",
          null,
          "D",
          "E",
          "C"
        ],
        [
          null,
          null,
          "B",
          "D",
          "A"
        ],
        [
          "C",
          "D",
          "E",
          "A",
          null
        ],
        [
          "D",
          "A",
          null,
          "B",
          null
        ],
        [
          null,
          "E",
          null,
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {E} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "B",
          "E",
          "C",
          null,
          "D"
        ],
        [
          "A",
          null,
          "B",
          null,
          "C"
        ],
        [
          "E",
          null,
          "A",
          null,
          null
        ],
        [
          "D",
          null,
          "?",
          "C",
          "A"
        ],
        [
          null,
          "A",
          "D",
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 4 and Column γ: Row contains {A, C, D} and Column contains {A, B, C, D}, leaving E as the only possible symbol for cell (4, γ)."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          "C",
          "E",
          "A",
          null
        ],
        [
          "E",
          "B",
          "A",
          "C",
          "?"
        ],
        [
          null,
          "E",
          null,
          "D",
          null
        ],
        [
          "B",
          "A",
          "D",
          "E",
          "C"
        ],
        [
          null,
          null,
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 2 and Column ε: Row contains {A, B, C, E} and Column contains {C}, leaving D as the only possible symbol for cell (2, ε)."
    },
    {
      "qNum": 7,
      "grid": [
        [
          null,
          null,
          "B",
          "D",
          "A"
        ],
        [
          "C",
          "A",
          "D",
          null,
          "?"
        ],
        [
          "B",
          null,
          "C",
          "A",
          "E"
        ],
        [
          "D",
          "E",
          null,
          "B",
          "C"
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 2 and Column ε: Row contains {A, C, D} and Column contains {A, C, E}, leaving B as the only possible symbol for cell (2, ε)."
    },
    {
      "qNum": 8,
      "grid": [
        [
          null,
          null,
          null,
          "E",
          "B"
        ],
        [
          null,
          "B",
          "A",
          "?",
          "C"
        ],
        [
          null,
          "C",
          null,
          "B",
          null
        ],
        [
          "B",
          "A",
          null,
          "C",
          "E"
        ],
        [
          "C",
          "E",
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {A, B, C} and Column contains {B, C, E}, leaving D as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "E",
          "C",
          "D",
          "B",
          "A"
        ],
        [
          null,
          null,
          "C",
          "A",
          null
        ],
        [
          "?",
          "D",
          null,
          "E",
          "B"
        ],
        [
          "A",
          "B",
          "E",
          null,
          null
        ],
        [
          "D",
          "A",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 3 and Column α: Row contains {B, D, E} and Column contains {A, D, E}, leaving C as the only possible symbol for cell (3, α)."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "B",
          "D",
          null,
          null,
          null
        ],
        [
          "C",
          "B",
          null,
          null,
          "A"
        ],
        [
          null,
          "E",
          null,
          "C",
          "B"
        ],
        [
          null,
          "C",
          "A",
          "B",
          "D"
        ],
        [
          "D",
          null,
          "B",
          "E",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column ε: Row contains {B, D, E} and Column contains {A, B, D}, leaving C as the only possible symbol for cell (5, ε)."
    },
    {
      "qNum": 11,
      "grid": [
        [
          null,
          "B",
          "C",
          "E",
          "D"
        ],
        [
          "C",
          "E",
          "B",
          "D",
          "A"
        ],
        [
          null,
          "A",
          "?",
          null,
          null
        ],
        [
          null,
          "D",
          "E",
          null,
          null
        ],
        [
          "D",
          null,
          null,
          "B",
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 3 and Column γ: Row contains {A} and Column contains {B, C, E}, leaving D as the only possible symbol for cell (3, γ)."
    },
    {
      "qNum": 12,
      "grid": [
        [
          "C",
          "?",
          "B",
          "E",
          "D"
        ],
        [
          "A",
          "B",
          "D",
          null,
          "E"
        ],
        [
          "E",
          null,
          null,
          "D",
          "B"
        ],
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "C",
          "B",
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 1 and Column β: Row contains {B, C, D, E} and Column contains {B}, leaving A as the only possible symbol for cell (1, β)."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "A",
          "B",
          null,
          "E",
          "C"
        ],
        [
          null,
          "C",
          "A",
          "D",
          "E"
        ],
        [
          null,
          null,
          "B",
          "A",
          "D"
        ],
        [
          null,
          "A",
          null,
          "C",
          null
        ],
        [
          null,
          "D",
          null,
          "B",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 5 and Column ε: Row contains {B, D} and Column contains {C, D, E}, leaving A as the only possible symbol for cell (5, ε)."
    },
    {
      "qNum": 14,
      "grid": [
        [
          null,
          null,
          "C",
          null,
          "B"
        ],
        [
          "D",
          "E",
          "B",
          null,
          "?"
        ],
        [
          "A",
          null,
          null,
          "E",
          "C"
        ],
        [
          "B",
          null,
          "E",
          "A",
          "D"
        ],
        [
          "C",
          "D",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 2 and Column ε: Row contains {B, D, E} and Column contains {B, C, D}, leaving A as the only possible symbol for cell (2, ε)."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "B",
          "?",
          "C",
          null,
          null
        ],
        [
          "E",
          null,
          null,
          "D",
          "C"
        ],
        [
          "D",
          "E",
          null,
          "C",
          "A"
        ],
        [
          "C",
          "D",
          "E",
          "A",
          null
        ],
        [
          "A",
          "C",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 1 and Column β: Row contains {B, C} and Column contains {C, D, E}, leaving A as the only possible symbol for cell (1, β)."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          null,
          "C",
          "D",
          "E"
        ],
        [
          "D",
          null,
          "A",
          "E",
          "B"
        ],
        [
          "C",
          "E",
          null,
          "A",
          null
        ],
        [
          null,
          null,
          "D",
          "B",
          "C"
        ],
        [
          "B",
          "D",
          null,
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {B, D} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 17,
      "grid": [
        [
          null,
          null,
          "B",
          "E",
          "D"
        ],
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          "C",
          null,
          "D",
          "A",
          "E"
        ],
        [
          "D",
          null,
          "A",
          "?",
          "C"
        ],
        [
          null,
          "A",
          "C",
          "D",
          "B"
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 4 and Column δ: Row contains {A, C, D} and Column contains {A, D, E}, leaving B as the only possible symbol for cell (4, δ)."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "C",
          null,
          null,
          "A",
          "E"
        ],
        [
          null,
          "A",
          null,
          null,
          "D"
        ],
        [
          "A",
          "D",
          "E",
          "B",
          "?"
        ],
        [
          "D",
          null,
          null,
          null,
          "B"
        ],
        [
          "B",
          null,
          "C",
          "D",
          "A"
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 3 and Column ε: Row contains {A, B, D, E} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (3, ε)."
    },
    {
      "qNum": 19,
      "grid": [
        [
          null,
          "E",
          null,
          "D",
          null
        ],
        [
          "B",
          "D",
          null,
          "?",
          "A"
        ],
        [
          "E",
          "C",
          null,
          "A",
          "B"
        ],
        [
          "C",
          null,
          null,
          "E",
          null
        ],
        [
          "D",
          "A",
          "C",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {A, B, D} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          "D",
          "E",
          "B",
          "C"
        ],
        [
          null,
          "E",
          "A",
          "C",
          null
        ],
        [
          "E",
          "C",
          "D",
          "A",
          "?"
        ],
        [
          "C",
          "A",
          null,
          null,
          null
        ],
        [
          "D",
          "B",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 3 and Column ε: Row contains {A, C, D, E} and Column contains {C}, leaving B as the only possible symbol for cell (3, ε)."
    }
  ],
  "easy_t2": [
    {
      "qNum": 1,
      "grid": [
        [
          "C",
          "B",
          "D",
          "E",
          "A"
        ],
        [
          "A",
          null,
          "C",
          null,
          "?"
        ],
        [
          null,
          null,
          "B",
          null,
          "C"
        ],
        [
          "B",
          "A",
          "E",
          null,
          "D"
        ],
        [
          "E",
          null,
          null,
          null,
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 2 and Column ε: Row contains {A, C} and Column contains {A, B, C, D}, leaving E as the only possible symbol for cell (2, ε)."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "A",
          "B",
          "D",
          "E",
          "C"
        ],
        [
          "B",
          "C",
          "A",
          "D",
          null
        ],
        [
          "D",
          null,
          null,
          "C",
          "B"
        ],
        [
          "E",
          "?",
          null,
          null,
          "A"
        ],
        [
          "C",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 4 and Column β: Row contains {A, E} and Column contains {B, C}, leaving D as the only possible symbol for cell (4, β)."
    },
    {
      "qNum": 3,
      "grid": [
        [
          "C",
          "B",
          "D",
          null,
          "A"
        ],
        [
          "D",
          null,
          "B",
          "A",
          "C"
        ],
        [
          "A",
          null,
          null,
          "B",
          null
        ],
        [
          "B",
          null,
          "E",
          "C",
          null
        ],
        [
          "?",
          "C",
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {A, C} and Column contains {A, B, C, D}, leaving E as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "E",
          "B",
          null,
          "D",
          "A"
        ],
        [
          "D",
          "A",
          "E",
          null,
          null
        ],
        [
          "?",
          null,
          "D",
          "A",
          null
        ],
        [
          "C",
          "D",
          "A",
          "E",
          null
        ],
        [
          null,
          null,
          "B",
          "C",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 3 and Column α: Row contains {A, D} and Column contains {C, D, E}, leaving B as the only possible symbol for cell (3, α)."
    },
    {
      "qNum": 5,
      "grid": [
        [
          null,
          "E",
          "A",
          null,
          "?"
        ],
        [
          "C",
          "A",
          null,
          null,
          "B"
        ],
        [
          "D",
          null,
          "E",
          "B",
          "A"
        ],
        [
          "A",
          "B",
          "C",
          null,
          null
        ],
        [
          null,
          null,
          "B",
          "A",
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column ε: Row contains {A, E} and Column contains {A, B, C}, leaving D as the only possible symbol for cell (1, ε)."
    },
    {
      "qNum": 6,
      "grid": [
        [
          "A",
          null,
          "C",
          null,
          "E"
        ],
        [
          "B",
          "C",
          "E",
          null,
          null
        ],
        [
          null,
          "A",
          "B",
          null,
          "D"
        ],
        [
          "D",
          "E",
          null,
          "C",
          "B"
        ],
        [
          "?",
          "B",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {B, C} and Column contains {A, B, D}, leaving E as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "A",
          "C",
          "B",
          "E",
          null
        ],
        [
          null,
          null,
          "A",
          null,
          null
        ],
        [
          null,
          "D",
          "C",
          "B",
          null
        ],
        [
          "B",
          "?",
          null,
          "C",
          "E"
        ],
        [
          null,
          "B",
          "E",
          "A",
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 4 and Column β: Row contains {B, C, E} and Column contains {B, C, D}, leaving A as the only possible symbol for cell (4, β)."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "D",
          "C",
          "E",
          "A",
          "B"
        ],
        [
          "C",
          null,
          "D",
          null,
          "A"
        ],
        [
          null,
          null,
          "B",
          "C",
          "D"
        ],
        [
          "?",
          "A",
          null,
          null,
          "E"
        ],
        [
          "E",
          null,
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 4 and Column α: Row contains {A, E} and Column contains {C, D, E}, leaving B as the only possible symbol for cell (4, α)."
    },
    {
      "qNum": 9,
      "grid": [
        [
          null,
          null,
          "A",
          null,
          "C"
        ],
        [
          null,
          "D",
          "E",
          "B",
          "A"
        ],
        [
          "A",
          "?",
          null,
          "C",
          "E"
        ],
        [
          null,
          null,
          null,
          "A",
          "D"
        ],
        [
          "D",
          "A",
          null,
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 3 and Column β: Row contains {A, C, E} and Column contains {A, D}, leaving B as the only possible symbol for cell (3, β)."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "E",
          "A",
          null,
          "C",
          "B"
        ],
        [
          null,
          null,
          null,
          null,
          "C"
        ],
        [
          "C",
          "D",
          "E",
          "B",
          "?"
        ],
        [
          null,
          "E",
          null,
          "A",
          "D"
        ],
        [
          "A",
          null,
          "B",
          "D",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 3 and Column ε: Row contains {B, C, D, E} and Column contains {B, C, D}, leaving A as the only possible symbol for cell (3, ε)."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "?",
          "C",
          "B",
          "A",
          "E"
        ],
        [
          null,
          "B",
          "E",
          null,
          null
        ],
        [
          "B",
          null,
          "A",
          "C",
          "D"
        ],
        [
          "A",
          "D",
          null,
          "E",
          null
        ],
        [
          "E",
          null,
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column α: Row contains {A, B, C, E} and Column contains {A, B, E}, leaving D as the only possible symbol for cell (1, α)."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          null,
          "D",
          "B",
          "C"
        ],
        [
          "C",
          "B",
          "E",
          null,
          "A"
        ],
        [
          null,
          "E",
          null,
          "?",
          "D"
        ],
        [
          "A",
          null,
          "C",
          "E",
          null
        ],
        [
          null,
          "C",
          null,
          "A",
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 3 and Column δ: Row contains {D, E} and Column contains {A, B, E}, leaving C as the only possible symbol for cell (3, δ)."
    },
    {
      "qNum": 13,
      "grid": [
        [
          null,
          "E",
          "B",
          null,
          null
        ],
        [
          "A",
          null,
          "E",
          "B",
          null
        ],
        [
          "B",
          "C",
          "D",
          "E",
          "A"
        ],
        [
          "E",
          null,
          "C",
          null,
          "B"
        ],
        [
          "D",
          "B",
          "?",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 5 and Column γ: Row contains {B, D} and Column contains {B, C, D, E}, leaving A as the only possible symbol for cell (5, γ)."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "D",
          "A",
          "C",
          "B",
          null
        ],
        [
          null,
          "E",
          "B",
          null,
          null
        ],
        [
          null,
          "D",
          "?",
          null,
          "A"
        ],
        [
          "C",
          "B",
          null,
          null,
          "D"
        ],
        [
          "E",
          "C",
          "D",
          null,
          "B"
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 3 and Column γ: Row contains {A, D} and Column contains {B, C, D}, leaving E as the only possible symbol for cell (3, γ)."
    },
    {
      "qNum": 15,
      "grid": [
        [
          null,
          null,
          "C",
          "A",
          "D"
        ],
        [
          "B",
          "C",
          "A",
          null,
          "E"
        ],
        [
          null,
          null,
          "E",
          null,
          null
        ],
        [
          "D",
          "E",
          "B",
          null,
          null
        ],
        [
          "C",
          "A",
          "D",
          "?",
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {A, B, C, D} and Column contains {A}, leaving E as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          "B",
          "C",
          "A",
          null
        ],
        [
          "D",
          "E",
          null,
          "C",
          "A"
        ],
        [
          null,
          "D",
          null,
          null,
          "C"
        ],
        [
          null,
          null,
          "D",
          "E",
          "?"
        ],
        [
          "B",
          null,
          "A",
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 4 and Column ε: Row contains {D, E} and Column contains {A, C, E}, leaving B as the only possible symbol for cell (4, ε)."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "E",
          null,
          "B",
          "D",
          null
        ],
        [
          "D",
          null,
          "A",
          "C",
          null
        ],
        [
          null,
          "C",
          null,
          null,
          "E"
        ],
        [
          "?",
          null,
          "E",
          "B",
          "A"
        ],
        [
          "A",
          "B",
          "C",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 4 and Column α: Row contains {A, B, E} and Column contains {A, D, E}, leaving C as the only possible symbol for cell (4, α)."
    },
    {
      "qNum": 18,
      "grid": [
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          "B",
          null,
          null,
          null,
          "C"
        ],
        [
          "D",
          null,
          "C",
          null,
          "E"
        ],
        [
          "A",
          "C",
          "B",
          "E",
          "D"
        ],
        [
          "?",
          "D",
          "A",
          "C",
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {A, B, C, D} and Column contains {A, B, D}, leaving E as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "E",
          null,
          null,
          "B",
          null
        ],
        [
          null,
          "A",
          null,
          "D",
          "C"
        ],
        [
          "C",
          null,
          "A",
          "E",
          "D"
        ],
        [
          "A",
          "E",
          "?",
          "C",
          "B"
        ],
        [
          null,
          "C",
          null,
          "A",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 4 and Column γ: Row contains {A, B, C, E} and Column contains {A}, leaving D as the only possible symbol for cell (4, γ)."
    },
    {
      "qNum": 20,
      "grid": [
        [
          "E",
          "C",
          "B",
          null,
          null
        ],
        [
          "C",
          "D",
          "A",
          null,
          null
        ],
        [
          null,
          "B",
          "E",
          null,
          null
        ],
        [
          "B",
          null,
          "C",
          "D",
          null
        ],
        [
          "A",
          "E",
          "?",
          "B",
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 5 and Column γ: Row contains {A, B, C, E} and Column contains {A, B, C, E}, leaving D as the only possible symbol for cell (5, γ)."
    }
  ],
  "easy_t3": [
    {
      "qNum": 1,
      "grid": [
        [
          null,
          "B",
          null,
          "A",
          "E"
        ],
        [
          "B",
          null,
          "E",
          "C",
          "A"
        ],
        [
          "?",
          "C",
          null,
          null,
          "D"
        ],
        [
          "E",
          null,
          "C",
          "D",
          null
        ],
        [
          "D",
          null,
          "A",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 3 and Column α: Row contains {C, D} and Column contains {B, D, E}, leaving A as the only possible symbol for cell (3, α)."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "E",
          "D",
          null,
          "C",
          null
        ],
        [
          null,
          "B",
          "C",
          null,
          null
        ],
        [
          "A",
          "C",
          null,
          "B",
          "E"
        ],
        [
          null,
          "A",
          "E",
          "D",
          "C"
        ],
        [
          "?",
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {B, D} and Column contains {A, E}, leaving C as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 3,
      "grid": [
        [
          "B",
          "D",
          "C",
          "?",
          "E"
        ],
        [
          "A",
          "B",
          "D",
          "E",
          "C"
        ],
        [
          "D",
          null,
          null,
          "B",
          null
        ],
        [
          null,
          null,
          "B",
          null,
          null
        ],
        [
          null,
          null,
          "A",
          "D",
          "B"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 1 and Column δ: Row contains {B, C, D, E} and Column contains {B, D, E}, leaving A as the only possible symbol for cell (1, δ)."
    },
    {
      "qNum": 4,
      "grid": [
        [
          null,
          null,
          "C",
          "A",
          null
        ],
        [
          "D",
          null,
          "A",
          null,
          "B"
        ],
        [
          "C",
          "A",
          "E",
          null,
          "D"
        ],
        [
          "A",
          null,
          "?",
          "D",
          "C"
        ],
        [
          "E",
          null,
          "D",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 4 and Column γ: Row contains {A, C, D} and Column contains {A, C, D, E}, leaving B as the only possible symbol for cell (4, γ)."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "?",
          "C",
          "E",
          "B",
          "A"
        ],
        [
          null,
          null,
          null,
          "C",
          "B"
        ],
        [
          "A",
          "E",
          "B",
          null,
          "C"
        ],
        [
          "B",
          "A",
          null,
          "E",
          null
        ],
        [
          null,
          "B",
          null,
          null,
          "E"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column α: Row contains {A, B, C, E} and Column contains {A, B}, leaving D as the only possible symbol for cell (1, α)."
    },
    {
      "qNum": 6,
      "grid": [
        [
          "C",
          null,
          "B",
          "D",
          null
        ],
        [
          null,
          "E",
          "?",
          null,
          "D"
        ],
        [
          "D",
          null,
          "E",
          null,
          "C"
        ],
        [
          "B",
          "C",
          null,
          null,
          "A"
        ],
        [
          "E",
          "D",
          "A",
          "C",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {D, E} and Column contains {A, B, E}, leaving C as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 7,
      "grid": [
        [
          null,
          "C",
          "A",
          "B",
          "D"
        ],
        [
          null,
          "B",
          null,
          "?",
          null
        ],
        [
          null,
          null,
          "B",
          "E",
          null
        ],
        [
          "D",
          null,
          "E",
          "C",
          "B"
        ],
        [
          "B",
          "E",
          "D",
          "A",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {B} and Column contains {A, B, C, E}, leaving D as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "A",
          "B",
          null,
          "C",
          "D"
        ],
        [
          "C",
          null,
          null,
          "B",
          "A"
        ],
        [
          "D",
          null,
          "B",
          "A",
          "E"
        ],
        [
          "?",
          "A",
          null,
          null,
          "B"
        ],
        [
          null,
          "D",
          null,
          "E",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 4 and Column α: Row contains {A, B} and Column contains {A, C, D}, leaving E as the only possible symbol for cell (4, α)."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "B",
          "E",
          "A",
          "C",
          "D"
        ],
        [
          "C",
          null,
          null,
          "E",
          null
        ],
        [
          "A",
          "B",
          "C",
          null,
          null
        ],
        [
          "E",
          "D",
          "B",
          "?",
          "C"
        ],
        [
          "D",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 4 and Column δ: Row contains {B, C, D, E} and Column contains {C, E}, leaving A as the only possible symbol for cell (4, δ)."
    },
    {
      "qNum": 10,
      "grid": [
        [
          null,
          "C",
          null,
          null,
          "D"
        ],
        [
          null,
          "D",
          "E",
          null,
          "A"
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ],
        [
          "D",
          null,
          "C",
          "E",
          "B"
        ],
        [
          "A",
          "B",
          "D",
          "C",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column ε: Row contains {A, B, C, D} and Column contains {A, B, C, D}, leaving E as the only possible symbol for cell (5, ε)."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "D",
          "?",
          "E",
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "A",
          null
        ],
        [
          "A",
          "D",
          null,
          "C",
          null
        ],
        [
          "E",
          "A",
          null,
          "D",
          null
        ],
        [
          "C",
          "B",
          "A",
          "E",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 1 and Column β: Row contains {D, E} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (1, β)."
    },
    {
      "qNum": 12,
      "grid": [
        [
          "?",
          null,
          "C",
          "B",
          "E"
        ],
        [
          null,
          "B",
          null,
          null,
          null
        ],
        [
          null,
          "C",
          "E",
          null,
          "D"
        ],
        [
          "A",
          "E",
          null,
          "C",
          "B"
        ],
        [
          "C",
          null,
          "B",
          "E",
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column α: Row contains {B, C, E} and Column contains {A, C}, leaving D as the only possible symbol for cell (1, α)."
    },
    {
      "qNum": 13,
      "grid": [
        [
          null,
          null,
          "A",
          null,
          "C"
        ],
        [
          "A",
          null,
          null,
          "C",
          "B"
        ],
        [
          null,
          null,
          "B",
          "E",
          "D"
        ],
        [
          null,
          "B",
          "C",
          "A",
          null
        ],
        [
          "E",
          "C",
          "D",
          "?",
          "A"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {A, C, D, E} and Column contains {A, C, E}, leaving B as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "A",
          "B",
          "D",
          "C",
          null
        ],
        [
          "D",
          null,
          "C",
          "B",
          null
        ],
        [
          null,
          "D",
          "E",
          null,
          "C"
        ],
        [
          null,
          null,
          null,
          "D",
          "B"
        ],
        [
          null,
          "A",
          "B",
          "?",
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {A, B, D} and Column contains {B, C, D}, leaving E as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "B",
          "C",
          null,
          "E",
          null
        ],
        [
          null,
          "D",
          "B",
          "?",
          null
        ],
        [
          "C",
          "E",
          null,
          "D",
          null
        ],
        [
          "D",
          null,
          null,
          "B",
          "E"
        ],
        [
          "A",
          null,
          "E",
          "C",
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {B, D} and Column contains {B, C, D, E}, leaving A as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 16,
      "grid": [
        [
          "C",
          "A",
          "D",
          "?",
          "B"
        ],
        [
          "E",
          null,
          "C",
          "B",
          "A"
        ],
        [
          null,
          null,
          "B",
          null,
          "C"
        ],
        [
          "D",
          "B",
          null,
          "C",
          null
        ],
        [
          null,
          "C",
          null,
          "A",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 1 and Column δ: Row contains {A, B, C, D} and Column contains {A, B, C}, leaving E as the only possible symbol for cell (1, δ)."
    },
    {
      "qNum": 17,
      "grid": [
        [
          null,
          "A",
          null,
          null,
          null
        ],
        [
          "A",
          "C",
          "B",
          "?",
          "D"
        ],
        [
          "D",
          "B",
          "A",
          "C",
          null
        ],
        [
          "C",
          "D",
          null,
          null,
          "B"
        ],
        [
          "B",
          "E",
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {A, B, C, D} and Column contains {C}, leaving E as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "A",
          "C",
          "B",
          null,
          null
        ],
        [
          "B",
          null,
          "C",
          null,
          "D"
        ],
        [
          "C",
          null,
          "E",
          "B",
          "A"
        ],
        [
          "?",
          null,
          null,
          "C",
          null
        ],
        [
          "D",
          null,
          "A",
          "E",
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 4 and Column α: Row contains {C} and Column contains {A, B, C, D}, leaving E as the only possible symbol for cell (4, α)."
    },
    {
      "qNum": 19,
      "grid": [
        [
          null,
          "B",
          "D",
          "E",
          null
        ],
        [
          null,
          "C",
          "E",
          "A",
          "B"
        ],
        [
          "A",
          "E",
          "?",
          "C",
          null
        ],
        [
          "E",
          "D",
          null,
          null,
          "C"
        ],
        [
          "B",
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 3 and Column γ: Row contains {A, C, E} and Column contains {C, D, E}, leaving B as the only possible symbol for cell (3, γ)."
    },
    {
      "qNum": 20,
      "grid": [
        [
          "A",
          null,
          "?",
          "B",
          "E"
        ],
        [
          "C",
          null,
          null,
          null,
          "D"
        ],
        [
          "B",
          null,
          "E",
          "D",
          null
        ],
        [
          "E",
          "B",
          "D",
          "A",
          null
        ],
        [
          "D",
          null,
          null,
          "C",
          "B"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 1 and Column γ: Row contains {A, B, E} and Column contains {D, E}, leaving C as the only possible symbol for cell (1, γ)."
    }
  ],
  "easy_t4": [
    {
      "qNum": 1,
      "grid": [
        [
          "C",
          "A",
          "D",
          null,
          "B"
        ],
        [
          "D",
          "E",
          "?",
          null,
          "A"
        ],
        [
          "E",
          null,
          "C",
          null,
          "D"
        ],
        [
          null,
          "C",
          "A",
          null,
          null
        ],
        [
          "A",
          null,
          "E",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {A, D, E} and Column contains {A, C, D, E}, leaving B as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 2,
      "grid": [
        [
          null,
          "B",
          "D",
          null,
          "E"
        ],
        [
          null,
          "A",
          null,
          "D",
          "B"
        ],
        [
          "D",
          null,
          "B",
          "E",
          "A"
        ],
        [
          null,
          "D",
          "A",
          "B",
          null
        ],
        [
          "B",
          "E",
          "?",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column γ: Row contains {B, E} and Column contains {A, B, D}, leaving C as the only possible symbol for cell (5, γ)."
    },
    {
      "qNum": 3,
      "grid": [
        [
          "B",
          null,
          "C",
          null,
          "A"
        ],
        [
          null,
          "C",
          "B",
          "D",
          null
        ],
        [
          null,
          "A",
          null,
          null,
          "C"
        ],
        [
          "C",
          null,
          null,
          "A",
          "B"
        ],
        [
          "E",
          "?",
          "A",
          "C",
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 5 and Column β: Row contains {A, C, D, E} and Column contains {A, C}, leaving B as the only possible symbol for cell (5, β)."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "B",
          null,
          null,
          "E",
          null
        ],
        [
          "D",
          "B",
          "E",
          "A",
          "C"
        ],
        [
          null,
          "D",
          "A",
          "C",
          "B"
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ],
        [
          "C",
          "?",
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 5 and Column β: Row contains {B, C} and Column contains {B, D, E}, leaving A as the only possible symbol for cell (5, β)."
    },
    {
      "qNum": 5,
      "grid": [
        [
          null,
          null,
          "C",
          "B",
          "A"
        ],
        [
          "D",
          null,
          "B",
          "E",
          null
        ],
        [
          "B",
          null,
          "A",
          null,
          "D"
        ],
        [
          "A",
          null,
          "E",
          "D",
          "B"
        ],
        [
          "C",
          null,
          "?",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 5 and Column γ: Row contains {C, E} and Column contains {A, B, C, E}, leaving D as the only possible symbol for cell (5, γ)."
    },
    {
      "qNum": 6,
      "grid": [
        [
          "C",
          null,
          null,
          "E",
          null
        ],
        [
          "B",
          null,
          "?",
          null,
          "A"
        ],
        [
          null,
          "A",
          "C",
          "B",
          null
        ],
        [
          "E",
          null,
          "D",
          "A",
          "B"
        ],
        [
          "A",
          "E",
          "B",
          "D",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {A, B} and Column contains {B, C, D}, leaving E as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "A",
          null,
          "E",
          null,
          "B"
        ],
        [
          "D",
          "B",
          "?",
          "E",
          null
        ],
        [
          null,
          "E",
          "D",
          "A",
          "C"
        ],
        [
          "C",
          null,
          "A",
          "B",
          "E"
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {B, D, E} and Column contains {A, D, E}, leaving C as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 8,
      "grid": [
        [
          null,
          "D",
          "E",
          null,
          "C"
        ],
        [
          "A",
          "?",
          "B",
          null,
          "E"
        ],
        [
          "D",
          "E",
          null,
          "C",
          null
        ],
        [
          "C",
          "B",
          "D",
          null,
          "A"
        ],
        [
          null,
          null,
          "C",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column β: Row contains {A, B, E} and Column contains {B, D, E}, leaving C as the only possible symbol for cell (2, β)."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "B",
          "E",
          "D",
          "A",
          "C"
        ],
        [
          "C",
          "B",
          "A",
          "E",
          null
        ],
        [
          null,
          null,
          null,
          "B",
          null
        ],
        [
          "A",
          "D",
          "B",
          "?",
          null
        ],
        [
          "E",
          "A",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 4 and Column δ: Row contains {A, B, D} and Column contains {A, B, E}, leaving C as the only possible symbol for cell (4, δ)."
    },
    {
      "qNum": 10,
      "grid": [
        [
          null,
          null,
          null,
          "D",
          "A"
        ],
        [
          "E",
          "A",
          "D",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          "D",
          "B",
          "C",
          "A",
          "?"
        ],
        [
          "C",
          "E",
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 4 and Column ε: Row contains {A, B, C, D} and Column contains {A, D}, leaving E as the only possible symbol for cell (4, ε)."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "C",
          null,
          "B",
          null,
          "A"
        ],
        [
          "D",
          "B",
          "A",
          "E",
          "C"
        ],
        [
          "B",
          null,
          null,
          null,
          "E"
        ],
        [
          "?",
          null,
          "E",
          null,
          "B"
        ],
        [
          null,
          "A",
          "C",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 4 and Column α: Row contains {B, E} and Column contains {B, C, D}, leaving A as the only possible symbol for cell (4, α)."
    },
    {
      "qNum": 12,
      "grid": [
        [
          "B",
          "C",
          "A",
          "?",
          "D"
        ],
        [
          null,
          null,
          "B",
          "D",
          "C"
        ],
        [
          "A",
          null,
          "C",
          "B",
          "E"
        ],
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          "C",
          "E",
          "D",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 1 and Column δ: Row contains {A, B, C, D} and Column contains {B, D}, leaving E as the only possible symbol for cell (1, δ)."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "C",
          "A",
          "E",
          "D",
          null
        ],
        [
          "B",
          "C",
          null,
          "?",
          null
        ],
        [
          "D",
          null,
          null,
          "B",
          null
        ],
        [
          "E",
          null,
          "A",
          "C",
          null
        ],
        [
          null,
          "D",
          "B",
          "E",
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {B, C} and Column contains {B, C, D, E}, leaving A as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "?",
          null,
          "E",
          "D",
          "A"
        ],
        [
          "D",
          null,
          null,
          null,
          "B"
        ],
        [
          "B",
          "A",
          null,
          null,
          "E"
        ],
        [
          null,
          "D",
          "B",
          "A",
          "C"
        ],
        [
          "A",
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 1 and Column α: Row contains {A, D, E} and Column contains {A, B, D}, leaving C as the only possible symbol for cell (1, α)."
    },
    {
      "qNum": 15,
      "grid": [
        [
          null,
          null,
          "C",
          "A",
          "B"
        ],
        [
          null,
          "B",
          "E",
          null,
          null
        ],
        [
          "B",
          "C",
          "A",
          "D",
          "E"
        ],
        [
          null,
          "D",
          "B",
          null,
          null
        ],
        [
          "E",
          null,
          "?",
          "B",
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 5 and Column γ: Row contains {B, C, E} and Column contains {A, B, C, E}, leaving D as the only possible symbol for cell (5, γ)."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          "C",
          "?",
          "D",
          "B"
        ],
        [
          null,
          "D",
          "A",
          "B",
          "E"
        ],
        [
          "B",
          null,
          null,
          "A",
          null
        ],
        [
          null,
          "B",
          null,
          "E",
          "A"
        ],
        [
          null,
          "A",
          null,
          "C",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 1 and Column γ: Row contains {B, C, D} and Column contains {A}, leaving E as the only possible symbol for cell (1, γ)."
    },
    {
      "qNum": 17,
      "grid": [
        [
          null,
          "A",
          "B",
          "C",
          "E"
        ],
        [
          null,
          null,
          "E",
          null,
          null
        ],
        [
          "E",
          "B",
          "D",
          null,
          null
        ],
        [
          "A",
          "E",
          "?",
          "D",
          "B"
        ],
        [
          null,
          null,
          "A",
          "E",
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 4 and Column γ: Row contains {A, B, D, E} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (4, γ)."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "A",
          null,
          "D",
          "E",
          "C"
        ],
        [
          "B",
          null,
          "E",
          "C",
          "A"
        ],
        [
          null,
          null,
          null,
          "A",
          null
        ],
        [
          "C",
          "A",
          "B",
          "?",
          null
        ],
        [
          null,
          "C",
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 4 and Column δ: Row contains {A, B, C} and Column contains {A, B, C, E}, leaving D as the only possible symbol for cell (4, δ)."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "A",
          "B",
          "C",
          null,
          null
        ],
        [
          "D",
          "C",
          "E",
          null,
          null
        ],
        [
          "?",
          null,
          "D",
          "E",
          null
        ],
        [
          "B",
          "E",
          "A",
          null,
          "D"
        ],
        [
          "E",
          null,
          null,
          "A",
          "C"
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 3 and Column α: Row contains {D, E} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (3, α)."
    },
    {
      "qNum": 20,
      "grid": [
        [
          "C",
          "E",
          "D",
          null,
          null
        ],
        [
          "D",
          null,
          "E",
          "C",
          "A"
        ],
        [
          "B",
          null,
          "A",
          "E",
          "D"
        ],
        [
          null,
          "D",
          "C",
          "B",
          "?"
        ],
        [
          "E",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 4 and Column ε: Row contains {B, C, D} and Column contains {A, D}, leaving E as the only possible symbol for cell (4, ε)."
    }
  ],
  "easy_t5": [
    {
      "qNum": 1,
      "grid": [
        [
          "E",
          null,
          null,
          null,
          "C"
        ],
        [
          null,
          "B",
          null,
          "C",
          "D"
        ],
        [
          "?",
          "C",
          "A",
          "D",
          "E"
        ],
        [
          "D",
          null,
          null,
          "A",
          "B"
        ],
        [
          "C",
          null,
          "B",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 3 and Column α: Row contains {A, C, D, E} and Column contains {C, D, E}, leaving B as the only possible symbol for cell (3, α)."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "E",
          null,
          "D",
          "B",
          "A"
        ],
        [
          null,
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "A",
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          "?",
          "A",
          "E"
        ],
        [
          "A",
          "E",
          "C",
          "D",
          "B"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 4 and Column γ: Row contains {A, E} and Column contains {A, C, D}, leaving B as the only possible symbol for cell (4, γ)."
    },
    {
      "qNum": 3,
      "grid": [
        [
          "?",
          null,
          "C",
          "D",
          "A"
        ],
        [
          "B",
          "C",
          "D",
          null,
          null
        ],
        [
          "C",
          null,
          null,
          "E",
          null
        ],
        [
          "D",
          "A",
          "E",
          null,
          null
        ],
        [
          "A",
          null,
          "B",
          "C",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 1 and Column α: Row contains {A, C, D} and Column contains {A, B, C, D}, leaving E as the only possible symbol for cell (1, α)."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "C",
          "D",
          "?",
          "E",
          "A"
        ],
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "A",
          null,
          null,
          "C",
          "D"
        ],
        [
          "E",
          null,
          "D",
          "B",
          "C"
        ],
        [
          "D",
          "E",
          "C",
          "A",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 1 and Column γ: Row contains {A, C, D, E} and Column contains {C, D}, leaving B as the only possible symbol for cell (1, γ)."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "D",
          "E",
          "B",
          null,
          null
        ],
        [
          "?",
          "A",
          "C",
          "B",
          "D"
        ],
        [
          "A",
          "B",
          null,
          null,
          null
        ],
        [
          "B",
          "C",
          "E",
          "D",
          "A"
        ],
        [
          null,
          null,
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 2 and Column α: Row contains {A, B, C, D} and Column contains {A, B, D}, leaving E as the only possible symbol for cell (2, α)."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          "E",
          null,
          null,
          "B"
        ],
        [
          "D",
          "A",
          null,
          "E",
          "C"
        ],
        [
          "E",
          null,
          "C",
          null,
          "D"
        ],
        [
          "B",
          "?",
          "E",
          "C",
          "A"
        ],
        [
          null,
          null,
          "D",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 4 and Column β: Row contains {A, B, C, E} and Column contains {A, E}, leaving D as the only possible symbol for cell (4, β)."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "B",
          "E",
          "A",
          "?",
          "C"
        ],
        [
          "A",
          null,
          "E",
          null,
          null
        ],
        [
          null,
          "A",
          "B",
          null,
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          "A"
        ],
        [
          "D",
          "B",
          null,
          "A",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column δ: Row contains {A, B, C, E} and Column contains {A, B}, leaving D as the only possible symbol for cell (1, δ)."
    },
    {
      "qNum": 8,
      "grid": [
        [
          null,
          null,
          "D",
          "A",
          "E"
        ],
        [
          "A",
          "B",
          "E",
          null,
          "C"
        ],
        [
          null,
          null,
          "A",
          "B",
          "D"
        ],
        [
          "E",
          null,
          null,
          null,
          null
        ],
        [
          "D",
          "A",
          "?",
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column γ: Row contains {A, B, D, E} and Column contains {A, D, E}, leaving C as the only possible symbol for cell (5, γ)."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "B",
          "?",
          "A",
          "E",
          "C"
        ],
        [
          "C",
          null,
          "E",
          "B",
          "D"
        ],
        [
          "A",
          null,
          "C",
          "D",
          "E"
        ],
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "E",
          "C",
          null,
          "A",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column β: Row contains {A, B, C, E} and Column contains {C}, leaving D as the only possible symbol for cell (1, β)."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "B",
          "?",
          "C",
          "E",
          "A"
        ],
        [
          null,
          "B",
          null,
          null,
          "E"
        ],
        [
          "C",
          "E",
          null,
          "B",
          "D"
        ],
        [
          null,
          null,
          "E",
          "A",
          "B"
        ],
        [
          null,
          null,
          null,
          "D",
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column β: Row contains {A, B, C, E} and Column contains {B, E}, leaving D as the only possible symbol for cell (1, β)."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "C",
          "D",
          null,
          null,
          "?"
        ],
        [
          "A",
          null,
          null,
          null,
          "B"
        ],
        [
          "D",
          null,
          "A",
          "B",
          null
        ],
        [
          null,
          "A",
          null,
          "C",
          "E"
        ],
        [
          "E",
          "B",
          "C",
          "A",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 1 and Column ε: Row contains {C, D} and Column contains {B, D, E}, leaving A as the only possible symbol for cell (1, ε)."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          "C",
          "B",
          "E",
          "D"
        ],
        [
          "C",
          "E",
          "D",
          null,
          "A"
        ],
        [
          "D",
          null,
          null,
          null,
          null
        ],
        [
          "E",
          null,
          "?",
          "D",
          "C"
        ],
        [
          null,
          "D",
          "C",
          "A",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 4 and Column γ: Row contains {C, D, E} and Column contains {B, C, D}, leaving A as the only possible symbol for cell (4, γ)."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "C",
          "A",
          "B",
          null,
          null
        ],
        [
          "D",
          null,
          "C",
          "B",
          "?"
        ],
        [
          "E",
          null,
          null,
          "D",
          "B"
        ],
        [
          "A",
          "B",
          null,
          "C",
          "E"
        ],
        [
          "B",
          null,
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 2 and Column ε: Row contains {B, C, D} and Column contains {B, C, E}, leaving A as the only possible symbol for cell (2, ε)."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "E",
          "B",
          null,
          "D",
          "C"
        ],
        [
          "A",
          null,
          "?",
          null,
          "D"
        ],
        [
          "B",
          "D",
          "E",
          null,
          null
        ],
        [
          "D",
          null,
          "B",
          "A",
          null
        ],
        [
          null,
          "A",
          null,
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {A, D} and Column contains {B, E}, leaving C as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "B",
          null,
          "A",
          "C",
          null
        ],
        [
          null,
          "B",
          "D",
          "E",
          "C"
        ],
        [
          "E",
          "C",
          "B",
          null,
          null
        ],
        [
          "D",
          "A",
          null,
          "B",
          "E"
        ],
        [
          null,
          "D",
          null,
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {D} and Column contains {B, C, E}, leaving A as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          "A",
          "D",
          "E",
          null
        ],
        [
          "?",
          null,
          null,
          "C",
          "B"
        ],
        [
          "C",
          null,
          "A",
          "D",
          null
        ],
        [
          "D",
          "E",
          null,
          "B",
          "A"
        ],
        [
          "E",
          "C",
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 2 and Column α: Row contains {B, C} and Column contains {C, D, E}, leaving A as the only possible symbol for cell (2, α)."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "C",
          "D",
          "A",
          null,
          "B"
        ],
        [
          "?",
          "E",
          null,
          "B",
          "C"
        ],
        [
          "D",
          null,
          "E",
          null,
          "A"
        ],
        [
          null,
          null,
          null,
          "A",
          "D"
        ],
        [
          "B",
          "A",
          null,
          "D",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 2 and Column α: Row contains {B, C, E} and Column contains {B, C, D}, leaving A as the only possible symbol for cell (2, α)."
    },
    {
      "qNum": 18,
      "grid": [
        [
          null,
          "E",
          null,
          "?",
          null
        ],
        [
          null,
          "A",
          "B",
          "C",
          "E"
        ],
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          "C",
          "D",
          "E",
          "B",
          "A"
        ],
        [
          "E",
          "B",
          "D",
          "A",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column δ: Row contains {E} and Column contains {A, B, C}, leaving D as the only possible symbol for cell (1, δ)."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          "A",
          "B",
          "?",
          null,
          "E"
        ],
        [
          "D",
          "E",
          null,
          "A",
          null
        ],
        [
          "E",
          null,
          "C",
          "B",
          "D"
        ],
        [
          "C",
          "D",
          null,
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {A, B, E} and Column contains {C}, leaving D as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 20,
      "grid": [
        [
          "A",
          null,
          null,
          "C",
          "E"
        ],
        [
          "D",
          "C",
          null,
          "E",
          null
        ],
        [
          "B",
          null,
          "?",
          "A",
          "D"
        ],
        [
          null,
          "D",
          "A",
          null,
          "C"
        ],
        [
          null,
          "A",
          "E",
          null,
          "B"
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 3 and Column γ: Row contains {A, B, D} and Column contains {A, E}, leaving C as the only possible symbol for cell (3, γ)."
    }
  ],
  "medium_t1": [
    {
      "qNum": 1,
      "grid": [
        [
          "A",
          "B",
          "C",
          null,
          "?"
        ],
        [
          "D",
          null,
          "A",
          "B",
          null
        ],
        [
          "E",
          "A",
          "D",
          "C",
          null
        ],
        [
          null,
          "E",
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "D",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = D."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "D",
          "B",
          "A",
          null,
          null
        ],
        [
          "?",
          null,
          "D",
          null,
          null
        ],
        [
          null,
          "C",
          "B",
          null,
          null
        ],
        [
          null,
          "D",
          null,
          "B",
          "A"
        ],
        [
          "B",
          "E",
          "C",
          "A",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "E",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = E."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          null,
          "D",
          "E",
          null
        ],
        [
          "D",
          null,
          "E",
          null,
          "C"
        ],
        [
          "A",
          null,
          "C",
          null,
          "D"
        ],
        [
          "E",
          "D",
          null,
          "?",
          "B"
        ],
        [
          "C",
          null,
          null,
          "D",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "C",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = C."
    },
    {
      "qNum": 4,
      "grid": [
        [
          null,
          "A",
          null,
          "E",
          "C"
        ],
        [
          "E",
          null,
          null,
          null,
          "B"
        ],
        [
          "A",
          null,
          "B",
          null,
          "D"
        ],
        [
          null,
          "D",
          "E",
          null,
          null
        ],
        [
          "?",
          "B",
          null,
          "A",
          "E"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "D",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = D."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "?",
          "D",
          null,
          null,
          "A"
        ],
        [
          "E",
          null,
          null,
          "C",
          "D"
        ],
        [
          "A",
          "C",
          null,
          "D",
          null
        ],
        [
          "D",
          null,
          null,
          "B",
          null
        ],
        [
          null,
          "E",
          "D",
          null,
          "B"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = B."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          "C",
          null,
          null,
          null
        ],
        [
          "C",
          "D",
          null,
          null,
          null
        ],
        [
          "E",
          null,
          "B",
          "C",
          "D"
        ],
        [
          "D",
          "B",
          "?",
          "E",
          null
        ],
        [
          null,
          "E",
          "D",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 4 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, γ) = C."
    },
    {
      "qNum": 7,
      "grid": [
        [
          null,
          "?",
          "B",
          null,
          "E"
        ],
        [
          "B",
          null,
          null,
          "D",
          "C"
        ],
        [
          "C",
          null,
          "D",
          "E",
          null
        ],
        [
          null,
          "C",
          null,
          null,
          "D"
        ],
        [
          "E",
          null,
          null,
          "A",
          "B"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = A."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "B",
          "C",
          null,
          "D",
          null
        ],
        [
          "D",
          "B",
          "C",
          null,
          "E"
        ],
        [
          null,
          null,
          "D",
          "C",
          "B"
        ],
        [
          null,
          "D",
          null,
          "?",
          "C"
        ],
        [
          null,
          null,
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "E",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = E."
    },
    {
      "qNum": 9,
      "grid": [
        [
          null,
          "C",
          "?",
          null,
          null
        ],
        [
          null,
          null,
          "D",
          "A",
          "C"
        ],
        [
          null,
          "A",
          "B",
          "C",
          null
        ],
        [
          "C",
          null,
          null,
          "B",
          "E"
        ],
        [
          "D",
          null,
          "C",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = E."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "A",
          null,
          "E",
          null,
          "B"
        ],
        [
          null,
          null,
          "B",
          "?",
          "C"
        ],
        [
          "B",
          "C",
          null,
          "E",
          null
        ],
        [
          null,
          "A",
          "D",
          "B",
          "E"
        ],
        [
          null,
          null,
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = A."
    },
    {
      "qNum": 11,
      "grid": [
        [
          null,
          "E",
          "B",
          "?",
          null
        ],
        [
          null,
          null,
          null,
          null,
          "B"
        ],
        [
          "C",
          null,
          "E",
          null,
          "D"
        ],
        [
          null,
          "B",
          "D",
          "C",
          null
        ],
        [
          "B",
          "D",
          "C",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = D."
    },
    {
      "qNum": 12,
      "grid": [
        [
          "E",
          "A",
          "D",
          "B",
          null
        ],
        [
          null,
          null,
          "?",
          "E",
          null
        ],
        [
          null,
          "C",
          "E",
          null,
          null
        ],
        [
          "A",
          null,
          null,
          "C",
          "E"
        ],
        [
          "C",
          null,
          "A",
          "D",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = C."
    },
    {
      "qNum": 13,
      "grid": [
        [
          null,
          "E",
          null,
          "D",
          null
        ],
        [
          null,
          "D",
          "A",
          "C",
          null
        ],
        [
          "A",
          null,
          "D",
          "E",
          null
        ],
        [
          "C",
          "A",
          "E",
          "B",
          null
        ],
        [
          null,
          null,
          null,
          "A",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = E."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "A",
          null,
          "C",
          null,
          null
        ],
        [
          "E",
          null,
          null,
          "B",
          "A"
        ],
        [
          "D",
          null,
          "B",
          "?",
          null
        ],
        [
          "B",
          null,
          "A",
          "C",
          null
        ],
        [
          null,
          "A",
          null,
          "D",
          "B"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = A."
    },
    {
      "qNum": 15,
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "?",
          null,
          null,
          null,
          "B"
        ],
        [
          null,
          "A",
          "D",
          "E",
          "C"
        ],
        [
          null,
          "C",
          "B",
          "D",
          "E"
        ],
        [
          "C",
          "E",
          "A",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "E",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = E."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          null,
          "B",
          null,
          "D"
        ],
        [
          null,
          "B",
          null,
          null,
          "C"
        ],
        [
          "D",
          "C",
          "A",
          "B",
          "E"
        ],
        [
          "E",
          "D",
          "C",
          null,
          null
        ],
        [
          null,
          null,
          "D",
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "A",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = A."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "?",
          null,
          "D",
          "E",
          "B"
        ],
        [
          "E",
          "D",
          null,
          "C",
          "A"
        ],
        [
          null,
          null,
          "E",
          null,
          null
        ],
        [
          null,
          "B",
          "A",
          "D",
          null
        ],
        [
          null,
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = A."
    },
    {
      "qNum": 18,
      "grid": [
        [
          null,
          null,
          "C",
          "E",
          "D"
        ],
        [
          "C",
          null,
          "?",
          null,
          "A"
        ],
        [
          "E",
          "D",
          null,
          null,
          null
        ],
        [
          "D",
          null,
          "A",
          null,
          "E"
        ],
        [
          "A",
          "C",
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = D."
    },
    {
      "qNum": 19,
      "grid": [
        [
          null,
          "C",
          null,
          "B",
          "A"
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ],
        [
          null,
          "D",
          "A",
          "E",
          null
        ],
        [
          "E",
          "?",
          "C",
          null,
          "D"
        ],
        [
          "C",
          null,
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = B."
    },
    {
      "qNum": 20,
      "grid": [
        [
          "E",
          null,
          "C",
          "A",
          "B"
        ],
        [
          null,
          "A",
          "?",
          "C",
          null
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ],
        [
          null,
          null,
          null,
          "E",
          "A"
        ],
        [
          null,
          "B",
          null,
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = E."
    }
  ],
  "medium_t2": [
    {
      "qNum": 1,
      "grid": [
        [
          null,
          "A",
          null,
          "D",
          null
        ],
        [
          "D",
          null,
          null,
          "A",
          "C"
        ],
        [
          null,
          "E",
          "A",
          null,
          null
        ],
        [
          "A",
          null,
          "D",
          "?",
          "E"
        ],
        [
          "C",
          "D",
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = B."
    },
    {
      "qNum": 2,
      "grid": [
        [
          null,
          "E",
          "C",
          null,
          "D"
        ],
        [
          "C",
          "A",
          "E",
          null,
          null
        ],
        [
          "E",
          "D",
          null,
          null,
          "?"
        ],
        [
          "D",
          null,
          "B",
          "E",
          null
        ],
        [
          null,
          "B",
          null,
          null,
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = C."
    },
    {
      "qNum": 3,
      "grid": [
        [
          "?",
          null,
          null,
          null,
          "B"
        ],
        [
          "B",
          "D",
          "C",
          "E",
          "A"
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ],
        [
          null,
          null,
          null,
          "B",
          null
        ],
        [
          "C",
          "B",
          "A",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "E",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = E."
    },
    {
      "qNum": 4,
      "grid": [
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          "C",
          "B",
          null,
          "?",
          "D"
        ],
        [
          null,
          "A",
          null,
          "C",
          "E"
        ],
        [
          "E",
          null,
          "A",
          "D",
          "B"
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = A."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "E",
          "A",
          null,
          "D",
          null
        ],
        [
          "B",
          null,
          null,
          null,
          "D"
        ],
        [
          null,
          "D",
          "B",
          "E",
          "A"
        ],
        [
          "D",
          null,
          null,
          null,
          null
        ],
        [
          "A",
          "C",
          "?",
          "B",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = D."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          null,
          null,
          "E",
          "B"
        ],
        [
          "C",
          null,
          "A",
          "B",
          null
        ],
        [
          null,
          "?",
          "C",
          null,
          "A"
        ],
        [
          "D",
          "A",
          null,
          "C",
          "E"
        ],
        [
          null,
          "D",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = B."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "C",
          null,
          "E",
          null,
          null
        ],
        [
          "B",
          "E",
          "C",
          "?",
          null
        ],
        [
          "E",
          null,
          "A",
          null,
          null
        ],
        [
          "A",
          null,
          "D",
          "C",
          null
        ],
        [
          null,
          null,
          "B",
          "E",
          "A"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = A."
    },
    {
      "qNum": 8,
      "grid": [
        [
          null,
          "?",
          null,
          null,
          null
        ],
        [
          "E",
          null,
          "D",
          "A",
          "C"
        ],
        [
          "A",
          null,
          null,
          null,
          "D"
        ],
        [
          "D",
          "A",
          null,
          "E",
          "B"
        ],
        [
          null,
          null,
          "A",
          "C",
          "E"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = E."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "E",
          "C",
          "D",
          null,
          "?"
        ],
        [
          "A",
          "B",
          "C",
          null,
          "E"
        ],
        [
          "C",
          "A",
          "E",
          "B",
          null
        ],
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = B."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "C",
          null,
          "B",
          "E",
          null
        ],
        [
          "D",
          null,
          "A",
          "B",
          "C"
        ],
        [
          "?",
          "C",
          null,
          "D",
          "B"
        ],
        [
          null,
          null,
          "D",
          null,
          "E"
        ],
        [
          null,
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = A."
    },
    {
      "qNum": 11,
      "grid": [
        [
          null,
          null,
          "E",
          null,
          null
        ],
        [
          "B",
          null,
          "D",
          "E",
          "C"
        ],
        [
          "E",
          null,
          null,
          "C",
          "?"
        ],
        [
          "C",
          null,
          "B",
          null,
          "A"
        ],
        [
          "A",
          "D",
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "D",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = D."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          "C",
          null,
          "D",
          null
        ],
        [
          "C",
          null,
          "?",
          null,
          null
        ],
        [
          "D",
          "E",
          "C",
          null,
          "A"
        ],
        [
          "A",
          null,
          "D",
          "C",
          null
        ],
        [
          "B",
          null,
          "E",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = B."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "B",
          null,
          null,
          null,
          "C"
        ],
        [
          null,
          "?",
          null,
          null,
          "B"
        ],
        [
          "E",
          "B",
          "D",
          "C",
          null
        ],
        [
          null,
          "C",
          "B",
          "E",
          "D"
        ],
        [
          null,
          null,
          "A",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = E."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "E",
          null,
          "D",
          null,
          null
        ],
        [
          "?",
          "A",
          null,
          "D",
          null
        ],
        [
          null,
          "C",
          null,
          "E",
          "D"
        ],
        [
          null,
          "E",
          null,
          "A",
          "B"
        ],
        [
          null,
          null,
          "A",
          "B",
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = B."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "A",
          "D",
          null,
          null,
          null
        ],
        [
          "B",
          "A",
          null,
          "E",
          null
        ],
        [
          "D",
          "E",
          "A",
          "?",
          null
        ],
        [
          null,
          null,
          "D",
          "A",
          "B"
        ],
        [
          null,
          "B",
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = B."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          "?",
          "A",
          null,
          "B"
        ],
        [
          null,
          null,
          "D",
          "E",
          "A"
        ],
        [
          "A",
          null,
          "E",
          null,
          null
        ],
        [
          "E",
          null,
          "B",
          "A",
          "C"
        ],
        [
          "D",
          null,
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = E."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "E",
          null,
          "B",
          null,
          null
        ],
        [
          null,
          "C",
          null,
          "A",
          "E"
        ],
        [
          "D",
          null,
          "A",
          "C",
          "B"
        ],
        [
          "?",
          null,
          null,
          null,
          "D"
        ],
        [
          "C",
          "D",
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = A."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "D",
          "C",
          null,
          "A",
          "?"
        ],
        [
          "C",
          "B",
          "D",
          null,
          null
        ],
        [
          "A",
          null,
          "B",
          "C",
          null
        ],
        [
          "E",
          null,
          "A",
          null,
          "C"
        ],
        [
          "B",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = B."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "A",
          null,
          "B",
          null,
          "D"
        ],
        [
          null,
          null,
          null,
          "D",
          "?"
        ],
        [
          null,
          "B",
          "D",
          null,
          null
        ],
        [
          null,
          "D",
          "E",
          "C",
          "A"
        ],
        [
          null,
          "E",
          "A",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = B."
    },
    {
      "qNum": 20,
      "grid": [
        [
          "E",
          null,
          "?",
          null,
          "C"
        ],
        [
          "C",
          null,
          null,
          "A",
          "D"
        ],
        [
          null,
          "B",
          null,
          null,
          "E"
        ],
        [
          null,
          "C",
          null,
          null,
          "B"
        ],
        [
          "B",
          null,
          "E",
          "C",
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = D."
    }
  ],
  "medium_t3": [
    {
      "qNum": 1,
      "grid": [
        [
          null,
          "B",
          "D",
          "C",
          null
        ],
        [
          null,
          "C",
          null,
          "E",
          null
        ],
        [
          "?",
          "A",
          "E",
          "D",
          null
        ],
        [
          null,
          null,
          "C",
          "A",
          "B"
        ],
        [
          null,
          null,
          null,
          "B",
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = B."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "D",
          null,
          null,
          "E",
          null
        ],
        [
          "C",
          "E",
          null,
          null,
          null
        ],
        [
          "E",
          "B",
          "D",
          null,
          "C"
        ],
        [
          "A",
          "C",
          "E",
          "?",
          null
        ],
        [
          "B",
          "D",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = B."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          null,
          "E",
          "D",
          "C"
        ],
        [
          null,
          "C",
          null,
          "E",
          "B"
        ],
        [
          null,
          "D",
          null,
          "C",
          null
        ],
        [
          "E",
          null,
          "C",
          null,
          "D"
        ],
        [
          null,
          "E",
          "?",
          "B",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = D."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "A",
          "B",
          "E",
          null,
          "C"
        ],
        [
          null,
          "?",
          "B",
          null,
          null
        ],
        [
          null,
          null,
          "A",
          "E",
          "B"
        ],
        [
          null,
          "C",
          null,
          "B",
          "A"
        ],
        [
          null,
          null,
          null,
          "A",
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = A."
    },
    {
      "qNum": 5,
      "grid": [
        [
          null,
          "E",
          "A",
          null,
          "C"
        ],
        [
          null,
          "A",
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          "C",
          null,
          "E"
        ],
        [
          "E",
          "C",
          null,
          "B",
          null
        ],
        [
          "A",
          null,
          "?",
          "C",
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = E."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          null,
          "D",
          null,
          "A"
        ],
        [
          "D",
          "?",
          null,
          null,
          null
        ],
        [
          "E",
          "D",
          "A",
          null,
          "B"
        ],
        [
          "A",
          "E",
          "C",
          null,
          null
        ],
        [
          null,
          "A",
          null,
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = B."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "?",
          "E",
          null,
          "D",
          "C"
        ],
        [
          null,
          null,
          "C",
          "B",
          null
        ],
        [
          null,
          "C",
          null,
          "A",
          null
        ],
        [
          null,
          "A",
          "D",
          "E",
          "B"
        ],
        [
          "D",
          null,
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = A."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "?",
          "D",
          "B",
          null,
          null
        ],
        [
          "B",
          "E",
          null,
          null,
          null
        ],
        [
          "D",
          null,
          "E",
          "C",
          null
        ],
        [
          "E",
          "A",
          "C",
          "B",
          "D"
        ],
        [
          null,
          null,
          null,
          null,
          "B"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = C."
    },
    {
      "qNum": 9,
      "grid": [
        [
          null,
          "A",
          null,
          null,
          "B"
        ],
        [
          "E",
          "D",
          "B",
          "A",
          null
        ],
        [
          "D",
          "?",
          null,
          null,
          "A"
        ],
        [
          "B",
          null,
          "A",
          null,
          "D"
        ],
        [
          null,
          null,
          "C",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = C."
    },
    {
      "qNum": 10,
      "grid": [
        [
          null,
          "E",
          "A",
          null,
          "C"
        ],
        [
          null,
          "D",
          "B",
          null,
          "E"
        ],
        [
          null,
          "A",
          null,
          null,
          null
        ],
        [
          "C",
          null,
          "E",
          "D",
          "A"
        ],
        [
          null,
          "C",
          null,
          "A",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = B."
    },
    {
      "qNum": 11,
      "grid": [
        [
          null,
          "D",
          null,
          null,
          null
        ],
        [
          null,
          "E",
          "D",
          "C",
          "?"
        ],
        [
          "B",
          null,
          "E",
          "A",
          "D"
        ],
        [
          null,
          null,
          null,
          null,
          "C"
        ],
        [
          "D",
          "A",
          "C",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = B."
    },
    {
      "qNum": 12,
      "grid": [
        [
          "E",
          null,
          null,
          "D",
          null
        ],
        [
          "C",
          "A",
          "D",
          null,
          null
        ],
        [
          null,
          "E",
          "A",
          "B",
          null
        ],
        [
          "?",
          null,
          null,
          "A",
          "E"
        ],
        [
          "A",
          "B",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = B."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "B",
          null,
          null,
          "A",
          "?"
        ],
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "E",
          "C",
          "D"
        ],
        [
          "D",
          "E",
          "A",
          null,
          null
        ],
        [
          "C",
          "A",
          "D",
          null,
          "B"
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = E."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "?",
          "D",
          "E",
          null,
          "C"
        ],
        [
          null,
          "E",
          null,
          "C",
          "D"
        ],
        [
          "D",
          null,
          null,
          null,
          null
        ],
        [
          "E",
          "C",
          null,
          null,
          "B"
        ],
        [
          "C",
          null,
          null,
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = A."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "B",
          null,
          "A",
          "C",
          null
        ],
        [
          "?",
          "B",
          null,
          null,
          "A"
        ],
        [
          "E",
          null,
          "D",
          null,
          null
        ],
        [
          null,
          "C",
          "B",
          null,
          "E"
        ],
        [
          null,
          null,
          "C",
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = C."
    },
    {
      "qNum": 16,
      "grid": [
        [
          "E",
          null,
          null,
          null,
          null
        ],
        [
          "D",
          "B",
          "E",
          "A",
          "C"
        ],
        [
          null,
          null,
          null,
          "B",
          "E"
        ],
        [
          "B",
          "A",
          "C",
          "?",
          null
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "E",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = E."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "E",
          "A",
          null,
          "C",
          null
        ],
        [
          "A",
          null,
          null,
          "B",
          "D"
        ],
        [
          "C",
          "B",
          null,
          null,
          null
        ],
        [
          "D",
          null,
          "B",
          "?",
          null
        ],
        [
          "B",
          "D",
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = A."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "D",
          null,
          null,
          "B",
          "E"
        ],
        [
          null,
          null,
          "A",
          "E",
          "C"
        ],
        [
          "E",
          null,
          null,
          null,
          "A"
        ],
        [
          "?",
          "C",
          null,
          null,
          null
        ],
        [
          "C",
          "E",
          "B",
          "A",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = A."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "A",
          null,
          null,
          "?",
          null
        ],
        [
          "E",
          "D",
          "C",
          null,
          null
        ],
        [
          "D",
          "A",
          "B",
          null,
          null
        ],
        [
          null,
          "B",
          "D",
          "E",
          null
        ],
        [
          null,
          "E",
          "A",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = B."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          "A",
          "B",
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          "D"
        ],
        [
          "B",
          "D",
          "C",
          "A",
          null
        ],
        [
          "C",
          "B",
          "?",
          "D",
          null
        ],
        [
          "A",
          null,
          "D",
          null,
          "B"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 4 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, γ) = E."
    }
  ],
  "medium_t4": [
    {
      "qNum": 1,
      "grid": [
        [
          "B",
          null,
          "E",
          null,
          "D"
        ],
        [
          "A",
          "E",
          "D",
          "B",
          "C"
        ],
        [
          "D",
          null,
          null,
          "E",
          "A"
        ],
        [
          null,
          "?",
          null,
          null,
          null
        ],
        [
          null,
          "B",
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = D."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "E",
          null,
          "B",
          "C",
          null
        ],
        [
          null,
          "B",
          "A",
          "E",
          "C"
        ],
        [
          "A",
          null,
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          null,
          "D",
          "E"
        ],
        [
          "?",
          "E",
          null,
          null,
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = C."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          null,
          "E",
          "A",
          "D"
        ],
        [
          null,
          null,
          "C",
          null,
          null
        ],
        [
          "C",
          "E",
          "D",
          "B",
          "A"
        ],
        [
          "E",
          null,
          null,
          null,
          "B"
        ],
        [
          "D",
          "?",
          null,
          "E",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = A."
    },
    {
      "qNum": 4,
      "grid": [
        [
          null,
          "B",
          null,
          "E",
          "D"
        ],
        [
          "C",
          "A",
          "E",
          "D",
          "B"
        ],
        [
          null,
          null,
          null,
          "A",
          null
        ],
        [
          null,
          "D",
          "A",
          "C",
          null
        ],
        [
          null,
          "C",
          "?",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = D."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "A",
          null,
          "C",
          "D",
          null
        ],
        [
          null,
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "D",
          "E",
          "?",
          "C"
        ],
        [
          "C",
          "A",
          null,
          null,
          null
        ],
        [
          "D",
          "C",
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = A."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          null,
          "B",
          null,
          "A"
        ],
        [
          "B",
          null,
          "E",
          null,
          "D"
        ],
        [
          "E",
          "D",
          "C",
          null,
          "B"
        ],
        [
          "?",
          null,
          null,
          "D",
          "E"
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = C."
    },
    {
      "qNum": 7,
      "grid": [
        [
          null,
          null,
          "?",
          "B",
          "E"
        ],
        [
          "A",
          null,
          null,
          "C",
          "B"
        ],
        [
          "B",
          "C",
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          "E",
          "A"
        ],
        [
          "E",
          "B",
          "A",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = C."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "B",
          "A",
          null,
          "?",
          "E"
        ],
        [
          "C",
          "D",
          null,
          "E",
          null
        ],
        [
          null,
          null,
          "E",
          null,
          null
        ],
        [
          "D",
          "E",
          "A",
          "B",
          null
        ],
        [
          null,
          null,
          null,
          "A",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "C",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = C."
    },
    {
      "qNum": 9,
      "grid": [
        [
          null,
          null,
          null,
          null,
          "B"
        ],
        [
          null,
          "E",
          "D",
          "B",
          null
        ],
        [
          "C",
          "B",
          "A",
          "D",
          "E"
        ],
        [
          null,
          "?",
          "B",
          "E",
          "A"
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = C."
    },
    {
      "qNum": 10,
      "grid": [
        [
          null,
          null,
          null,
          "?",
          null
        ],
        [
          "A",
          "D",
          null,
          "C",
          "E"
        ],
        [
          "D",
          "E",
          "C",
          null,
          null
        ],
        [
          "B",
          "C",
          null,
          "E",
          "A"
        ],
        [
          null,
          "A",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = D."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "E",
          null,
          "C",
          "A",
          null
        ],
        [
          null,
          null,
          "E",
          "C",
          "A"
        ],
        [
          null,
          "A",
          "D",
          null,
          "C"
        ],
        [
          null,
          "?",
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          "B",
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = E."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          "D",
          "A",
          "B",
          "E"
        ],
        [
          "D",
          "?",
          null,
          null,
          null
        ],
        [
          "E",
          null,
          "D",
          "C",
          "A"
        ],
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "A",
          "C",
          "B",
          "E",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = E."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "?",
          "B",
          null,
          null,
          null
        ],
        [
          null,
          "A",
          null,
          "D",
          "E"
        ],
        [
          "D",
          null,
          "C",
          null,
          "B"
        ],
        [
          null,
          "D",
          "E",
          null,
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = A."
    },
    {
      "qNum": 14,
      "grid": [
        [
          null,
          "C",
          "E",
          "A",
          null
        ],
        [
          "A",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "A",
          "B",
          "D"
        ],
        [
          "B",
          null,
          "?",
          "E",
          null
        ],
        [
          "E",
          "A",
          "B",
          "D",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 4 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, γ) = C."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "E",
          "C",
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          "C",
          "E"
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ],
        [
          "B",
          "A",
          "C",
          null,
          "D"
        ],
        [
          "?",
          "B",
          "E",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = C."
    },
    {
      "qNum": 16,
      "grid": [
        [
          "A",
          "D",
          "E",
          "B",
          "C"
        ],
        [
          "D",
          "B",
          "C",
          "E",
          null
        ],
        [
          "E",
          null,
          null,
          null,
          "B"
        ],
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          "D",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = E."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "E",
          "C",
          null,
          "D",
          "B"
        ],
        [
          "B",
          "A",
          null,
          null,
          null
        ],
        [
          null,
          "B",
          "D",
          null,
          "A"
        ],
        [
          null,
          "?",
          null,
          "B",
          null
        ],
        [
          "D",
          null,
          "B",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = D."
    },
    {
      "qNum": 18,
      "grid": [
        [
          null,
          "B",
          "D",
          "A",
          null
        ],
        [
          "B",
          "A",
          null,
          "?",
          "E"
        ],
        [
          "D",
          null,
          null,
          "E",
          null
        ],
        [
          "A",
          "D",
          "E",
          null,
          null
        ],
        [
          "C",
          "E",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = D."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "B",
          "A",
          null,
          "E",
          null
        ],
        [
          "A",
          null,
          null,
          "D",
          null
        ],
        [
          "C",
          "B",
          "D",
          null,
          null
        ],
        [
          "E",
          "D",
          "A",
          null,
          "?"
        ],
        [
          null,
          null,
          "E",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = B."
    },
    {
      "qNum": 20,
      "grid": [
        [
          "D",
          "E",
          "B",
          null,
          null
        ],
        [
          null,
          null,
          null,
          "E",
          "D"
        ],
        [
          null,
          "B",
          "C",
          null,
          "A"
        ],
        [
          null,
          "A",
          null,
          "?",
          "E"
        ],
        [
          "A",
          null,
          "E",
          "C",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = B."
    }
  ],
  "medium_t5": [
    {
      "qNum": 1,
      "grid": [
        [
          "E",
          null,
          "D",
          null,
          "B"
        ],
        [
          null,
          "A",
          null,
          "D",
          "E"
        ],
        [
          "A",
          null,
          "E",
          "B",
          null
        ],
        [
          "D",
          null,
          "C",
          null,
          null
        ],
        [
          "?",
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = B."
    },
    {
      "qNum": 2,
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "D",
          "A",
          null,
          null,
          "B"
        ],
        [
          "B",
          "E",
          "D",
          "C",
          "A"
        ],
        [
          "?",
          "D",
          null,
          null,
          "C"
        ],
        [
          null,
          "C",
          null,
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "E",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = E."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          null,
          null,
          "A",
          null
        ],
        [
          "A",
          null,
          "?",
          null,
          "E"
        ],
        [
          null,
          "E",
          "A",
          "C",
          "B"
        ],
        [
          "B",
          null,
          null,
          null,
          "A"
        ],
        [
          null,
          "A",
          "B",
          "E",
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = C."
    },
    {
      "qNum": 4,
      "grid": [
        [
          null,
          "C",
          "?",
          null,
          null
        ],
        [
          "C",
          "A",
          null,
          "D",
          "B"
        ],
        [
          "D",
          null,
          "C",
          null,
          "A"
        ],
        [
          "E",
          "B",
          "A",
          "C",
          null
        ],
        [
          null,
          "D",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = D."
    },
    {
      "qNum": 5,
      "grid": [
        [
          null,
          "B",
          null,
          null,
          null
        ],
        [
          null,
          "A",
          null,
          null,
          "C"
        ],
        [
          null,
          "E",
          "B",
          "D",
          "A"
        ],
        [
          "D",
          null,
          null,
          "A",
          "?"
        ],
        [
          "A",
          "D",
          "C",
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = B."
    },
    {
      "qNum": 6,
      "grid": [
        [
          "B",
          "A",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          "E",
          null,
          "A"
        ],
        [
          null,
          "E",
          null,
          null,
          null
        ],
        [
          "D",
          "?",
          null,
          "E",
          null
        ],
        [
          "E",
          "D",
          "B",
          "A",
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = C."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "E",
          null,
          "D",
          "C",
          "A"
        ],
        [
          "A",
          null,
          "?",
          "D",
          null
        ],
        [
          "C",
          null,
          "B",
          null,
          null
        ],
        [
          null,
          null,
          "A",
          "E",
          null
        ],
        [
          "D",
          "A",
          null,
          null,
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = E."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "B",
          "E",
          null,
          "C",
          "A"
        ],
        [
          null,
          "A",
          "C",
          "E",
          null
        ],
        [
          null,
          null,
          "E",
          "?",
          null
        ],
        [
          null,
          null,
          "B",
          "D",
          "E"
        ],
        [
          null,
          "D",
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = A."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "?",
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "C",
          null,
          null,
          null
        ],
        [
          "B",
          "D",
          "E",
          null,
          "C"
        ],
        [
          "A",
          "E",
          null,
          "D",
          null
        ],
        [
          "C",
          "A",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "E",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = E."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "E",
          null,
          "C",
          null,
          null
        ],
        [
          "D",
          null,
          "A",
          null,
          "B"
        ],
        [
          null,
          "B",
          null,
          "C",
          "D"
        ],
        [
          null,
          "A",
          "B",
          "?",
          null
        ],
        [
          "B",
          "E",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = D."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "E",
          "C",
          null,
          null,
          "?"
        ],
        [
          "C",
          "B",
          null,
          null,
          null
        ],
        [
          "A",
          "D",
          "B",
          null,
          "E"
        ],
        [
          null,
          "A",
          "C",
          null,
          null
        ],
        [
          "D",
          null,
          null,
          "B",
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = B."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          "C",
          "B",
          "D",
          null
        ],
        [
          null,
          null,
          null,
          null,
          "C"
        ],
        [
          "D",
          null,
          "?",
          "C",
          "B"
        ],
        [
          null,
          "B",
          "D",
          "A",
          "E"
        ],
        [
          "A",
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 3 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, γ) = E."
    },
    {
      "qNum": 13,
      "grid": [
        [
          null,
          "D",
          null,
          null,
          null
        ],
        [
          "D",
          "B",
          "E",
          null,
          "?"
        ],
        [
          null,
          "E",
          "A",
          null,
          null
        ],
        [
          "E",
          null,
          "C",
          null,
          null
        ],
        [
          "A",
          "C",
          "D",
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "A",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = A."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "C",
          null,
          null,
          "B",
          "E"
        ],
        [
          "A",
          null,
          null,
          null,
          "D"
        ],
        [
          "B",
          null,
          "E",
          "D",
          null
        ],
        [
          "E",
          "D",
          null,
          null,
          null
        ],
        [
          "D",
          "B",
          "A",
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "E",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = E."
    },
    {
      "qNum": 15,
      "grid": [
        [
          null,
          "A",
          null,
          null,
          "D"
        ],
        [
          "E",
          "B",
          "C",
          "D",
          "A"
        ],
        [
          null,
          "C",
          "E",
          "A",
          null
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ],
        [
          null,
          "E",
          "?",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = D."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          "B",
          "D",
          "A",
          "E"
        ],
        [
          "E",
          "D",
          "C",
          "B",
          null
        ],
        [
          "B",
          null,
          "?",
          null,
          "D"
        ],
        [
          "A",
          "C",
          null,
          null,
          null
        ],
        [
          null,
          null,
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "A",
      "explanation": "Row 3 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, γ) = A."
    },
    {
      "qNum": 17,
      "grid": [
        [
          null,
          null,
          null,
          "D",
          "?"
        ],
        [
          "E",
          "C",
          null,
          null,
          null
        ],
        [
          "D",
          "E",
          null,
          "A",
          "B"
        ],
        [
          null,
          "D",
          "E",
          "C",
          "A"
        ],
        [
          null,
          "B",
          "D",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = E."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "C",
          "B",
          "A",
          null,
          "D"
        ],
        [
          null,
          null,
          "C",
          null,
          null
        ],
        [
          "B",
          "A",
          null,
          "C",
          null
        ],
        [
          "E",
          "C",
          "?",
          null,
          "A"
        ],
        [
          "A",
          "D",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 4 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, γ) = B."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "B",
          "E",
          null,
          null,
          "D"
        ],
        [
          "C",
          "A",
          "D",
          null,
          "?"
        ],
        [
          "D",
          null,
          "E",
          null,
          "A"
        ],
        [
          "A",
          null,
          "C",
          null,
          null
        ],
        [
          "E",
          null,
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = B."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          "B",
          "D",
          null,
          "C"
        ],
        [
          "?",
          null,
          null,
          "C",
          null
        ],
        [
          "B",
          "D",
          null,
          null,
          "A"
        ],
        [
          "D",
          "C",
          "A",
          "B",
          "E"
        ],
        [
          null,
          "A",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = A."
    }
  ],
  "hard_t1": [
    {
      "qNum": 1,
      "grid": [
        [
          null,
          null,
          null,
          "B",
          "C"
        ],
        [
          null,
          "B",
          null,
          "C",
          null
        ],
        [
          null,
          null,
          "?",
          "E",
          null
        ],
        [
          "A",
          "E",
          "C",
          null,
          null
        ],
        [
          "B",
          null,
          "D",
          "A",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 3 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, γ) = B."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "B",
          "E",
          null,
          null,
          null
        ],
        [
          null,
          "C",
          null,
          "D",
          null
        ],
        [
          null,
          "B",
          "D",
          "E",
          null
        ],
        [
          null,
          "A",
          null,
          null,
          "?"
        ],
        [
          "C",
          "D",
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = E."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          null,
          "D",
          null,
          "E"
        ],
        [
          "E",
          null,
          "C",
          "B",
          "A"
        ],
        [
          null,
          null,
          null,
          "?",
          "B"
        ],
        [
          "D",
          null,
          null,
          null,
          "C"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = D."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "?",
          "A",
          null,
          "D",
          null
        ],
        [
          null,
          null,
          null,
          "C",
          "A"
        ],
        [
          null,
          "C",
          "A",
          null,
          null
        ],
        [
          null,
          "E",
          "C",
          "A",
          null
        ],
        [
          null,
          "B",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = C."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "B",
          "D",
          "E",
          "A",
          "C"
        ],
        [
          null,
          "E",
          "B",
          null,
          "A"
        ],
        [
          null,
          "C",
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          "?"
        ],
        [
          "E",
          null,
          null,
          null,
          "B"
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "D",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = D."
    },
    {
      "qNum": 6,
      "grid": [
        [
          "C",
          "E",
          null,
          "B",
          null
        ],
        [
          null,
          "C",
          null,
          "E",
          "B"
        ],
        [
          "A",
          null,
          null,
          null,
          "?"
        ],
        [
          "B",
          "A",
          "E",
          null,
          null
        ],
        [
          "E",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = E."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "?",
          null,
          null,
          null,
          null
        ],
        [
          "E",
          null,
          "B",
          null,
          "D"
        ],
        [
          null,
          null,
          "E",
          "C",
          null
        ],
        [
          null,
          "A",
          "C",
          "D",
          "E"
        ],
        [
          null,
          null,
          null,
          "B",
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = C."
    },
    {
      "qNum": 8,
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "A",
          "C"
        ],
        [
          "E",
          null,
          "A",
          null,
          "?"
        ],
        [
          null,
          "B",
          "E",
          null,
          null
        ],
        [
          "D",
          "A",
          "C",
          "B",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = B."
    },
    {
      "qNum": 9,
      "grid": [
        [
          null,
          "B",
          null,
          null,
          null
        ],
        [
          null,
          "A",
          null,
          "C",
          "D"
        ],
        [
          null,
          "D",
          null,
          null,
          "?"
        ],
        [
          "D",
          "E",
          null,
          "B",
          "C"
        ],
        [
          "B",
          "C",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = B."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "D",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "D",
          null,
          "B"
        ],
        [
          "B",
          null,
          null,
          "?",
          "E"
        ],
        [
          "C",
          null,
          null,
          "B",
          "D"
        ],
        [
          "E",
          "D",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = D."
    },
    {
      "qNum": 11,
      "grid": [
        [
          null,
          null,
          "A",
          "D",
          null
        ],
        [
          null,
          "A",
          null,
          "C",
          null
        ],
        [
          null,
          "E",
          "D",
          "B",
          "C"
        ],
        [
          null,
          "?",
          null,
          "E",
          "A"
        ],
        [
          null,
          null,
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = D."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "B",
          null,
          null,
          "A",
          "C"
        ],
        [
          "C",
          "A",
          "B",
          null,
          "D"
        ],
        [
          null,
          "C",
          null,
          null,
          "B"
        ],
        [
          null,
          "?",
          null,
          "C",
          "E"
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = B."
    },
    {
      "qNum": 13,
      "grid": [
        [
          null,
          null,
          null,
          "?",
          null
        ],
        [
          "A",
          null,
          null,
          "B",
          null
        ],
        [
          "C",
          "A",
          "D",
          "E",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "E"
        ],
        [
          "B",
          "D",
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = D."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "B",
          "E",
          null,
          "D",
          "C"
        ],
        [
          null,
          null,
          null,
          "B",
          null
        ],
        [
          "C",
          null,
          null,
          "E",
          "A"
        ],
        [
          "E",
          null,
          "C",
          "A",
          null
        ],
        [
          null,
          "?",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = A."
    },
    {
      "qNum": 15,
      "grid": [
        [
          null,
          null,
          "E",
          "A",
          "D"
        ],
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          "B",
          null,
          "E",
          "?"
        ],
        [
          "A",
          null,
          "B",
          "C",
          "E"
        ],
        [
          null,
          "E",
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "A",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = A."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          null,
          "E",
          "B",
          "D"
        ],
        [
          null,
          null,
          null,
          "D",
          "C"
        ],
        [
          "C",
          null,
          null,
          null,
          "B"
        ],
        [
          null,
          "E",
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "?",
          "A",
          "E"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = C."
    },
    {
      "qNum": 17,
      "grid": [
        [
          null,
          null,
          "B",
          null,
          "C"
        ],
        [
          null,
          "A",
          null,
          "C",
          "E"
        ],
        [
          "C",
          "B",
          null,
          null,
          null
        ],
        [
          null,
          "C",
          "A",
          null,
          "?"
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = B."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "D",
          "C",
          null,
          null,
          null
        ],
        [
          null,
          "B",
          "C",
          "?",
          null
        ],
        [
          null,
          null,
          "A",
          null,
          null
        ],
        [
          null,
          "A",
          "B",
          "E",
          "D"
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = D."
    },
    {
      "qNum": 19,
      "grid": [
        [
          null,
          "?",
          null,
          null,
          "B"
        ],
        [
          null,
          "B",
          null,
          "C",
          null
        ],
        [
          "C",
          "D",
          "A",
          null,
          "E"
        ],
        [
          null,
          null,
          "B",
          "E",
          null
        ],
        [
          "B",
          null,
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = E."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          null,
          "D",
          null,
          "?"
        ],
        [
          "D",
          "A",
          null,
          "C",
          "E"
        ],
        [
          null,
          "D",
          null,
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "A",
          "D"
        ],
        [
          "A",
          null,
          null,
          "D",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "A",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = A."
    }
  ],
  "hard_t2": [
    {
      "qNum": 1,
      "grid": [
        [
          "D",
          "A",
          "E",
          null,
          null
        ],
        [
          null,
          "?",
          null,
          "E",
          "A"
        ],
        [
          null,
          null,
          null,
          "D",
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          null
        ],
        [
          null,
          null,
          "D",
          "A",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = D."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "B",
          null,
          null,
          "D",
          null
        ],
        [
          "A",
          "C",
          null,
          "E",
          null
        ],
        [
          null,
          "?",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          "E",
          null,
          "B"
        ],
        [
          "E",
          null,
          null,
          "B",
          "C"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = B."
    },
    {
      "qNum": 3,
      "grid": [
        [
          "C",
          "B",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          null,
          null,
          "C"
        ],
        [
          "A",
          null,
          "D",
          "E",
          null
        ],
        [
          null,
          null,
          "C",
          null,
          "D"
        ],
        [
          null,
          "D",
          null,
          "?",
          "A"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "C",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = C."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "D",
          null,
          "E",
          "A",
          null
        ],
        [
          null,
          "A",
          "D",
          null,
          "E"
        ],
        [
          null,
          "E",
          null,
          "D",
          null
        ],
        [
          "E",
          "D",
          null,
          null,
          null
        ],
        [
          null,
          "C",
          null,
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "E",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = E."
    },
    {
      "qNum": 5,
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "C",
          null,
          "E"
        ],
        [
          "D",
          null,
          null,
          "C",
          null
        ],
        [
          "E",
          "C",
          "D",
          "A",
          "B"
        ],
        [
          "?",
          null,
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = C."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          "E",
          "A",
          null,
          null
        ],
        [
          null,
          "D",
          null,
          null,
          "C"
        ],
        [
          "D",
          "A",
          null,
          null,
          null
        ],
        [
          "E",
          null,
          "C",
          null,
          "A"
        ],
        [
          "?",
          "C",
          null,
          "E",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = A."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "E",
          "?",
          null,
          null,
          null
        ],
        [
          "B",
          null,
          "A",
          null,
          "E"
        ],
        [
          "A",
          null,
          "E",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "A",
          null
        ],
        [
          "C",
          null,
          null,
          "E",
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = A."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "E",
          null,
          null,
          "A",
          null
        ],
        [
          null,
          "C",
          "E",
          null,
          null
        ],
        [
          "B",
          null,
          "A",
          null,
          "C"
        ],
        [
          null,
          "?",
          "B",
          "C",
          null
        ],
        [
          "C",
          null,
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = A."
    },
    {
      "qNum": 9,
      "grid": [
        [
          null,
          null,
          "A",
          null,
          null
        ],
        [
          null,
          "C",
          "D",
          "E",
          "B"
        ],
        [
          "B",
          "A",
          null,
          "D",
          null
        ],
        [
          null,
          null,
          "B",
          null,
          null
        ],
        [
          null,
          "D",
          null,
          "B",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "A",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = A."
    },
    {
      "qNum": 10,
      "grid": [
        [
          null,
          null,
          "B",
          null,
          "A"
        ],
        [
          null,
          "D",
          "E",
          "A",
          null
        ],
        [
          null,
          "B",
          null,
          "D",
          null
        ],
        [
          "A",
          null,
          "D",
          "B",
          null
        ],
        [
          null,
          null,
          "?",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = C."
    },
    {
      "qNum": 11,
      "grid": [
        [
          null,
          null,
          "C",
          "?",
          "E"
        ],
        [
          "E",
          "C",
          "B",
          null,
          "A"
        ],
        [
          "C",
          null,
          null,
          null,
          null
        ],
        [
          null,
          "B",
          null,
          null,
          "C"
        ],
        [
          "B",
          null,
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = B."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          "C",
          "A",
          "B",
          null
        ],
        [
          "A",
          "D",
          null,
          "E",
          null
        ],
        [
          "?",
          null,
          null,
          null,
          null
        ],
        [
          null,
          "A",
          "E",
          "C",
          null
        ],
        [
          null,
          null,
          "C",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = C."
    },
    {
      "qNum": 13,
      "grid": [
        [
          null,
          "?",
          "A",
          null,
          "B"
        ],
        [
          null,
          null,
          null,
          null,
          "E"
        ],
        [
          null,
          "C",
          null,
          null,
          "A"
        ],
        [
          "D",
          null,
          null,
          "A",
          "C"
        ],
        [
          "A",
          null,
          "C",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = D."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "A",
          null,
          null,
          "C",
          null
        ],
        [
          "B",
          null,
          "C",
          "D",
          null
        ],
        [
          "E",
          "C",
          null,
          "A",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "?"
        ],
        [
          null,
          "D",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = C."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "B",
          "D",
          null,
          "E",
          "C"
        ],
        [
          null,
          "C",
          "E",
          "B",
          null
        ],
        [
          null,
          "B",
          null,
          null,
          null
        ],
        [
          null,
          null,
          "B",
          null,
          null
        ],
        [
          "A",
          "E",
          null,
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = B."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          null,
          "E",
          "D",
          "B"
        ],
        [
          null,
          "?",
          "B",
          null,
          "A"
        ],
        [
          null,
          null,
          "D",
          null,
          "C"
        ],
        [
          null,
          null,
          null,
          null,
          "D"
        ],
        [
          "D",
          null,
          null,
          "A",
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = D."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "B",
          null,
          "?",
          null,
          null
        ],
        [
          "C",
          "B",
          null,
          "D",
          null
        ],
        [
          null,
          "D",
          "B",
          "C",
          null
        ],
        [
          null,
          null,
          "D",
          null,
          "B"
        ],
        [
          null,
          null,
          null,
          "B",
          "C"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = C."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "C",
          "A",
          null,
          null,
          "B"
        ],
        [
          "E",
          null,
          "D",
          "A",
          null
        ],
        [
          null,
          "D",
          null,
          null,
          null
        ],
        [
          "?",
          "C",
          null,
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "C",
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "D",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = D."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "C",
          "E",
          "B",
          "D",
          "A"
        ],
        [
          null,
          "C",
          null,
          null,
          null
        ],
        [
          null,
          null,
          "E",
          "?",
          "C"
        ],
        [
          "E",
          "A",
          null,
          null,
          null
        ],
        [
          "A",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = A."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          "C",
          "E",
          "D",
          null
        ],
        [
          "?",
          "B",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          "B",
          "E",
          "C"
        ],
        [
          null,
          null,
          "D",
          null,
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "D",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = D."
    }
  ],
  "hard_t3": [
    {
      "qNum": 1,
      "grid": [
        [
          "B",
          null,
          "E",
          null,
          null
        ],
        [
          null,
          null,
          null,
          "C",
          "B"
        ],
        [
          null,
          null,
          "C",
          null,
          "D"
        ],
        [
          "C",
          "B",
          null,
          null,
          "A"
        ],
        [
          null,
          "?",
          "B",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = C."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "E",
          null,
          null,
          null,
          null
        ],
        [
          "A",
          "D",
          null,
          null,
          null
        ],
        [
          null,
          "E",
          "D",
          "A",
          null
        ],
        [
          null,
          null,
          null,
          "E",
          "D"
        ],
        [
          null,
          "B",
          "E",
          "?",
          "A"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "C",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = C."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          "D",
          null,
          null,
          null
        ],
        [
          "A",
          "C",
          null,
          "E",
          "D"
        ],
        [
          "E",
          null,
          "D",
          "?",
          "C"
        ],
        [
          null,
          null,
          null,
          "D",
          "A"
        ],
        [
          null,
          null,
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = B."
    },
    {
      "qNum": 4,
      "grid": [
        [
          null,
          "D",
          "B",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "A",
          "B"
        ],
        [
          null,
          "A",
          "C",
          null,
          "D"
        ],
        [
          "?",
          "B",
          null,
          null,
          null
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = C."
    },
    {
      "qNum": 5,
      "grid": [
        [
          "E",
          null,
          "A",
          "C",
          "D"
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          null,
          "?",
          "B",
          null,
          null
        ],
        [
          null,
          null,
          "E",
          null,
          "B"
        ],
        [
          "A",
          null,
          null,
          "B",
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = E."
    },
    {
      "qNum": 6,
      "grid": [
        [
          "A",
          "D",
          null,
          "C",
          null
        ],
        [
          "B",
          "A",
          null,
          "D",
          null
        ],
        [
          null,
          null,
          null,
          "B",
          "?"
        ],
        [
          null,
          null,
          "D",
          "A",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "D",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = D."
    },
    {
      "qNum": 7,
      "grid": [
        [
          "C",
          null,
          "D",
          "B",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "?"
        ],
        [
          "A",
          null,
          "E",
          "D",
          null
        ],
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          "E",
          "C",
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = B."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "B",
          "D",
          null,
          "A",
          "C"
        ],
        [
          null,
          "?",
          "C",
          null,
          "A"
        ],
        [
          null,
          null,
          "D",
          null,
          null
        ],
        [
          null,
          null,
          "B",
          null,
          "E"
        ],
        [
          null,
          null,
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = B."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "C",
          null,
          null,
          "B",
          "D"
        ],
        [
          null,
          "C",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          "D",
          null,
          null
        ],
        [
          "D",
          "?",
          null,
          "E",
          null
        ],
        [
          "E",
          "D",
          null,
          "A",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = B."
    },
    {
      "qNum": 10,
      "grid": [
        [
          null,
          null,
          "A",
          "C",
          null
        ],
        [
          "C",
          null,
          null,
          null,
          "?"
        ],
        [
          null,
          "E",
          null,
          "A",
          null
        ],
        [
          "A",
          "C",
          "D",
          "E",
          "B"
        ],
        [
          null,
          "A",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "A",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = A."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "D",
          null,
          "E",
          "A",
          "C"
        ],
        [
          null,
          null,
          "?",
          null,
          "B"
        ],
        [
          null,
          null,
          null,
          "D",
          null
        ],
        [
          "B",
          null,
          "D",
          null,
          null
        ],
        [
          "A",
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "A",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = A."
    },
    {
      "qNum": 12,
      "grid": [
        [
          "?",
          null,
          null,
          "D",
          null
        ],
        [
          null,
          "A",
          null,
          "E",
          "C"
        ],
        [
          null,
          "D",
          "C",
          "A",
          null
        ],
        [
          "C",
          null,
          "A",
          "B",
          null
        ],
        [
          null,
          null,
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = A."
    },
    {
      "qNum": 13,
      "grid": [
        [
          null,
          null,
          null,
          "D",
          "B"
        ],
        [
          "C",
          "D",
          "A",
          null,
          "E"
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ],
        [
          "?",
          null,
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "D",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = D."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "E",
          null,
          "?",
          "B",
          "C"
        ],
        [
          null,
          "C",
          "B",
          null,
          null
        ],
        [
          "B",
          null,
          "C",
          null,
          null
        ],
        [
          null,
          "B",
          null,
          null,
          "E"
        ],
        [
          "C",
          null,
          null,
          "A",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = D."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "B",
          "A",
          null,
          "C",
          null
        ],
        [
          "A",
          null,
          null,
          "D",
          null
        ],
        [
          "C",
          null,
          null,
          null,
          "B"
        ],
        [
          null,
          "B",
          "C",
          null,
          "A"
        ],
        [
          null,
          null,
          "?",
          "B",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "A",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = A."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          "D",
          null,
          "E",
          "B"
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ],
        [
          null,
          null,
          null,
          null,
          "?"
        ],
        [
          null,
          "C",
          "B",
          "A",
          null
        ],
        [
          null,
          "B",
          "E",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = E."
    },
    {
      "qNum": 17,
      "grid": [
        [
          null,
          null,
          null,
          null,
          "B"
        ],
        [
          null,
          "E",
          "C",
          null,
          null
        ],
        [
          "D",
          "A",
          "B",
          null,
          "E"
        ],
        [
          "?",
          null,
          "E",
          null,
          "C"
        ],
        [
          "E",
          null,
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = A."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "D",
          null,
          "C",
          "A",
          "E"
        ],
        [
          null,
          "A",
          null,
          null,
          "C"
        ],
        [
          null,
          "D",
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "?",
          null,
          "B"
        ],
        [
          "A",
          null,
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "A",
      "explanation": "Row 4 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, γ) = A."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "D",
          null,
          null,
          null,
          "?"
        ],
        [
          "B",
          null,
          null,
          "E",
          null
        ],
        [
          "C",
          null,
          "E",
          null,
          null
        ],
        [
          "E",
          null,
          "A",
          "D",
          null
        ],
        [
          "A",
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = E."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          "A",
          null,
          "B",
          "C"
        ],
        [
          null,
          null,
          "A",
          "C",
          null
        ],
        [
          "C",
          null,
          null,
          null,
          null
        ],
        [
          null,
          "?",
          null,
          "E",
          null
        ],
        [
          "B",
          "E",
          null,
          "D",
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = C."
    }
  ],
  "hard_t4": [
    {
      "qNum": 1,
      "grid": [
        [
          null,
          "E",
          "B",
          null,
          null
        ],
        [
          "C",
          null,
          null,
          "?",
          "E"
        ],
        [
          null,
          "B",
          null,
          null,
          "C"
        ],
        [
          "B",
          "C",
          null,
          "D",
          "A"
        ],
        [
          null,
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = B."
    },
    {
      "qNum": 2,
      "grid": [
        [
          null,
          null,
          "?",
          "D",
          null
        ],
        [
          null,
          null,
          "C",
          null,
          "D"
        ],
        [
          null,
          "C",
          "A",
          "E",
          "B"
        ],
        [
          null,
          "D",
          null,
          "A",
          null
        ],
        [
          "B",
          null,
          null,
          "C",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = E."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          "C",
          "B",
          "A",
          null
        ],
        [
          null,
          "D",
          "C",
          null,
          null
        ],
        [
          null,
          null,
          "E",
          "D",
          null
        ],
        [
          "B",
          null,
          null,
          "C",
          null
        ],
        [
          null,
          "B",
          null,
          "E",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = C."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "B",
          "D",
          "A",
          "C",
          null
        ],
        [
          null,
          "C",
          "D",
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          "?",
          "C"
        ],
        [
          "D",
          "E",
          "C",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = D."
    },
    {
      "qNum": 5,
      "grid": [
        [
          null,
          "D",
          "C",
          null,
          null
        ],
        [
          null,
          "B",
          "E",
          null,
          "C"
        ],
        [
          "D",
          "C",
          "A",
          null,
          null
        ],
        [
          null,
          null,
          "B",
          null,
          "?"
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "D",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = D."
    },
    {
      "qNum": 6,
      "grid": [
        [
          null,
          "?",
          "D",
          null,
          null
        ],
        [
          "C",
          "B",
          null,
          null,
          null
        ],
        [
          "B",
          null,
          null,
          null,
          "C"
        ],
        [
          "D",
          null,
          "C",
          "A",
          "B"
        ],
        [
          null,
          null,
          "B",
          "C",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = C."
    },
    {
      "qNum": 7,
      "grid": [
        [
          null,
          "D",
          null,
          null,
          "E"
        ],
        [
          "C",
          null,
          "D",
          "B",
          null
        ],
        [
          "D",
          "A",
          null,
          null,
          "B"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ],
        [
          null,
          null,
          null,
          "?",
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = D."
    },
    {
      "qNum": 8,
      "grid": [
        [
          null,
          null,
          null,
          "D",
          "A"
        ],
        [
          null,
          "A",
          "B",
          null,
          "D"
        ],
        [
          "A",
          null,
          null,
          "B",
          "E"
        ],
        [
          null,
          "?",
          "A",
          "E",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = D."
    },
    {
      "qNum": 9,
      "grid": [
        [
          "C",
          null,
          "D",
          "E",
          null
        ],
        [
          null,
          null,
          null,
          null,
          "E"
        ],
        [
          "A",
          null,
          "B",
          null,
          "C"
        ],
        [
          "E",
          "D",
          null,
          null,
          null
        ],
        [
          null,
          "C",
          "E",
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = A."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "D",
          null,
          null,
          null,
          null
        ],
        [
          "C",
          "D",
          "E",
          "A",
          "B"
        ],
        [
          null,
          null,
          "D",
          null,
          null
        ],
        [
          null,
          null,
          "C",
          "?",
          "A"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = D."
    },
    {
      "qNum": 11,
      "grid": [
        [
          null,
          null,
          null,
          "C",
          "A"
        ],
        [
          null,
          "?",
          null,
          "E",
          "C"
        ],
        [
          "C",
          "E",
          "A",
          null,
          "B"
        ],
        [
          "A",
          null,
          null,
          "B",
          "E"
        ],
        [
          null,
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = A."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          null,
          "B",
          null,
          null
        ],
        [
          null,
          "E",
          null,
          null,
          "A"
        ],
        [
          "B",
          "D",
          "E",
          null,
          "C"
        ],
        [
          "?",
          "B",
          null,
          null,
          null
        ],
        [
          "E",
          "C",
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = A."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "A",
          null,
          null,
          null,
          null
        ],
        [
          null,
          "D",
          "A",
          "B",
          "C"
        ],
        [
          "B",
          null,
          "D",
          "C",
          null
        ],
        [
          "C",
          "?",
          "E",
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          "B"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = B."
    },
    {
      "qNum": 14,
      "grid": [
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          "D",
          "E",
          null,
          "B",
          null
        ],
        [
          "A",
          null,
          "C",
          "E",
          null
        ],
        [
          "C",
          null,
          null,
          "?",
          null
        ],
        [
          "E",
          null,
          null,
          "C",
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = D."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "A",
          "E",
          "B",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "?",
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          null
        ],
        [
          "C",
          null,
          "A",
          null,
          null
        ],
        [
          null,
          "A",
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = A."
    },
    {
      "qNum": 16,
      "grid": [
        [
          "A",
          "C",
          "B",
          null,
          "D"
        ],
        [
          "C",
          null,
          "E",
          "D",
          "A"
        ],
        [
          null,
          null,
          null,
          null,
          "?"
        ],
        [
          null,
          "D",
          null,
          "C",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = C."
    },
    {
      "qNum": 17,
      "grid": [
        [
          "E",
          null,
          null,
          "D",
          "A"
        ],
        [
          null,
          null,
          "E",
          "C",
          "D"
        ],
        [
          "D",
          null,
          "A",
          "B",
          "?"
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          null,
          "D",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = C."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "C",
          "B",
          "E",
          "D",
          null
        ],
        [
          null,
          null,
          "B",
          "C",
          null
        ],
        [
          null,
          "D",
          null,
          null,
          null
        ],
        [
          "A",
          null,
          "D",
          "B",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = B."
    },
    {
      "qNum": 19,
      "grid": [
        [
          null,
          null,
          "E",
          null,
          "D"
        ],
        [
          "E",
          null,
          "C",
          null,
          null
        ],
        [
          null,
          "?",
          "A",
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ],
        [
          "D",
          "C",
          "B",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = D."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          "B",
          null,
          "?",
          null
        ],
        [
          null,
          "C",
          null,
          "E",
          "B"
        ],
        [
          "C",
          "E",
          null,
          null,
          null
        ],
        [
          null,
          "A",
          "E",
          null,
          null
        ],
        [
          null,
          "D",
          "B",
          "C",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = A."
    }
  ],
  "hard_t5": [
    {
      "qNum": 1,
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "A",
          null,
          "?",
          "E",
          null
        ],
        [
          "C",
          "A",
          "E",
          "D",
          null
        ],
        [
          "E",
          "B",
          null,
          null,
          null
        ],
        [
          "D",
          "E",
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = B."
    },
    {
      "qNum": 2,
      "grid": [
        [
          "D",
          "A",
          null,
          "C",
          "?"
        ],
        [
          "A",
          null,
          null,
          "B",
          null
        ],
        [
          null,
          null,
          null,
          "D",
          null
        ],
        [
          "B",
          null,
          "A",
          "E",
          "C"
        ],
        [
          null,
          "B",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = B."
    },
    {
      "qNum": 3,
      "grid": [
        [
          null,
          null,
          "?",
          null,
          "D"
        ],
        [
          "A",
          null,
          "B",
          "D",
          "C"
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          null,
          null,
          "A",
          "C",
          "E"
        ],
        [
          "E",
          null,
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = E."
    },
    {
      "qNum": 4,
      "grid": [
        [
          "A",
          "D",
          null,
          "B",
          null
        ],
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          "?",
          "C",
          null,
          null,
          "D"
        ],
        [
          null,
          "E",
          null,
          null,
          "B"
        ],
        [
          null,
          "A",
          "B",
          "D",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = B."
    },
    {
      "qNum": 5,
      "grid": [
        [
          null,
          "E",
          "D",
          null,
          "C"
        ],
        [
          "E",
          null,
          null,
          null,
          "A"
        ],
        [
          "?",
          null,
          "E",
          null,
          "D"
        ],
        [
          null,
          null,
          "C",
          "E",
          "B"
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = C."
    },
    {
      "qNum": 6,
      "grid": [
        [
          "B",
          "C",
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          "B"
        ],
        [
          "D",
          "E",
          "B",
          null,
          "C"
        ],
        [
          null,
          "?",
          "D",
          "C",
          null
        ],
        [
          null,
          null,
          "C",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = B."
    },
    {
      "qNum": 7,
      "grid": [
        [
          null,
          "A",
          "C",
          null,
          null
        ],
        [
          "E",
          null,
          "A",
          null,
          "B"
        ],
        [
          "C",
          "B",
          "E",
          null,
          "A"
        ],
        [
          null,
          null,
          null,
          null,
          "?"
        ],
        [
          "A",
          "C",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = C."
    },
    {
      "qNum": 8,
      "grid": [
        [
          "C",
          null,
          "D",
          null,
          "B"
        ],
        [
          null,
          "D",
          "C",
          "B",
          null
        ],
        [
          null,
          null,
          "A",
          "C",
          null
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ],
        [
          "?",
          null,
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = B."
    },
    {
      "qNum": 9,
      "grid": [
        [
          null,
          null,
          "D",
          null,
          null
        ],
        [
          "A",
          null,
          null,
          "C",
          null
        ],
        [
          null,
          null,
          "?",
          "A",
          "C"
        ],
        [
          null,
          "A",
          "C",
          "E",
          "B"
        ],
        [
          null,
          "B",
          null,
          "D",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 3 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, γ) = E."
    },
    {
      "qNum": 10,
      "grid": [
        [
          "C",
          "A",
          "E",
          null,
          "B"
        ],
        [
          "A",
          null,
          null,
          "B",
          "E"
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          "B",
          "E",
          "D",
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "D",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = D."
    },
    {
      "qNum": 11,
      "grid": [
        [
          "C",
          null,
          "A",
          null,
          null
        ],
        [
          "E",
          "D",
          "C",
          "B",
          null
        ],
        [
          "A",
          null,
          "D",
          null,
          null
        ],
        [
          null,
          null,
          "B",
          "A",
          null
        ],
        [
          null,
          "?",
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = A."
    },
    {
      "qNum": 12,
      "grid": [
        [
          null,
          "D",
          "E",
          null,
          "A"
        ],
        [
          null,
          null,
          "C",
          "D",
          "B"
        ],
        [
          "D",
          null,
          "A",
          "?",
          null
        ],
        [
          null,
          "B",
          "D",
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = B."
    },
    {
      "qNum": 13,
      "grid": [
        [
          "B",
          "C",
          null,
          null,
          "A"
        ],
        [
          null,
          "B",
          null,
          "C",
          null
        ],
        [
          null,
          "A",
          null,
          "B",
          null
        ],
        [
          "C",
          "E",
          null,
          null,
          "B"
        ],
        [
          null,
          null,
          "B",
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = C."
    },
    {
      "qNum": 14,
      "grid": [
        [
          null,
          null,
          "B",
          null,
          null
        ],
        [
          null,
          null,
          "A",
          "D",
          null
        ],
        [
          "E",
          "A",
          null,
          "C",
          "B"
        ],
        [
          "A",
          null,
          null,
          "?",
          "D"
        ],
        [
          "B",
          "D",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 4 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, δ) = B."
    },
    {
      "qNum": 15,
      "grid": [
        [
          "D",
          null,
          null,
          null,
          "B"
        ],
        [
          "?",
          null,
          "D",
          "B",
          null
        ],
        [
          null,
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "D",
          null,
          "A",
          "E"
        ],
        [
          null,
          null,
          null,
          "D",
          "A"
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = A."
    },
    {
      "qNum": 16,
      "grid": [
        [
          null,
          "?",
          null,
          null,
          null
        ],
        [
          "E",
          "D",
          null,
          "C",
          "B"
        ],
        [
          "A",
          null,
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          null,
          "A",
          "C"
        ],
        [
          null,
          null,
          "E",
          "D",
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = A."
    },
    {
      "qNum": 17,
      "grid": [
        [
          null,
          "A",
          null,
          null,
          "?"
        ],
        [
          "A",
          null,
          "E",
          null,
          "D"
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ],
        [
          "E",
          null,
          null,
          "C",
          null
        ],
        [
          "D",
          "B",
          null,
          "E",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = E."
    },
    {
      "qNum": 18,
      "grid": [
        [
          "?",
          null,
          null,
          "E",
          "B"
        ],
        [
          null,
          null,
          "E",
          "A",
          null
        ],
        [
          "A",
          null,
          null,
          "C",
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          null
        ],
        [
          "B",
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = C."
    },
    {
      "qNum": 19,
      "grid": [
        [
          "C",
          "B",
          null,
          null,
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          "A"
        ],
        [
          null,
          "A",
          null,
          null,
          null
        ],
        [
          "D",
          "E",
          null,
          null,
          "B"
        ],
        [
          "A",
          null,
          "?",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = B."
    },
    {
      "qNum": 20,
      "grid": [
        [
          null,
          "E",
          null,
          "?",
          null
        ],
        [
          null,
          null,
          "A",
          null,
          "E"
        ],
        [
          null,
          "A",
          null,
          null,
          null
        ],
        [
          "B",
          "D",
          "C",
          "E",
          null
        ],
        [
          "A",
          null,
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = A."
    }
  ],
  "sim_t1": [
    {
      "qNum": 1,
      "origin": "easy_t1_q1",
      "grid": [
        [
          null,
          "E",
          "D",
          "B",
          "C"
        ],
        [
          "C",
          "B",
          "A",
          null,
          "E"
        ],
        [
          "D",
          "C",
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "E",
          null,
          "D"
        ],
        [
          "E",
          null,
          "C",
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 5 and Column ε: Row contains {C, E} and Column contains {A, C, D, E}, leaving B as the only possible symbol for cell (5, ε)."
    },
    {
      "qNum": 2,
      "origin": "easy_t1_q4",
      "grid": [
        [
          "A",
          null,
          "D",
          "E",
          "C"
        ],
        [
          null,
          null,
          "B",
          "D",
          "A"
        ],
        [
          "C",
          "D",
          "E",
          "A",
          null
        ],
        [
          "D",
          "A",
          null,
          "B",
          null
        ],
        [
          null,
          "E",
          null,
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {E} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 3,
      "origin": "easy_t1_q8",
      "grid": [
        [
          null,
          null,
          null,
          "E",
          "B"
        ],
        [
          null,
          "B",
          "A",
          "?",
          "C"
        ],
        [
          null,
          "C",
          null,
          "B",
          null
        ],
        [
          "B",
          "A",
          null,
          "C",
          "E"
        ],
        [
          "C",
          "E",
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {A, B, C} and Column contains {B, C, E}, leaving D as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 4,
      "origin": "easy_t2_q3",
      "grid": [
        [
          "C",
          "B",
          "D",
          null,
          "A"
        ],
        [
          "D",
          null,
          "B",
          "A",
          "C"
        ],
        [
          "A",
          null,
          null,
          "B",
          null
        ],
        [
          "B",
          null,
          "E",
          "C",
          null
        ],
        [
          "?",
          "C",
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {A, C} and Column contains {A, B, C, D}, leaving E as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 5,
      "origin": "easy_t2_q6",
      "grid": [
        [
          "A",
          null,
          "C",
          null,
          "E"
        ],
        [
          "B",
          "C",
          "E",
          null,
          null
        ],
        [
          null,
          "A",
          "B",
          null,
          "D"
        ],
        [
          "D",
          "E",
          null,
          "C",
          "B"
        ],
        [
          "?",
          "B",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {B, C} and Column contains {A, B, D}, leaving E as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 6,
      "origin": "medium_t1_q2",
      "grid": [
        [
          "D",
          "B",
          "A",
          null,
          null
        ],
        [
          "?",
          null,
          "D",
          null,
          null
        ],
        [
          null,
          "C",
          "B",
          null,
          null
        ],
        [
          null,
          "D",
          null,
          "B",
          "A"
        ],
        [
          "B",
          "E",
          "C",
          "A",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "E",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = E."
    },
    {
      "qNum": 7,
      "origin": "medium_t1_q5",
      "grid": [
        [
          "?",
          "D",
          null,
          null,
          "A"
        ],
        [
          "E",
          null,
          null,
          "C",
          "D"
        ],
        [
          "A",
          "C",
          null,
          "D",
          null
        ],
        [
          "D",
          null,
          null,
          "B",
          null
        ],
        [
          null,
          "E",
          "D",
          null,
          "B"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = B."
    },
    {
      "qNum": 8,
      "origin": "medium_t1_q9",
      "grid": [
        [
          null,
          "C",
          "?",
          null,
          null
        ],
        [
          null,
          null,
          "D",
          "A",
          "C"
        ],
        [
          null,
          "A",
          "B",
          "C",
          null
        ],
        [
          "C",
          null,
          null,
          "B",
          "E"
        ],
        [
          "D",
          null,
          "C",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = E."
    },
    {
      "qNum": 9,
      "origin": "medium_t2_q4",
      "grid": [
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          "C",
          "B",
          null,
          "?",
          "D"
        ],
        [
          null,
          "A",
          null,
          "C",
          "E"
        ],
        [
          "E",
          null,
          "A",
          "D",
          "B"
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = A."
    },
    {
      "qNum": 10,
      "origin": "medium_t2_q7",
      "grid": [
        [
          "C",
          null,
          "E",
          null,
          null
        ],
        [
          "B",
          "E",
          "C",
          "?",
          null
        ],
        [
          "E",
          null,
          "A",
          null,
          null
        ],
        [
          "A",
          null,
          "D",
          "C",
          null
        ],
        [
          null,
          null,
          "B",
          "E",
          "A"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = A."
    },
    {
      "qNum": 11,
      "origin": "hard_t1_q1",
      "grid": [
        [
          null,
          null,
          null,
          "B",
          "C"
        ],
        [
          null,
          "B",
          null,
          "C",
          null
        ],
        [
          null,
          null,
          "?",
          "E",
          null
        ],
        [
          "A",
          "E",
          "C",
          null,
          null
        ],
        [
          "B",
          null,
          "D",
          "A",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 3 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, γ) = B."
    },
    {
      "qNum": 12,
      "origin": "hard_t1_q3",
      "grid": [
        [
          null,
          null,
          "D",
          null,
          "E"
        ],
        [
          "E",
          null,
          "C",
          "B",
          "A"
        ],
        [
          null,
          null,
          null,
          "?",
          "B"
        ],
        [
          "D",
          null,
          null,
          null,
          "C"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = D."
    },
    {
      "qNum": 13,
      "origin": "hard_t1_q6",
      "grid": [
        [
          "C",
          "E",
          null,
          "B",
          null
        ],
        [
          null,
          "C",
          null,
          "E",
          "B"
        ],
        [
          "A",
          null,
          null,
          null,
          "?"
        ],
        [
          "B",
          "A",
          "E",
          null,
          null
        ],
        [
          "E",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = E."
    },
    {
      "qNum": 14,
      "origin": "hard_t1_q8",
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "A",
          "C"
        ],
        [
          "E",
          null,
          "A",
          null,
          "?"
        ],
        [
          null,
          "B",
          "E",
          null,
          null
        ],
        [
          "D",
          "A",
          "C",
          "B",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = B."
    },
    {
      "qNum": 15,
      "origin": "hard_t1_q10",
      "grid": [
        [
          "D",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "D",
          null,
          "B"
        ],
        [
          "B",
          null,
          null,
          "?",
          "E"
        ],
        [
          "C",
          null,
          null,
          "B",
          "D"
        ],
        [
          "E",
          "D",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = D."
    },
    {
      "qNum": 16,
      "origin": "hard_t2_q2",
      "grid": [
        [
          "B",
          null,
          null,
          "D",
          null
        ],
        [
          "A",
          "C",
          null,
          "E",
          null
        ],
        [
          null,
          "?",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          "E",
          null,
          "B"
        ],
        [
          "E",
          null,
          null,
          "B",
          "C"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = B."
    },
    {
      "qNum": 17,
      "origin": "hard_t2_q5",
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "C",
          null,
          "E"
        ],
        [
          "D",
          null,
          null,
          "C",
          null
        ],
        [
          "E",
          "C",
          "D",
          "A",
          "B"
        ],
        [
          "?",
          null,
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = C."
    },
    {
      "qNum": 18,
      "origin": "hard_t2_q7",
      "grid": [
        [
          "E",
          "?",
          null,
          null,
          null
        ],
        [
          "B",
          null,
          "A",
          null,
          "E"
        ],
        [
          "A",
          null,
          "E",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "A",
          null
        ],
        [
          "C",
          null,
          null,
          "E",
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 1 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, β) = A."
    },
    {
      "qNum": 19,
      "origin": "hard_t2_q9",
      "grid": [
        [
          null,
          null,
          "A",
          null,
          null
        ],
        [
          null,
          "C",
          "D",
          "E",
          "B"
        ],
        [
          "B",
          "A",
          null,
          "D",
          null
        ],
        [
          null,
          null,
          "B",
          null,
          null
        ],
        [
          null,
          "D",
          null,
          "B",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "A",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = A."
    },
    {
      "qNum": 20,
      "origin": "hard_t2_q12",
      "grid": [
        [
          null,
          "C",
          "A",
          "B",
          null
        ],
        [
          "A",
          "D",
          null,
          "E",
          null
        ],
        [
          "?",
          null,
          null,
          null,
          null
        ],
        [
          null,
          "A",
          "E",
          "C",
          null
        ],
        [
          null,
          null,
          "C",
          null,
          "A"
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = C."
    }
  ],
  "sim_t2": [
    {
      "qNum": 1,
      "origin": "easy_t2_q9",
      "grid": [
        [
          null,
          null,
          "A",
          null,
          "C"
        ],
        [
          null,
          "D",
          "E",
          "B",
          "A"
        ],
        [
          "A",
          "?",
          null,
          "C",
          "E"
        ],
        [
          null,
          null,
          null,
          "A",
          "D"
        ],
        [
          "D",
          "A",
          null,
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 3 and Column β: Row contains {A, C, E} and Column contains {A, D}, leaving B as the only possible symbol for cell (3, β)."
    },
    {
      "qNum": 2,
      "origin": "easy_t2_q12",
      "grid": [
        [
          null,
          null,
          "D",
          "B",
          "C"
        ],
        [
          "C",
          "B",
          "E",
          null,
          "A"
        ],
        [
          null,
          "E",
          null,
          "?",
          "D"
        ],
        [
          "A",
          null,
          "C",
          "E",
          null
        ],
        [
          null,
          "C",
          null,
          "A",
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 3 and Column δ: Row contains {D, E} and Column contains {A, B, E}, leaving C as the only possible symbol for cell (3, δ)."
    },
    {
      "qNum": 3,
      "origin": "easy_t3_q2",
      "grid": [
        [
          "E",
          "D",
          null,
          "C",
          null
        ],
        [
          null,
          "B",
          "C",
          null,
          null
        ],
        [
          "A",
          "C",
          null,
          "B",
          "E"
        ],
        [
          null,
          "A",
          "E",
          "D",
          "C"
        ],
        [
          "?",
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {B, D} and Column contains {A, E}, leaving C as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 4,
      "origin": "easy_t3_q5",
      "grid": [
        [
          "?",
          "C",
          "E",
          "B",
          "A"
        ],
        [
          null,
          null,
          null,
          "C",
          "B"
        ],
        [
          "A",
          "E",
          "B",
          null,
          "C"
        ],
        [
          "B",
          "A",
          null,
          "E",
          null
        ],
        [
          null,
          "B",
          null,
          null,
          "E"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "D",
      "explanation": "Direct elimination in Row 1 and Column α: Row contains {A, B, C, E} and Column contains {A, B}, leaving D as the only possible symbol for cell (1, α)."
    },
    {
      "qNum": 5,
      "origin": "easy_t3_q8",
      "grid": [
        [
          "A",
          "B",
          null,
          "C",
          "D"
        ],
        [
          "C",
          null,
          null,
          "B",
          "A"
        ],
        [
          "D",
          null,
          "B",
          "A",
          "E"
        ],
        [
          "?",
          "A",
          null,
          null,
          "B"
        ],
        [
          null,
          "D",
          null,
          "E",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 4 and Column α: Row contains {A, B} and Column contains {A, C, D}, leaving E as the only possible symbol for cell (4, α)."
    },
    {
      "qNum": 6,
      "origin": "medium_t2_q10",
      "grid": [
        [
          "C",
          null,
          "B",
          "E",
          null
        ],
        [
          "D",
          null,
          "A",
          "B",
          "C"
        ],
        [
          "?",
          "C",
          null,
          "D",
          "B"
        ],
        [
          null,
          null,
          "D",
          null,
          "E"
        ],
        [
          null,
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = A."
    },
    {
      "qNum": 7,
      "origin": "medium_t2_q13",
      "grid": [
        [
          "B",
          null,
          null,
          null,
          "C"
        ],
        [
          null,
          "?",
          null,
          null,
          "B"
        ],
        [
          "E",
          "B",
          "D",
          "C",
          null
        ],
        [
          null,
          "C",
          "B",
          "E",
          "D"
        ],
        [
          null,
          null,
          "A",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = E."
    },
    {
      "qNum": 8,
      "origin": "medium_t3_q3",
      "grid": [
        [
          null,
          null,
          "E",
          "D",
          "C"
        ],
        [
          null,
          "C",
          null,
          "E",
          "B"
        ],
        [
          null,
          "D",
          null,
          "C",
          null
        ],
        [
          "E",
          null,
          "C",
          null,
          "D"
        ],
        [
          null,
          "E",
          "?",
          "B",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = D."
    },
    {
      "qNum": 9,
      "origin": "medium_t3_q6",
      "grid": [
        [
          null,
          null,
          "D",
          null,
          "A"
        ],
        [
          "D",
          "?",
          null,
          null,
          null
        ],
        [
          "E",
          "D",
          "A",
          null,
          "B"
        ],
        [
          "A",
          "E",
          "C",
          null,
          null
        ],
        [
          null,
          "A",
          null,
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = B."
    },
    {
      "qNum": 10,
      "origin": "medium_t3_q9",
      "grid": [
        [
          null,
          "A",
          null,
          null,
          "B"
        ],
        [
          "E",
          "D",
          "B",
          "A",
          null
        ],
        [
          "D",
          "?",
          null,
          null,
          "A"
        ],
        [
          "B",
          null,
          "A",
          null,
          "D"
        ],
        [
          null,
          null,
          "C",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = C."
    },
    {
      "qNum": 11,
      "origin": "hard_t2_q14",
      "grid": [
        [
          "A",
          null,
          null,
          "C",
          null
        ],
        [
          "B",
          null,
          "C",
          "D",
          null
        ],
        [
          "E",
          "C",
          null,
          "A",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "?"
        ],
        [
          null,
          "D",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = C."
    },
    {
      "qNum": 12,
      "origin": "hard_t2_q16",
      "grid": [
        [
          null,
          null,
          "E",
          "D",
          "B"
        ],
        [
          null,
          "?",
          "B",
          null,
          "A"
        ],
        [
          null,
          null,
          "D",
          null,
          "C"
        ],
        [
          null,
          null,
          null,
          null,
          "D"
        ],
        [
          "D",
          null,
          null,
          "A",
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = D."
    },
    {
      "qNum": 13,
      "origin": "hard_t3_q1",
      "grid": [
        [
          "B",
          null,
          "E",
          null,
          null
        ],
        [
          null,
          null,
          null,
          "C",
          "B"
        ],
        [
          null,
          null,
          "C",
          null,
          "D"
        ],
        [
          "C",
          "B",
          null,
          null,
          "A"
        ],
        [
          null,
          "?",
          "B",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = C."
    },
    {
      "qNum": 14,
      "origin": "hard_t3_q4",
      "grid": [
        [
          null,
          "D",
          "B",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "A",
          "B"
        ],
        [
          null,
          "A",
          "C",
          null,
          "D"
        ],
        [
          "?",
          "B",
          null,
          null,
          null
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = C."
    },
    {
      "qNum": 15,
      "origin": "hard_t3_q7",
      "grid": [
        [
          "C",
          null,
          "D",
          "B",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "?"
        ],
        [
          "A",
          null,
          "E",
          "D",
          null
        ],
        [
          "B",
          null,
          null,
          null,
          null
        ],
        [
          "E",
          "C",
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = B."
    },
    {
      "qNum": 16,
      "origin": "hard_t3_q9",
      "grid": [
        [
          "C",
          null,
          null,
          "B",
          "D"
        ],
        [
          null,
          "C",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          "D",
          null,
          null
        ],
        [
          "D",
          "?",
          null,
          "E",
          null
        ],
        [
          "E",
          "D",
          null,
          "A",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = B."
    },
    {
      "qNum": 17,
      "origin": "hard_t3_q11",
      "grid": [
        [
          "D",
          null,
          "E",
          "A",
          "C"
        ],
        [
          null,
          null,
          "?",
          null,
          "B"
        ],
        [
          null,
          null,
          null,
          "D",
          null
        ],
        [
          "B",
          null,
          "D",
          null,
          null
        ],
        [
          "A",
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "A",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = A."
    },
    {
      "qNum": 18,
      "origin": "hard_t3_q13",
      "grid": [
        [
          null,
          null,
          null,
          "D",
          "B"
        ],
        [
          "C",
          "D",
          "A",
          null,
          "E"
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ],
        [
          "?",
          null,
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "D",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = D."
    },
    {
      "qNum": 19,
      "origin": "hard_t3_q15",
      "grid": [
        [
          "B",
          "A",
          null,
          "C",
          null
        ],
        [
          "A",
          null,
          null,
          "D",
          null
        ],
        [
          "C",
          null,
          null,
          null,
          "B"
        ],
        [
          null,
          "B",
          "C",
          null,
          "A"
        ],
        [
          null,
          null,
          "?",
          "B",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "A",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = A."
    },
    {
      "qNum": 20,
      "origin": "hard_t3_q17",
      "grid": [
        [
          null,
          null,
          null,
          null,
          "B"
        ],
        [
          null,
          "E",
          "C",
          null,
          null
        ],
        [
          "D",
          "A",
          "B",
          null,
          "E"
        ],
        [
          "?",
          null,
          "E",
          null,
          "C"
        ],
        [
          "E",
          null,
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = A."
    }
  ],
  "sim_t3": [
    {
      "qNum": 1,
      "origin": "easy_t3_q11",
      "grid": [
        [
          "D",
          "?",
          "E",
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "A",
          null
        ],
        [
          "A",
          "D",
          null,
          "C",
          null
        ],
        [
          "E",
          "A",
          null,
          "D",
          null
        ],
        [
          "C",
          "B",
          "A",
          "E",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 1
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 1 and Column β: Row contains {D, E} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (1, β)."
    },
    {
      "qNum": 2,
      "origin": "easy_t3_q14",
      "grid": [
        [
          "A",
          "B",
          "D",
          "C",
          null
        ],
        [
          "D",
          null,
          "C",
          "B",
          null
        ],
        [
          null,
          "D",
          "E",
          null,
          "C"
        ],
        [
          null,
          null,
          null,
          "D",
          "B"
        ],
        [
          null,
          "A",
          "B",
          "?",
          "D"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {A, B, D} and Column contains {B, C, D}, leaving E as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 3,
      "origin": "easy_t4_q1",
      "grid": [
        [
          "C",
          "A",
          "D",
          null,
          "B"
        ],
        [
          "D",
          "E",
          "?",
          null,
          "A"
        ],
        [
          "E",
          null,
          "C",
          null,
          "D"
        ],
        [
          null,
          "C",
          "A",
          null,
          null
        ],
        [
          "A",
          null,
          "E",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {A, D, E} and Column contains {A, C, D, E}, leaving B as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 4,
      "origin": "easy_t4_q4",
      "grid": [
        [
          "B",
          null,
          null,
          "E",
          null
        ],
        [
          "D",
          "B",
          "E",
          "A",
          "C"
        ],
        [
          null,
          "D",
          "A",
          "C",
          "B"
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ],
        [
          "C",
          "?",
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 5 and Column β: Row contains {B, C} and Column contains {B, D, E}, leaving A as the only possible symbol for cell (5, β)."
    },
    {
      "qNum": 5,
      "origin": "easy_t4_q7",
      "grid": [
        [
          "A",
          null,
          "E",
          null,
          "B"
        ],
        [
          "D",
          "B",
          "?",
          "E",
          null
        ],
        [
          null,
          "E",
          "D",
          "A",
          "C"
        ],
        [
          "C",
          null,
          "A",
          "B",
          "E"
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {B, D, E} and Column contains {A, D, E}, leaving C as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 6,
      "origin": "medium_t3_q12",
      "grid": [
        [
          "E",
          null,
          null,
          "D",
          null
        ],
        [
          "C",
          "A",
          "D",
          null,
          null
        ],
        [
          null,
          "E",
          "A",
          "B",
          null
        ],
        [
          "?",
          null,
          null,
          "A",
          "E"
        ],
        [
          "A",
          "B",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 0
      },
      "solution": "B",
      "explanation": "Row 4 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, α) = B."
    },
    {
      "qNum": 7,
      "origin": "medium_t3_q15",
      "grid": [
        [
          "B",
          null,
          "A",
          "C",
          null
        ],
        [
          "?",
          "B",
          null,
          null,
          "A"
        ],
        [
          "E",
          null,
          "D",
          null,
          null
        ],
        [
          null,
          "C",
          "B",
          null,
          "E"
        ],
        [
          null,
          null,
          "C",
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = C."
    },
    {
      "qNum": 8,
      "origin": "medium_t4_q2",
      "grid": [
        [
          "E",
          null,
          "B",
          "C",
          null
        ],
        [
          null,
          "B",
          "A",
          "E",
          "C"
        ],
        [
          "A",
          null,
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          null,
          "D",
          "E"
        ],
        [
          "?",
          "E",
          null,
          null,
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 5 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, α) = C."
    },
    {
      "qNum": 9,
      "origin": "medium_t4_q5",
      "grid": [
        [
          "A",
          null,
          "C",
          "D",
          null
        ],
        [
          null,
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "D",
          "E",
          "?",
          "C"
        ],
        [
          "C",
          "A",
          null,
          null,
          null
        ],
        [
          "D",
          "C",
          "B",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = A."
    },
    {
      "qNum": 10,
      "origin": "medium_t4_q8",
      "grid": [
        [
          "B",
          "A",
          null,
          "?",
          "E"
        ],
        [
          "C",
          "D",
          null,
          "E",
          null
        ],
        [
          null,
          null,
          "E",
          null,
          null
        ],
        [
          "D",
          "E",
          "A",
          "B",
          null
        ],
        [
          null,
          null,
          null,
          "A",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "C",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = C."
    },
    {
      "qNum": 11,
      "origin": "hard_t3_q19",
      "grid": [
        [
          "D",
          null,
          null,
          null,
          "?"
        ],
        [
          "B",
          null,
          null,
          "E",
          null
        ],
        [
          "C",
          null,
          "E",
          null,
          null
        ],
        [
          "E",
          null,
          "A",
          "D",
          null
        ],
        [
          "A",
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = E."
    },
    {
      "qNum": 12,
      "origin": "hard_t4_q1",
      "grid": [
        [
          null,
          "E",
          "B",
          null,
          null
        ],
        [
          "C",
          null,
          null,
          "?",
          "E"
        ],
        [
          null,
          "B",
          null,
          null,
          "C"
        ],
        [
          "B",
          "C",
          null,
          "D",
          "A"
        ],
        [
          null,
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "B",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = B."
    },
    {
      "qNum": 13,
      "origin": "hard_t4_q3",
      "grid": [
        [
          null,
          "C",
          "B",
          "A",
          null
        ],
        [
          null,
          "D",
          "C",
          null,
          null
        ],
        [
          null,
          null,
          "E",
          "D",
          null
        ],
        [
          "B",
          null,
          null,
          "C",
          null
        ],
        [
          null,
          "B",
          null,
          "E",
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = C."
    },
    {
      "qNum": 14,
      "origin": "hard_t4_q5",
      "grid": [
        [
          null,
          "D",
          "C",
          null,
          null
        ],
        [
          null,
          "B",
          "E",
          null,
          "C"
        ],
        [
          "D",
          "C",
          "A",
          null,
          null
        ],
        [
          null,
          null,
          "B",
          null,
          "?"
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "D",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = D."
    },
    {
      "qNum": 15,
      "origin": "hard_t4_q7",
      "grid": [
        [
          null,
          "D",
          null,
          null,
          "E"
        ],
        [
          "C",
          null,
          "D",
          "B",
          null
        ],
        [
          "D",
          "A",
          null,
          null,
          "B"
        ],
        [
          null,
          null,
          "B",
          null,
          "D"
        ],
        [
          null,
          null,
          null,
          "?",
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = D."
    },
    {
      "qNum": 16,
      "origin": "hard_t4_q9",
      "grid": [
        [
          "C",
          null,
          "D",
          "E",
          null
        ],
        [
          null,
          null,
          null,
          null,
          "E"
        ],
        [
          "A",
          null,
          "B",
          null,
          "C"
        ],
        [
          "E",
          "D",
          null,
          null,
          null
        ],
        [
          null,
          "C",
          "E",
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 5 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, δ) = A."
    },
    {
      "qNum": 17,
      "origin": "hard_t4_q11",
      "grid": [
        [
          null,
          null,
          null,
          "C",
          "A"
        ],
        [
          null,
          "?",
          null,
          "E",
          "C"
        ],
        [
          "C",
          "E",
          "A",
          null,
          "B"
        ],
        [
          "A",
          null,
          null,
          "B",
          "E"
        ],
        [
          null,
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 2 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, β) = A."
    },
    {
      "qNum": 18,
      "origin": "hard_t4_q13",
      "grid": [
        [
          "A",
          null,
          null,
          null,
          null
        ],
        [
          null,
          "D",
          "A",
          "B",
          "C"
        ],
        [
          "B",
          null,
          "D",
          "C",
          null
        ],
        [
          "C",
          "?",
          "E",
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          "B"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "B",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = B."
    },
    {
      "qNum": 19,
      "origin": "hard_t4_q15",
      "grid": [
        [
          "A",
          "E",
          "B",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "?",
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          null
        ],
        [
          "C",
          null,
          "A",
          null,
          null
        ],
        [
          null,
          "A",
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = A."
    },
    {
      "qNum": 20,
      "origin": "hard_t4_q17",
      "grid": [
        [
          "E",
          null,
          null,
          "D",
          "A"
        ],
        [
          null,
          null,
          "E",
          "C",
          "D"
        ],
        [
          "D",
          null,
          "A",
          "B",
          "?"
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          null,
          "D",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 3 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, ε) = C."
    }
  ],
  "sim_t4": [
    {
      "qNum": 1,
      "origin": "easy_t4_q10",
      "grid": [
        [
          null,
          null,
          null,
          "D",
          "A"
        ],
        [
          "E",
          "A",
          "D",
          "C",
          null
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          "D",
          "B",
          "C",
          "A",
          "?"
        ],
        [
          "C",
          "E",
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 4 and Column ε: Row contains {A, B, C, D} and Column contains {A, D}, leaving E as the only possible symbol for cell (4, ε)."
    },
    {
      "qNum": 2,
      "origin": "easy_t4_q13",
      "grid": [
        [
          "C",
          "A",
          "E",
          "D",
          null
        ],
        [
          "B",
          "C",
          null,
          "?",
          null
        ],
        [
          "D",
          null,
          null,
          "B",
          null
        ],
        [
          "E",
          null,
          "A",
          "C",
          null
        ],
        [
          null,
          "D",
          "B",
          "E",
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {B, C} and Column contains {B, C, D, E}, leaving A as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 3,
      "origin": "easy_t5_q2",
      "grid": [
        [
          "E",
          null,
          "D",
          "B",
          "A"
        ],
        [
          null,
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "A",
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          "?",
          "A",
          "E"
        ],
        [
          "A",
          "E",
          "C",
          "D",
          "B"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "B",
      "explanation": "Direct elimination in Row 4 and Column γ: Row contains {A, E} and Column contains {A, C, D}, leaving B as the only possible symbol for cell (4, γ)."
    },
    {
      "qNum": 4,
      "origin": "easy_t5_q5",
      "grid": [
        [
          "D",
          "E",
          "B",
          null,
          null
        ],
        [
          "?",
          "A",
          "C",
          "B",
          "D"
        ],
        [
          "A",
          "B",
          null,
          null,
          null
        ],
        [
          "B",
          "C",
          "E",
          "D",
          "A"
        ],
        [
          null,
          null,
          "A",
          null,
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 2 and Column α: Row contains {A, B, C, D} and Column contains {A, B, D}, leaving E as the only possible symbol for cell (2, α)."
    },
    {
      "qNum": 5,
      "origin": "easy_t5_q8",
      "grid": [
        [
          null,
          null,
          "D",
          "A",
          "E"
        ],
        [
          "A",
          "B",
          "E",
          null,
          "C"
        ],
        [
          null,
          null,
          "A",
          "B",
          "D"
        ],
        [
          "E",
          null,
          null,
          null,
          null
        ],
        [
          "D",
          "A",
          "?",
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column γ: Row contains {A, B, D, E} and Column contains {A, D, E}, leaving C as the only possible symbol for cell (5, γ)."
    },
    {
      "qNum": 6,
      "origin": "medium_t4_q11",
      "grid": [
        [
          "E",
          null,
          "C",
          "A",
          null
        ],
        [
          null,
          null,
          "E",
          "C",
          "A"
        ],
        [
          null,
          "A",
          "D",
          null,
          "C"
        ],
        [
          null,
          "?",
          null,
          null,
          "D"
        ],
        [
          null,
          null,
          "B",
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "E",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = E."
    },
    {
      "qNum": 7,
      "origin": "medium_t4_q14",
      "grid": [
        [
          null,
          "C",
          "E",
          "A",
          null
        ],
        [
          "A",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          "A",
          "B",
          "D"
        ],
        [
          "B",
          null,
          "?",
          "E",
          null
        ],
        [
          "E",
          "A",
          "B",
          "D",
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 4 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, γ) = C."
    },
    {
      "qNum": 8,
      "origin": "medium_t5_q3",
      "grid": [
        [
          null,
          null,
          null,
          "A",
          null
        ],
        [
          "A",
          null,
          "?",
          null,
          "E"
        ],
        [
          null,
          "E",
          "A",
          "C",
          "B"
        ],
        [
          "B",
          null,
          null,
          null,
          "A"
        ],
        [
          null,
          "A",
          "B",
          "E",
          "D"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = C."
    },
    {
      "qNum": 9,
      "origin": "medium_t5_q6",
      "grid": [
        [
          "B",
          "A",
          null,
          null,
          "E"
        ],
        [
          null,
          null,
          "E",
          null,
          "A"
        ],
        [
          null,
          "E",
          null,
          null,
          null
        ],
        [
          "D",
          "?",
          null,
          "E",
          null
        ],
        [
          "E",
          "D",
          "B",
          "A",
          "C"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = C."
    },
    {
      "qNum": 10,
      "origin": "medium_t5_q9",
      "grid": [
        [
          "?",
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "C",
          null,
          null,
          null
        ],
        [
          "B",
          "D",
          "E",
          null,
          "C"
        ],
        [
          "A",
          "E",
          null,
          "D",
          null
        ],
        [
          "C",
          "A",
          null,
          "B",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "E",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = E."
    },
    {
      "qNum": 11,
      "origin": "hard_t4_q19",
      "grid": [
        [
          null,
          null,
          "E",
          null,
          "D"
        ],
        [
          "E",
          null,
          "C",
          null,
          null
        ],
        [
          null,
          "?",
          "A",
          null,
          null
        ],
        [
          null,
          "E",
          null,
          "B",
          null
        ],
        [
          "D",
          "C",
          "B",
          null,
          "E"
        ]
      ],
      "target": {
        "row": 2,
        "col": 1
      },
      "solution": "D",
      "explanation": "Row 3 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, β) = D."
    },
    {
      "qNum": 12,
      "origin": "hard_t5_q1",
      "grid": [
        [
          null,
          null,
          null,
          null,
          null
        ],
        [
          "A",
          null,
          "?",
          "E",
          null
        ],
        [
          "C",
          "A",
          "E",
          "D",
          null
        ],
        [
          "E",
          "B",
          null,
          null,
          null
        ],
        [
          "D",
          "E",
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = B."
    },
    {
      "qNum": 13,
      "origin": "hard_t5_q3",
      "grid": [
        [
          null,
          null,
          "?",
          null,
          "D"
        ],
        [
          "A",
          null,
          "B",
          "D",
          "C"
        ],
        [
          null,
          null,
          null,
          "E",
          null
        ],
        [
          null,
          null,
          "A",
          "C",
          "E"
        ],
        [
          "E",
          null,
          null,
          null,
          "A"
        ]
      ],
      "target": {
        "row": 0,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 1 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, γ) = E."
    },
    {
      "qNum": 14,
      "origin": "hard_t5_q5",
      "grid": [
        [
          null,
          "E",
          "D",
          null,
          "C"
        ],
        [
          "E",
          null,
          null,
          null,
          "A"
        ],
        [
          "?",
          null,
          "E",
          null,
          "D"
        ],
        [
          null,
          null,
          "C",
          "E",
          "B"
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 3 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, α) = C."
    },
    {
      "qNum": 15,
      "origin": "hard_t5_q7",
      "grid": [
        [
          null,
          "A",
          "C",
          null,
          null
        ],
        [
          "E",
          null,
          "A",
          null,
          "B"
        ],
        [
          "C",
          "B",
          "E",
          null,
          "A"
        ],
        [
          null,
          null,
          null,
          null,
          "?"
        ],
        [
          "A",
          "C",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 3,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 4 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, ε) = C."
    },
    {
      "qNum": 16,
      "origin": "hard_t5_q9",
      "grid": [
        [
          null,
          null,
          "D",
          null,
          null
        ],
        [
          "A",
          null,
          null,
          "C",
          null
        ],
        [
          null,
          null,
          "?",
          "A",
          "C"
        ],
        [
          null,
          "A",
          "C",
          "E",
          "B"
        ],
        [
          null,
          "B",
          null,
          "D",
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 3 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, γ) = E."
    },
    {
      "qNum": 17,
      "origin": "hard_t5_q11",
      "grid": [
        [
          "C",
          null,
          "A",
          null,
          null
        ],
        [
          "E",
          "D",
          "C",
          "B",
          null
        ],
        [
          "A",
          null,
          "D",
          null,
          null
        ],
        [
          null,
          null,
          "B",
          "A",
          null
        ],
        [
          null,
          "?",
          "E",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = A."
    },
    {
      "qNum": 18,
      "origin": "hard_t5_q13",
      "grid": [
        [
          "B",
          "C",
          null,
          null,
          "A"
        ],
        [
          null,
          "B",
          null,
          "C",
          null
        ],
        [
          null,
          "A",
          null,
          "B",
          null
        ],
        [
          "C",
          "E",
          null,
          null,
          "B"
        ],
        [
          null,
          null,
          "B",
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "C",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = C."
    },
    {
      "qNum": 19,
      "origin": "hard_t5_q15",
      "grid": [
        [
          "D",
          null,
          null,
          null,
          "B"
        ],
        [
          "?",
          null,
          "D",
          "B",
          null
        ],
        [
          null,
          "B",
          "A",
          null,
          null
        ],
        [
          null,
          "D",
          null,
          "A",
          "E"
        ],
        [
          null,
          null,
          null,
          "D",
          "A"
        ]
      ],
      "target": {
        "row": 1,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 2 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, α) = A."
    },
    {
      "qNum": 20,
      "origin": "hard_t5_q17",
      "grid": [
        [
          null,
          "A",
          null,
          null,
          "?"
        ],
        [
          "A",
          null,
          "E",
          null,
          "D"
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ],
        [
          "E",
          null,
          null,
          "C",
          null
        ],
        [
          "D",
          "B",
          null,
          "E",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "E",
      "explanation": "Row 1 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, ε) = E."
    }
  ],
  "sim_t5": [
    {
      "qNum": 1,
      "origin": "easy_t5_q11",
      "grid": [
        [
          "C",
          "D",
          null,
          null,
          "?"
        ],
        [
          "A",
          null,
          null,
          null,
          "B"
        ],
        [
          "D",
          null,
          "A",
          "B",
          null
        ],
        [
          null,
          "A",
          null,
          "C",
          "E"
        ],
        [
          "E",
          "B",
          "C",
          "A",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 4
      },
      "solution": "A",
      "explanation": "Direct elimination in Row 1 and Column ε: Row contains {C, D} and Column contains {B, D, E}, leaving A as the only possible symbol for cell (1, ε)."
    },
    {
      "qNum": 2,
      "origin": "easy_t5_q14",
      "grid": [
        [
          "E",
          "B",
          null,
          "D",
          "C"
        ],
        [
          "A",
          null,
          "?",
          null,
          "D"
        ],
        [
          "B",
          "D",
          "E",
          null,
          null
        ],
        [
          "D",
          null,
          "B",
          "A",
          null
        ],
        [
          null,
          "A",
          null,
          "E",
          "B"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column γ: Row contains {A, D} and Column contains {B, E}, leaving C as the only possible symbol for cell (2, γ)."
    },
    {
      "qNum": 3,
      "origin": "easy_t1_q16",
      "grid": [
        [
          null,
          null,
          "C",
          "D",
          "E"
        ],
        [
          "D",
          null,
          "A",
          "E",
          "B"
        ],
        [
          "C",
          "E",
          null,
          "A",
          null
        ],
        [
          null,
          null,
          "D",
          "B",
          "C"
        ],
        [
          "B",
          "D",
          null,
          "?",
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 5 and Column δ: Row contains {B, D} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (5, δ)."
    },
    {
      "qNum": 4,
      "origin": "easy_t1_q19",
      "grid": [
        [
          null,
          "E",
          null,
          "D",
          null
        ],
        [
          "B",
          "D",
          null,
          "?",
          "A"
        ],
        [
          "E",
          "C",
          null,
          "A",
          "B"
        ],
        [
          "C",
          null,
          null,
          "E",
          null
        ],
        [
          "D",
          "A",
          "C",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "C",
      "explanation": "Direct elimination in Row 2 and Column δ: Row contains {A, B, D} and Column contains {A, B, D, E}, leaving C as the only possible symbol for cell (2, δ)."
    },
    {
      "qNum": 5,
      "origin": "easy_t2_q18",
      "grid": [
        [
          null,
          null,
          null,
          null,
          "A"
        ],
        [
          "B",
          null,
          null,
          null,
          "C"
        ],
        [
          "D",
          null,
          "C",
          null,
          "E"
        ],
        [
          "A",
          "C",
          "B",
          "E",
          "D"
        ],
        [
          "?",
          "D",
          "A",
          "C",
          "B"
        ]
      ],
      "target": {
        "row": 4,
        "col": 0
      },
      "solution": "E",
      "explanation": "Direct elimination in Row 5 and Column α: Row contains {A, B, C, D} and Column contains {A, B, D}, leaving E as the only possible symbol for cell (5, α)."
    },
    {
      "qNum": 6,
      "origin": "medium_t5_q12",
      "grid": [
        [
          null,
          "C",
          "B",
          "D",
          null
        ],
        [
          null,
          null,
          null,
          null,
          "C"
        ],
        [
          "D",
          null,
          "?",
          "C",
          "B"
        ],
        [
          null,
          "B",
          "D",
          "A",
          "E"
        ],
        [
          "A",
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 3 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, γ) = E."
    },
    {
      "qNum": 7,
      "origin": "medium_t5_q15",
      "grid": [
        [
          null,
          "A",
          null,
          null,
          "D"
        ],
        [
          "E",
          "B",
          "C",
          "D",
          "A"
        ],
        [
          null,
          "C",
          "E",
          "A",
          null
        ],
        [
          null,
          null,
          null,
          "C",
          null
        ],
        [
          null,
          "E",
          "?",
          null,
          "C"
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "D",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = D."
    },
    {
      "qNum": 8,
      "origin": "medium_t1_q17",
      "grid": [
        [
          "?",
          null,
          "D",
          "E",
          "B"
        ],
        [
          "E",
          "D",
          null,
          "C",
          "A"
        ],
        [
          null,
          null,
          "E",
          null,
          null
        ],
        [
          null,
          "B",
          "A",
          "D",
          null
        ],
        [
          null,
          "E",
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "A",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = A."
    },
    {
      "qNum": 9,
      "origin": "medium_t1_q20",
      "grid": [
        [
          "E",
          null,
          "C",
          "A",
          "B"
        ],
        [
          null,
          "A",
          "?",
          "C",
          null
        ],
        [
          null,
          "E",
          "D",
          null,
          null
        ],
        [
          null,
          null,
          null,
          "E",
          "A"
        ],
        [
          null,
          "B",
          null,
          "D",
          "E"
        ]
      ],
      "target": {
        "row": 1,
        "col": 2
      },
      "solution": "E",
      "explanation": "Row 2 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, γ) = E."
    },
    {
      "qNum": 10,
      "origin": "medium_t2_q19",
      "grid": [
        [
          "A",
          null,
          "B",
          null,
          "D"
        ],
        [
          null,
          null,
          null,
          "D",
          "?"
        ],
        [
          null,
          "B",
          "D",
          null,
          null
        ],
        [
          null,
          "D",
          "E",
          "C",
          "A"
        ],
        [
          null,
          "E",
          "A",
          "B",
          null
        ]
      ],
      "target": {
        "row": 1,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 2 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, ε) = B."
    },
    {
      "qNum": 11,
      "origin": "hard_t5_q19",
      "grid": [
        [
          "C",
          "B",
          null,
          null,
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          "A"
        ],
        [
          null,
          "A",
          null,
          null,
          null
        ],
        [
          "D",
          "E",
          null,
          null,
          "B"
        ],
        [
          "A",
          null,
          "?",
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 2
      },
      "solution": "B",
      "explanation": "Row 5 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, γ) = B."
    },
    {
      "qNum": 12,
      "origin": "hard_t1_q14",
      "grid": [
        [
          "B",
          "E",
          null,
          "D",
          "C"
        ],
        [
          null,
          null,
          null,
          "B",
          null
        ],
        [
          "C",
          null,
          null,
          "E",
          "A"
        ],
        [
          "E",
          null,
          "C",
          "A",
          null
        ],
        [
          null,
          "?",
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 4,
        "col": 1
      },
      "solution": "A",
      "explanation": "Row 5 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, β) = A."
    },
    {
      "qNum": 13,
      "origin": "hard_t1_q18",
      "grid": [
        [
          "D",
          "C",
          null,
          null,
          null
        ],
        [
          null,
          "B",
          "C",
          "?",
          null
        ],
        [
          null,
          null,
          "A",
          null,
          null
        ],
        [
          null,
          "A",
          "B",
          "E",
          "D"
        ],
        [
          null,
          "E",
          null,
          null,
          "C"
        ]
      ],
      "target": {
        "row": 1,
        "col": 3
      },
      "solution": "D",
      "explanation": "Row 2 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (2, δ) = D."
    },
    {
      "qNum": 14,
      "origin": "hard_t2_q19",
      "grid": [
        [
          "C",
          "E",
          "B",
          "D",
          "A"
        ],
        [
          null,
          "C",
          null,
          null,
          null
        ],
        [
          null,
          null,
          "E",
          "?",
          "C"
        ],
        [
          "E",
          "A",
          null,
          null,
          null
        ],
        [
          "A",
          null,
          null,
          null,
          null
        ]
      ],
      "target": {
        "row": 2,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 3 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (3, δ) = A."
    },
    {
      "qNum": 15,
      "origin": "hard_t3_q18",
      "grid": [
        [
          "D",
          null,
          "C",
          "A",
          "E"
        ],
        [
          null,
          "A",
          null,
          null,
          "C"
        ],
        [
          null,
          "D",
          null,
          null,
          "A"
        ],
        [
          null,
          null,
          "?",
          null,
          "B"
        ],
        [
          "A",
          null,
          null,
          null,
          "D"
        ]
      ],
      "target": {
        "row": 3,
        "col": 2
      },
      "solution": "A",
      "explanation": "Row 4 and Column γ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, γ) = A."
    },
    {
      "qNum": 16,
      "origin": "hard_t3_q20",
      "grid": [
        [
          null,
          "A",
          null,
          "B",
          "C"
        ],
        [
          null,
          null,
          "A",
          "C",
          null
        ],
        [
          "C",
          null,
          null,
          null,
          null
        ],
        [
          null,
          "?",
          null,
          "E",
          null
        ],
        [
          "B",
          "E",
          null,
          "D",
          "A"
        ]
      ],
      "target": {
        "row": 3,
        "col": 1
      },
      "solution": "C",
      "explanation": "Row 4 and Column β contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (4, β) = C."
    },
    {
      "qNum": 17,
      "origin": "hard_t4_q18",
      "grid": [
        [
          "C",
          "B",
          "E",
          "D",
          null
        ],
        [
          null,
          null,
          "B",
          "C",
          null
        ],
        [
          null,
          "D",
          null,
          null,
          null
        ],
        [
          "A",
          null,
          "D",
          "B",
          null
        ],
        [
          "D",
          null,
          null,
          null,
          "?"
        ]
      ],
      "target": {
        "row": 4,
        "col": 4
      },
      "solution": "B",
      "explanation": "Row 5 and Column ε contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (5, ε) = B."
    },
    {
      "qNum": 18,
      "origin": "hard_t4_q20",
      "grid": [
        [
          null,
          "B",
          null,
          "?",
          null
        ],
        [
          null,
          "C",
          null,
          "E",
          "B"
        ],
        [
          "C",
          "E",
          null,
          null,
          null
        ],
        [
          null,
          "A",
          "E",
          null,
          null
        ],
        [
          null,
          "D",
          "B",
          "C",
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = A."
    },
    {
      "qNum": 19,
      "origin": "hard_t5_q18",
      "grid": [
        [
          "?",
          null,
          null,
          "E",
          "B"
        ],
        [
          null,
          null,
          "E",
          "A",
          null
        ],
        [
          "A",
          null,
          null,
          "C",
          null
        ],
        [
          "E",
          "C",
          null,
          "B",
          null
        ],
        [
          "B",
          null,
          "C",
          null,
          null
        ]
      ],
      "target": {
        "row": 0,
        "col": 0
      },
      "solution": "C",
      "explanation": "Row 1 and Column α contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, α) = C."
    },
    {
      "qNum": 20,
      "origin": "hard_t5_q20",
      "grid": [
        [
          null,
          "E",
          null,
          "?",
          null
        ],
        [
          null,
          null,
          "A",
          null,
          "E"
        ],
        [
          null,
          "A",
          null,
          null,
          null
        ],
        [
          "B",
          "D",
          "C",
          "E",
          null
        ],
        [
          "A",
          null,
          null,
          "B",
          "D"
        ]
      ],
      "target": {
        "row": 0,
        "col": 3
      },
      "solution": "A",
      "explanation": "Row 1 and Column δ contain letters that narrow candidates, and matrix uniqueness rules across intersecting rows/columns eliminate all other letters, uniquely fixing cell (1, δ) = A."
    }
  ]
};

if (typeof window !== "undefined") window.LATIN_DATA = LATIN_DATA;
if (typeof module !== "undefined" && module.exports) module.exports = { LATIN_DATA };
