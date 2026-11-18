// dmat_data.js - Official dMAT Mathematical Equations Practice & Exam Data

const DMAT_DATA = {
  hard: [
    {
      id: 1,
      equations: [
        "A = 4 × D",
        "B = A − 6",
        "C + B = 16",
        "D + C + A = 26"
      ],
      solution: { A: 16, B: 10, C: 6, D: 4 },
      stepByStep: [
        "From (2): B = A − 6",
        "From (3): C = 16 − B = 16 − (A − 6) = 22 − A",
        "Substitute C into (4): D + (22 − A) + A = 26 ⟹ D + 22 = 26 ⟹ D = 4",
        "From (1): A = 4 × 4 = 16",
        "From (2): B = 16 − 6 = 10",
        "From (3): C = 16 − 10 = 6"
      ]
    },
    {
      id: 2,
      equations: [
        "D = 4 × B",
        "C = D − 1",
        "A + C = 19",
        "B + A + D = 22"
      ],
      solution: { A: 12, B: 2, C: 7, D: 8 },
      stepByStep: [
        "From (2): C = D − 1",
        "From (3): A = 19 − C = 19 − (D − 1) = 20 − D",
        "Substitute A into (4): B + (20 − D) + D = 22 ⟹ B + 20 = 22 ⟹ B = 2",
        "From (1): D = 4 × 2 = 8",
        "From (2): C = 8 − 1 = 7",
        "From (3): A = 19 − 7 = 12"
      ]
    },
    {
      id: 3,
      equations: [
        "D = 3 × A",
        "C = D − 2",
        "B + C = 21",
        "A + B + D = 28"
      ],
      solution: { A: 5, B: 8, C: 13, D: 15 },
      stepByStep: [
        "From (2): C = D − 2",
        "From (3): B = 21 − C = 21 − (D − 2) = 23 − D",
        "Substitute B into (4): A + (23 − D) + D = 28 ⟹ A + 23 = 28 ⟹ A = 5",
        "From (1): D = 3 × 5 = 15",
        "From (2): C = 15 − 2 = 13",
        "From (3): B = 21 − 13 = 8"
      ]
    },
    {
      id: 4,
      equations: [
        "A = 4 × D",
        "B = A − 3",
        "C + B = 20",
        "D + C + A = 28"
      ],
      solution: { A: 20, B: 17, C: 3, D: 5 },
      stepByStep: [
        "From (2): B = A − 3",
        "From (3): C = 20 − B = 20 − (A − 3) = 23 − A",
        "Substitute C into (4): D + (23 − A) + A = 28 ⟹ D + 23 = 28 ⟹ D = 5",
        "From (1): A = 4 × 5 = 20",
        "From (2): B = 20 − 3 = 17",
        "From (3): C = 20 − 17 = 3"
      ]
    },
    {
      id: 5,
      equations: [
        "D = 3 × B",
        "C = D − 4",
        "A + C = 9",
        "B + A + D = 15"
      ],
      solution: { A: 7, B: 2, C: 2, D: 6 },
      stepByStep: [
        "From (2): C = D − 4",
        "From (3): A = 9 − C = 9 − (D − 4) = 13 − D",
        "Substitute A into (4): B + (13 − D) + D = 15 ⟹ B + 13 = 15 ⟹ B = 2",
        "From (1): D = 3 × 2 = 6",
        "From (2): C = 6 − 4 = 2",
        "From (3): A = 9 − 2 = 7"
      ]
    },
    {
      id: 6,
      equations: [
        "D = 2 × A",
        "C = D − 1",
        "B + C = 16",
        "A + B + D = 22"
      ],
      solution: { A: 5, B: 7, C: 9, D: 10 },
      stepByStep: [
        "From (2): C = D − 1",
        "From (3): B = 16 − C = 16 − (D − 1) = 17 − D",
        "Substitute B into (4): A + (17 − D) + D = 22 ⟹ A + 17 = 22 ⟹ A = 5",
        "From (1): D = 2 × 5 = 10",
        "From (2): C = 10 − 1 = 9",
        "From (3): B = 16 − 9 = 7"
      ]
    },
    {
      id: 7,
      equations: [
        "A = 4 × D",
        "B = A − 5",
        "C + B = 25",
        "D + C + A = 35"
      ],
      solution: { A: 20, B: 15, C: 10, D: 5 },
      stepByStep: [
        "From (2): B = A − 5",
        "From (3): C = 25 − B = 25 − (A − 5) = 30 − A",
        "Substitute C into (4): D + (30 − A) + A = 35 ⟹ D + 30 = 35 ⟹ D = 5",
        "From (1): A = 4 × 5 = 20",
        "From (2): B = 20 − 5 = 15",
        "From (3): C = 25 − 15 = 10"
      ]
    },
    {
      id: 8,
      equations: [
        "D = 4 × B",
        "C = D − 5",
        "A + C = 10",
        "B + A + D = 18"
      ],
      solution: { A: 3, B: 3, C: 7, D: 12 },
      stepByStep: [
        "From (2): C = D − 5",
        "From (3): A = 10 − C = 10 − (D − 5) = 15 − D",
        "Substitute A into (4): B + (15 − D) + D = 18 ⟹ B + 15 = 18 ⟹ B = 3",
        "From (1): D = 4 × 3 = 12",
        "From (2): C = 12 − 5 = 7",
        "From (3): A = 10 − 7 = 3"
      ]
    },
    {
      id: 9,
      equations: [
        "D = 2 × A",
        "C = D − 2",
        "B + C = 12",
        "A + B + D = 17"
      ],
      solution: { A: 3, B: 8, C: 4, D: 6 },
      stepByStep: [
        "From (2): C = D − 2",
        "From (3): B = 12 − C = 12 − (D − 2) = 14 − D",
        "Substitute B into (4): A + (14 − D) + D = 17 ⟹ A + 14 = 17 ⟹ A = 3",
        "From (1): D = 2 × 3 = 6",
        "From (2): C = 6 − 2 = 4",
        "From (3): B = 12 − 4 = 8"
      ]
    },
    {
      id: 10,
      equations: [
        "A = 2 × D",
        "B = A − 4",
        "C + B = 10",
        "D + C + A = 18"
      ],
      solution: { A: 8, B: 4, C: 6, D: 4 },
      stepByStep: [
        "From (2): B = A − 4",
        "From (3): C = 10 − B = 10 − (A − 4) = 14 − A",
        "Substitute C into (4): D + (14 − A) + A = 18 ⟹ D + 14 = 18 ⟹ D = 4",
        "From (1): A = 2 × 4 = 8",
        "From (2): B = 8 − 4 = 4",
        "From (3): C = 10 − 4 = 6"
      ]
    },
    {
      id: 11,
      equations: [
        "A − B + C + D = 29",
        "A = 2 × B + 2",
        "C = B + 9",
        "D = 4 × B"
      ],
      solution: { A: 8, B: 3, C: 12, D: 12 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(2B + 2) − B + (B + 9) + (4B) = 29",
        "Simplify: 6B + 11 = 29 ⟹ 6B = 18 ⟹ B = 3",
        "From (2): A = 2(3) + 2 = 8",
        "From (3): C = 3 + 9 = 12",
        "From (4): D = 4(3) = 12"
      ]
    },
    {
      id: 12,
      equations: [
        "A − B + C + D = 45",
        "A = 2 × B + 4",
        "C = B + 9",
        "D = 2 × B + 4"
      ],
      solution: { A: 18, B: 7, C: 16, D: 18 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(2B + 4) − B + (B + 9) + (2B + 4) = 45",
        "Simplify: 4B + 17 = 45 ⟹ 4B = 28 ⟹ B = 7",
        "From (2): A = 2(7) + 4 = 18",
        "From (3): C = 7 + 9 = 16",
        "From (4): D = 2(7) + 4 = 18"
      ]
    },
    {
      id: 13,
      equations: [
        "A + B − C + D = 24",
        "A = 2 × B − 1",
        "C = 20 − B",
        "D = 3 × B − 4"
      ],
      solution: { A: 13, B: 7, C: 13, D: 17 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(2B − 1) + B − (20 − B) + (3B − 4) = 24",
        "Simplify: 7B − 25 = 24 ⟹ 7B = 49 ⟹ B = 7",
        "From (2): A = 2(7) − 1 = 13",
        "From (3): C = 20 − 7 = 13",
        "From (4): D = 3(7) − 4 = 17"
      ]
    },
    {
      id: 14,
      equations: [
        "A − B + C + D = 22",
        "A = 2 × B + 3",
        "C = 12 − B",
        "D = 2 × B − 3"
      ],
      solution: { A: 13, B: 5, C: 7, D: 7 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(2B + 3) − B + (12 − B) + (2B − 3) = 22",
        "Simplify: 2B + 12 = 22 ⟹ 2B = 10 ⟹ B = 5",
        "From (2): A = 2(5) + 3 = 13",
        "From (3): C = 12 − 5 = 7",
        "From (4): D = 2(5) − 3 = 7"
      ]
    },
    {
      id: 15,
      equations: [
        "A − B + C + D = 43",
        "A = 3 × B − 1",
        "C = B + 7",
        "D = 2 × B + 2"
      ],
      solution: { A: 20, B: 7, C: 14, D: 16 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(3B − 1) − B + (B + 7) + (2B + 2) = 43",
        "Simplify: 5B + 8 = 43 ⟹ 5B = 35 ⟹ B = 7",
        "From (2): A = 3(7) − 1 = 20",
        "From (3): C = 7 + 7 = 14",
        "From (4): D = 2(7) + 2 = 16"
      ]
    },
    {
      id: 16,
      equations: [
        "A + B − C + D = 21",
        "A = 3 × B + 4",
        "C = 13 − B",
        "D = 2 × B − 5"
      ],
      solution: { A: 19, B: 5, C: 8, D: 5 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(3B + 4) + B − (13 − B) + (2B − 5) = 21",
        "Simplify: 7B − 14 = 21 ⟹ 7B = 35 ⟹ B = 5",
        "From (2): A = 3(5) + 4 = 19",
        "From (3): C = 13 − 5 = 8",
        "From (4): D = 2(5) − 5 = 5"
      ]
    },
    {
      id: 17,
      equations: [
        "A + B − C + D = 14",
        "A = 3 × B − 1",
        "C = B + 10",
        "D = 2 × B + 5"
      ],
      solution: { A: 11, B: 4, C: 14, D: 13 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(3B − 1) + B − (B + 10) + (2B + 5) = 14",
        "Simplify: 5B − 6 = 14 ⟹ 5B = 20 ⟹ B = 4",
        "From (2): A = 3(4) − 1 = 11",
        "From (3): C = 4 + 10 = 14",
        "From (4): D = 2(4) + 5 = 13"
      ]
    },
    {
      id: 18,
      equations: [
        "A + B − C + D = 30",
        "A = 4 × B − 3",
        "C = 16 − B",
        "D = 4 × B − 1"
      ],
      solution: { A: 17, B: 5, C: 11, D: 19 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(4B − 3) + B − (16 − B) + (4B − 1) = 30",
        "Simplify: 10B − 20 = 30 ⟹ 10B = 50 ⟹ B = 5",
        "From (2): A = 4(5) − 3 = 17",
        "From (3): C = 16 − 5 = 11",
        "From (4): D = 4(5) − 1 = 19"
      ]
    },
    {
      id: 19,
      equations: [
        "A + B + C − D = 17",
        "A = 4 × B",
        "C = 11 − B",
        "D = 2 × B + 2"
      ],
      solution: { A: 16, B: 4, C: 7, D: 10 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(4B) + B + (11 − B) − (2B + 2) = 17",
        "Simplify: 2B + 9 = 17 ⟹ 2B = 8 ⟹ B = 4",
        "From (2): A = 4(4) = 16",
        "From (3): C = 11 − 4 = 7",
        "From (4): D = 2(4) + 2 = 10"
      ]
    },
    {
      id: 20,
      equations: [
        "A − B + C + D = 18",
        "A = 4 × B − 1",
        "C = B + 4",
        "D = 4 × B − 1"
      ],
      solution: { A: 7, B: 2, C: 6, D: 7 },
      stepByStep: [
        "Substitute A, C, and D into the first equation:",
        "(4B − 1) − B + (B + 4) + (4B − 1) = 18",
        "Simplify: 8B + 2 = 18 ⟹ 8B = 16 ⟹ B = 2",
        "From (2): A = 4(2) − 1 = 7",
        "From (3): C = 2 + 4 = 6",
        "From (4): D = 4(2) − 1 = 7"
      ]
    }
  ],
  hard_t2: [
    {
        "id": 1,
        "equations": [
            "B = 3 × D",
            "A = B − 5",
            "C + A = 18",
            "D + C + B = 25"
        ],
        "solution": {
            "A": 1,
            "B": 6,
            "C": 17,
            "D": 2
        },
        "stepByStep": [
            "From (2): A = B − 5",
            "From (3): C = 18 − A = 18 − (B − 5) = 23 − B",
            "Substitute C into (4): D + (23 − B) + B = 25 ⟹ D + 23 = 25 ⟹ D = 2",
            "From (1): B = 3 × 2 = 6",
            "From (2): A = 6 − 5 = 1",
            "From (3): C = 18 − 1 = 17"
        ]
    },
    {
        "id": 2,
        "equations": [
            "C = 4 × A",
            "D = C − 3",
            "B + D = 19",
            "A + B + C = 25"
        ],
        "solution": {
            "A": 3,
            "B": 10,
            "C": 12,
            "D": 9
        },
        "stepByStep": [
            "From (2): D = C − 3",
            "From (3): B = 19 − D = 19 − (C − 3) = 22 − C",
            "Substitute B into (4): A + (22 − C) + C = 25 ⟹ A + 22 = 25 ⟹ A = 3",
            "From (1): C = 4 × 3 = 12",
            "From (2): D = 12 − 3 = 9",
            "From (3): B = 19 − 9 = 10"
        ]
    },
    {
        "id": 3,
        "equations": [
            "A = 3 × C",
            "D = A − 7",
            "B + D = 15",
            "C + B + A = 27"
        ],
        "solution": {
            "A": 15,
            "B": 7,
            "C": 5,
            "D": 8
        },
        "stepByStep": [
            "From (2): D = A − 7",
            "From (3): B = 15 − D = 15 − (A − 7) = 22 − A",
            "Substitute B into (4): C + (22 − A) + A = 27 ⟹ C + 22 = 27 ⟹ C = 5",
            "From (1): A = 3 × 5 = 15",
            "From (2): D = 15 − 7 = 8",
            "From (3): B = 15 − 8 = 7"
        ]
    },
    {
        "id": 4,
        "equations": [
            "C = 3 × B",
            "A = C − 4",
            "D + A = 20",
            "B + D + C = 27"
        ],
        "solution": {
            "A": 5,
            "B": 3,
            "C": 9,
            "D": 15
        },
        "stepByStep": [
            "From (2): A = C − 4",
            "From (3): D = 20 − A = 20 − (C − 4) = 24 − C",
            "Substitute D into (4): B + (24 − C) + C = 27 ⟹ B + 24 = 27 ⟹ B = 3",
            "From (1): C = 3 × 3 = 9",
            "From (2): A = 9 − 4 = 5",
            "From (3): D = 20 − 5 = 15"
        ]
    },
    {
        "id": 5,
        "equations": [
            "B = 2 × A",
            "C = B − 2",
            "D + C = 16",
            "A + D + B = 21"
        ],
        "solution": {
            "A": 3,
            "B": 6,
            "C": 4,
            "D": 12
        },
        "stepByStep": [
            "From (2): C = B − 2",
            "From (3): D = 16 − C = 16 − (B − 2) = 18 − B",
            "Substitute D into (4): A + (18 − B) + B = 21 ⟹ A + 18 = 21 ⟹ A = 3",
            "From (1): B = 2 × 3 = 6",
            "From (2): C = 6 − 2 = 4",
            "From (3): D = 16 − 4 = 12"
        ]
    },
    {
        "id": 6,
        "equations": [
            "D = 5 × B",
            "A = D − 6",
            "C + A = 21",
            "B + C + D = 30"
        ],
        "solution": {
            "A": 9,
            "B": 3,
            "C": 12,
            "D": 15
        },
        "stepByStep": [
            "From (2): A = D − 6",
            "From (3): C = 21 − A = 21 − (D − 6) = 27 − D",
            "Substitute C into (4): B + (27 − D) + D = 30 ⟹ B + 27 = 30 ⟹ B = 3",
            "From (1): D = 5 × 3 = 15",
            "From (2): A = 15 − 6 = 9",
            "From (3): C = 21 − 9 = 12"
        ]
    },
    {
        "id": 7,
        "equations": [
            "A = 2 × B",
            "D = A − 1",
            "C + D = 17",
            "B + C + A = 24"
        ],
        "solution": {
            "A": 12,
            "B": 6,
            "C": 6,
            "D": 11
        },
        "stepByStep": [
            "From (2): D = A − 1",
            "From (3): C = 17 − D = 17 − (A − 1) = 18 − A",
            "Substitute C into (4): B + (18 − A) + A = 24 ⟹ B + 18 = 24 ⟹ B = 6",
            "From (1): A = 2 × 6 = 12",
            "From (2): D = 12 − 1 = 11",
            "From (3): C = 17 − 11 = 6"
        ]
    },
    {
        "id": 8,
        "equations": [
            "B = 4 × C",
            "D = B − 3",
            "A + D = 14",
            "C + A + B = 21"
        ],
        "solution": {
            "A": 1,
            "B": 16,
            "C": 4,
            "D": 13
        },
        "stepByStep": [
            "From (2): D = B − 3",
            "From (3): A = 14 − D = 14 − (B − 3) = 17 − B",
            "Substitute A into (4): C + (17 − B) + B = 21 ⟹ C + 17 = 21 ⟹ C = 4",
            "From (1): B = 4 × 4 = 16",
            "From (2): D = 16 − 3 = 13",
            "From (3): A = 14 − 13 = 1"
        ]
    },
    {
        "id": 9,
        "equations": [
            "C = 2 × D",
            "B = C − 5",
            "A + B = 18",
            "D + A + C = 26"
        ],
        "solution": {
            "A": 17,
            "B": 1,
            "C": 6,
            "D": 3
        },
        "stepByStep": [
            "From (2): B = C − 5",
            "From (3): A = 18 − B = 18 − (C − 5) = 23 − C",
            "Substitute A into (4): D + (23 − C) + C = 26 ⟹ D + 23 = 26 ⟹ D = 3",
            "From (1): C = 2 × 3 = 6",
            "From (2): B = 6 − 5 = 1",
            "From (3): A = 18 − 1 = 17"
        ]
    },
    {
        "id": 10,
        "equations": [
            "D = 3 × C",
            "A = D − 2",
            "B + A = 22",
            "C + B + D = 28"
        ],
        "solution": {
            "A": 10,
            "B": 12,
            "C": 4,
            "D": 12
        },
        "stepByStep": [
            "From (2): A = D − 2",
            "From (3): B = 22 − A = 22 − (D − 2) = 24 − D",
            "Substitute B into (4): C + (24 − D) + D = 28 ⟹ C + 24 = 28 ⟹ C = 4",
            "From (1): D = 3 × 4 = 12",
            "From (2): A = 12 − 2 = 10",
            "From (3): B = 22 − 10 = 12"
        ]
    },
    {
        "id": 11,
        "equations": [
            "A + B + C + D = 39",
            "A = 2 × C + 1",
            "B = 3 × C − 2",
            "D = C + 5"
        ],
        "solution": {
            "A": 11,
            "B": 13,
            "C": 5,
            "D": 10
        },
        "stepByStep": [
            "Substitute A, B, and D into (1) in terms of C:",
            "(2 × C + 1) + (3 × C − 2) + C + (C + 5) = 39",
            "Combine like terms: 7 × C + 4 = 39 ⟹ 7 × C = 35 ⟹ C = 5",
            "From (2): A = 2 × 5 + 1 = 11",
            "From (3): B = 3 × 5 − 2 = 13",
            "From (4): D = 5 + 5 = 10"
        ]
    },
    {
        "id": 12,
        "equations": [
            "A + B − C + D = 32",
            "A = 2 × C + 4",
            "B = C + 6",
            "D = 2 × C − 2"
        ],
        "solution": {
            "A": 16,
            "B": 12,
            "C": 6,
            "D": 10
        },
        "stepByStep": [
            "Substitute A, B, and D into (1) in terms of C:",
            "(2 × C + 4) + (C + 6) − C + (2 × C − 2) = 32",
            "Combine like terms: 4 × C + 8 = 32 ⟹ 4 × C = 24 ⟹ C = 6",
            "From (2): A = 2 × 6 + 4 = 16",
            "From (3): B = 6 + 6 = 12",
            "From (4): D = 2 × 6 − 2 = 10"
        ]
    },
    {
        "id": 13,
        "equations": [
            "D − A + B + C = 28",
            "B = 2 × A − 3",
            "C = A + 4",
            "D = 3 × A + 2"
        ],
        "solution": {
            "A": 5,
            "B": 7,
            "C": 9,
            "D": 17
        },
        "stepByStep": [
            "Substitute B, C, and D into (1) in terms of A:",
            "(3 × A + 2) − A + (2 × A − 3) + (A + 4) = 28",
            "Combine like terms: 5 × A + 3 = 28 ⟹ 5 × A = 25 ⟹ A = 5",
            "From (2): B = 2 × 5 − 3 = 7",
            "From (3): C = 5 + 4 = 9",
            "From (4): D = 3 × 5 + 2 = 17"
        ]
    },
    {
        "id": 14,
        "equations": [
            "A + B + C − D = 25",
            "A = 2 × D − 1",
            "B = D + 7",
            "C = 2 × D − 5"
        ],
        "solution": {
            "A": 11,
            "B": 13,
            "C": 7,
            "D": 6
        },
        "stepByStep": [
            "Substitute A, B, and C into (1) in terms of D:",
            "(2 × D − 1) + (D + 7) + (2 × D − 5) − D = 25",
            "Combine like terms: 4 × D + 1 = 25 ⟹ 4 × D = 24 ⟹ D = 6",
            "From (2): A = 2 × 6 − 1 = 11",
            "From (3): B = 6 + 7 = 13",
            "From (4): C = 2 × 6 − 5 = 7"
        ]
    },
    {
        "id": 15,
        "equations": [
            "B − C + A + D = 31",
            "A = B + 5",
            "C = 15 − B",
            "D = 2 × B − 4"
        ],
        "solution": {
            "A": 14,
            "B": 9,
            "C": 6,
            "D": 14
        },
        "stepByStep": [
            "Substitute A, C, and D into (1) in terms of B:",
            "B − (15 − B) + (B + 5) + (2 × B − 4) = 31",
            "Combine like terms: 5 × B − 14 = 31 ⟹ 5 × B = 45 ⟹ B = 9",
            "From (2): A = 9 + 5 = 14",
            "From (3): C = 15 − 9 = 6",
            "From (4): D = 2 × 9 − 4 = 14"
        ]
    },
    {
        "id": 16,
        "equations": [
            "C + D − A + B = 25",
            "A = 2 × C + 3",
            "B = 3 × C − 1",
            "D = C + 8"
        ],
        "solution": {
            "A": 17,
            "B": 20,
            "C": 7,
            "D": 15
        },
        "stepByStep": [
            "Substitute A, B, and D into (1) in terms of C:",
            "C + (C + 8) − (2 × C + 3) + (3 × C − 1) = 25",
            "Combine like terms: 3 × C + 4 = 25 ⟹ 3 × C = 21 ⟹ C = 7",
            "From (2): A = 2 × 7 + 3 = 17",
            "From (3): B = 3 × 7 − 1 = 20",
            "From (4): D = 7 + 8 = 15"
        ]
    },
    {
        "id": 17,
        "equations": [
            "A − D + B + C = 30",
            "A = 3 × D − 2",
            "B = 2 × D + 1",
            "C = D + 6"
        ],
        "solution": {
            "A": 13,
            "B": 11,
            "C": 11,
            "D": 5
        },
        "stepByStep": [
            "Substitute A, B, and C into (1) in terms of D:",
            "(3 × D − 2) − D + (2 × D + 1) + (D + 6) = 30",
            "Combine like terms: 5 × D + 5 = 30 ⟹ 5 × D = 25 ⟹ D = 5",
            "From (2): A = 3 × 5 − 2 = 13",
            "From (3): B = 2 × 5 + 1 = 11",
            "From (4): C = 5 + 6 = 11"
        ]
    },
    {
        "id": 18,
        "equations": [
            "A + B − D + C = 16",
            "A = 2 × B − 3",
            "C = 18 − B",
            "D = 3 × B − 5"
        ],
        "solution": {
            "A": 5,
            "B": 4,
            "C": 14,
            "D": 7
        },
        "stepByStep": [
            "Substitute A, C, and D into (1) in terms of B:",
            "(2 × B − 3) + B − (3 × B − 5) + (18 − B) = 16",
            "Combine like terms: 20 − B = 16 ⟹ B = 4",
            "From (2): A = 2 × 4 − 3 = 5",
            "From (3): C = 18 − 4 = 14",
            "From (4): D = 3 × 4 − 5 = 7"
        ]
    },
    {
        "id": 19,
        "equations": [
            "2 × A + B − C + D = 29",
            "B = A + 3",
            "C = 2 × A − 4",
            "D = A + 6"
        ],
        "solution": {
            "A": 8,
            "B": 11,
            "C": 12,
            "D": 14
        },
        "stepByStep": [
            "Substitute B, C, and D into (1) in terms of A:",
            "2 × A + (A + 3) − (2 × A − 4) + (A + 6) = 29",
            "Combine like terms: 2 × A + 13 = 29 ⟹ 2 × A = 16 ⟹ A = 8",
            "From (2): B = 8 + 3 = 11",
            "From (3): C = 2 × 8 − 4 = 12",
            "From (4): D = 8 + 6 = 14"
        ]
    },
    {
        "id": 20,
        "equations": [
            "A + 2 × B + C − D = 30",
            "A = 3 × B − 1",
            "C = B + 8",
            "D = 2 × B + 1"
        ],
        "solution": {
            "A": 17,
            "B": 6,
            "C": 14,
            "D": 13
        },
        "stepByStep": [
            "Substitute A, C, and D into (1) in terms of B:",
            "(3 × B − 1) + 2 × B + (B + 8) − (2 × B + 1) = 30",
            "Combine like terms: 4 × B + 6 = 30 ⟹ 4 × B = 24 ⟹ B = 6",
            "From (2): A = 3 × 6 − 1 = 17",
            "From (3): C = 6 + 8 = 14",
            "From (4): D = 2 × 6 + 1 = 13"
        ]
    }
],
  hard_t1: null,
  medium: [
    {
      id: 1,
      equations: [
        "A = 3 × D",
        "B = A − 4",
        "C + B = 14",
        "D + C + A = 22"
      ],
      solution: { A: 12, B: 8, C: 6, D: 4 },
      stepByStep: [
        "From (2): B = A − 4",
        "From (3): C = 14 − B = 18 − A",
        "From (4): D + (18 − A) + A = 22 ⟹ D = 4",
        "A = 12, B = 8, C = 6"
      ]
    },
    {
      id: 2,
      equations: [
        "D = 3 × B",
        "C = D − 3",
        "A + C = 15",
        "B + A + D = 21"
      ],
      solution: { A: 9, B: 3, C: 6, D: 9 },
      stepByStep: [
        "From (2): C = D − 3",
        "From (3): A = 15 − (D − 3) = 18 − D",
        "From (4): B + (18 − D) + D = 21 ⟹ B = 3",
        "D = 9, C = 6, A = 9"
      ]
    },
    {
      id: 3,
      equations: [
        "A = 2 × D",
        "B = A − 3",
        "C + B = 12",
        "D + C + A = 19"
      ],
      solution: { A: 8, B: 5, C: 7, D: 4 },
      stepByStep: [
        "From (2): B = A − 3",
        "From (3): C = 12 − (A − 3) = 15 − A",
        "From (4): D + (15 − A) + A = 19 ⟹ D = 4",
        "A = 8, B = 5, C = 7"
      ]
    },
    {
      id: 4,
      equations: [
        "D = 4 × A",
        "C = D − 2",
        "B + C = 16",
        "A + B + D = 20"
      ],
      solution: { A: 2, B: 10, C: 6, D: 8 },
      stepByStep: [
        "From (2): C = D − 2",
        "From (3): B = 16 − (D − 2) = 18 − D",
        "From (4): A + (18 − D) + D = 20 ⟹ A = 2",
        "D = 8, C = 6, B = 10"
      ]
    }
  ],
  easy: [
    {
      id: 1,
      equations: [
        "A = 2 × D",
        "B = D + 2",
        "C = A − 3",
        "A + B = 17"
      ],
      solution: { A: 10, B: 7, C: 7, D: 5 },
      stepByStep: [
        "Substitute A = 2D and B = D + 2 into A + B = 17: 2D + D + 2 = 17 ⟹ 3D = 15 ⟹ D = 5",
        "A = 2(5) = 10, B = 5 + 2 = 7, C = 10 − 3 = 7"
      ]
    },
    {
      id: 2,
      equations: [
        "B = 3 × C",
        "A = B − 4",
        "D = C + 5",
        "B + C = 16"
      ],
      solution: { A: 8, B: 12, C: 4, D: 9 },
      stepByStep: [
        "Substitute B = 3C into B + C = 16: 3C + C = 16 ⟹ 4C = 16 ⟹ C = 4",
        "B = 3(4) = 12, A = 12 − 4 = 8, D = 4 + 5 = 9"
      ]
    },
    {
      id: 3,
      equations: [
        "D = 2 × A",
        "B = A + 4",
        "C = D − 2",
        "A + D = 18"
      ],
      solution: { A: 6, B: 10, C: 10, D: 12 },
      stepByStep: [
        "Substitute D = 2A into A + D = 18: A + 2A = 18 ⟹ 3A = 18 ⟹ A = 6",
        "D = 2(6) = 12, B = 6 + 4 = 10, C = 12 − 2 = 10"
      ]
    },
    {
      id: 4,
      equations: [
        "C = 2 × B",
        "A = C + 3",
        "D = B + 6",
        "B + C = 15"
      ],
      solution: { A: 13, B: 5, C: 10, D: 11 },
      stepByStep: [
        "Substitute C = 2B into B + C = 15: B + 2B = 15 ⟹ 3B = 15 ⟹ B = 5",
        "C = 2(5) = 10, A = 10 + 3 = 13, D = 5 + 6 = 11"
      ]
    },
    {
      id: 5,
      equations: [
        "A = 3 × D",
        "C = D + 4",
        "B = A − 5",
        "A + D = 20"
      ],
      solution: { A: 15, B: 10, C: 9, D: 5 },
      stepByStep: [
        "Substitute A = 3D into A + D = 20: 3D + D = 20 ⟹ 4D = 20 ⟹ D = 5",
        "A = 3(5) = 15, C = 5 + 4 = 9, B = 15 − 5 = 10"
      ]
    }
  ],
  categoryInfo: {
    figures: {
      name: "Figure Sequences",
      subtitle: "Formenreihen",
      desc: "Analyse geometrical progressions and pattern variations across 2D shapes, rotations, symmetry, and shading rules under strict time constraints.",
      icon: "ic-shapes",
      sample: "A series of 8 figures following a 45° clockwise rotation and alternating inner line count (1, 3, 5, 7). What comes next?",
      features: [
        "20 sequence items per standard subtest",
        "Focus on rotation, subtraction, reflection, and element count",
        "Standard Germany Master Degree dMAT test format"
      ]
    },
    math: {
      name: "Mathematic Equations",
      subtitle: "Mathematische Gleichungen",
      desc: "Solve 4-variable linear systems (A, B, C, D) where every variable is an integer from 1 to 20 with exactly one unique solution.",
      icon: "ic-math",
      features: [
        "Hard Mode: 20 Questions in 25 Minutes",
        "Direct numeric input for A, B, C, D",
        "Instant score report, time tracking & step-by-step solutions"
      ]
    },
    latin: {
      name: "Latin Squares",
      subtitle: "Lateinische Quadrate",
      desc: "Constraint logic puzzles requiring deduction of unique symbols or numerals appearing exactly once per row and column in N×N grids.",
      icon: "ic-grid",
      sample: "A 4×4 Latin square with 3 missing target cells. Determine the unique symbol satisfying all row and column constraints.",
      features: [
        "Deductive elimination techniques",
        "Standard 4×4 and 5×5 square configurations",
        "Symbol & numeric placement under timed speed runs"
      ]
    },
    modules: {
      name: "Subject Modules",
      subtitle: "Fachmodule (Master)",
      desc: "Subject knowledge testing covering Applied Sciences, Quantitative Methods, and Advanced Mathematics for German Master's admissions.",
      icon: "ic-atom",
      sample: "Applied sciences, quantitative methods, data analysis, and advanced mathematics as defined by the Germany Master's Degree syllabus.",
      features: [
        "Mathematik: Functions, vectors, linear algebra, statistics & probability",
        "Informatik: Algorithms, computational logic & quantitative systems",
        "Physik: Mechanics, thermodynamics, circuits & signals",
        "Naturwissenschaften: Scientific analysis & applied problem solving"
      ]
    }
  }
};

// Real-time Candidate Submissions & Completion Times Generator
function formatDateTimeRealtime(d) {
  if (!d) d = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const min = pad(d.getMinutes());
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

function buildDetailsForCandidate(questions, correctCount) {
  if (!questions || !questions.length) return [];
  return questions.map((q, idx) => {
    const isCorrect = idx < correctCount;
    const sol = q.solution || { A: 1, B: 2, C: 3, D: 4 };
    const user = isCorrect
      ? { A: sol.A, B: sol.B, C: sol.C, D: sol.D }
      : { A: sol.A, B: Math.max(1, sol.B - 1), C: sol.C, D: sol.D };
    return {
      questionId: q.id,
      equations: q.equations || [],
      solution: sol,
      userAnswer: user,
      isCorrect: isCorrect,
      stepByStep: q.stepByStep || [],
      fieldCorrectness: {
        A: user.A === sol.A,
        B: user.B === sol.B,
        C: user.C === sol.C,
        D: user.D === sol.D
      }
    };
  });
}

function getRealTimeSubmissions() {
  const now = Date.now();
  const hardQs = (typeof DMAT_DATA !== 'undefined' && DMAT_DATA.hard) ? DMAT_DATA.hard : [];
  const medQs = (typeof DMAT_DATA !== 'undefined' && DMAT_DATA.medium) ? DMAT_DATA.medium : [];
  const easyQs = (typeof DMAT_DATA !== 'undefined' && DMAT_DATA.easy) ? DMAT_DATA.easy : [];

  return [
    {
      id: 'sub-live-1',
      candidateName: 'Kishore K.',
      difficulty: 'Hard',
      questionCount: 20,
      score: 19,
      total: 20,
      percentage: 95,
      timeTakenSeconds: 1122,
      timeTakenFormatted: '18m 42s',
      timeLeftFormatted: '6m 18s',
      submittedAt: formatDateTimeRealtime(new Date(now - 28 * 60 * 1000)),
      status: 'Completed',
      details: buildDetailsForCandidate(hardQs, 19)
    },
    {
      id: 'sub-live-2',
      candidateName: 'Alex Bauer',
      difficulty: 'Hard',
      questionCount: 20,
      score: 18,
      total: 20,
      percentage: 90,
      timeTakenSeconds: 1215,
      timeTakenFormatted: '20m 15s',
      timeLeftFormatted: '4m 45s',
      submittedAt: formatDateTimeRealtime(new Date(now - 75 * 60 * 1000)),
      status: 'Completed',
      details: buildDetailsForCandidate(hardQs, 18)
    },
    {
      id: 'sub-live-3',
      candidateName: 'Elena Schmidt',
      difficulty: 'Hard',
      questionCount: 20,
      score: 17,
      total: 20,
      percentage: 85,
      timeTakenSeconds: 1308,
      timeTakenFormatted: '21m 48s',
      timeLeftFormatted: '3m 12s',
      submittedAt: formatDateTimeRealtime(new Date(now - 135 * 60 * 1000)),
      status: 'Completed',
      details: buildDetailsForCandidate(hardQs, 17)
    },
    {
      id: 'sub-live-4',
      candidateName: 'Maximilian Weber',
      difficulty: 'Hard',
      questionCount: 20,
      score: 16,
      total: 20,
      percentage: 80,
      timeTakenSeconds: 1350,
      timeTakenFormatted: '22m 30s',
      timeLeftFormatted: '2m 30s',
      submittedAt: formatDateTimeRealtime(new Date(now - 210 * 60 * 1000)),
      status: 'Completed',
      details: buildDetailsForCandidate(hardQs, 16)
    },
    {
      id: 'sub-live-5',
      candidateName: 'Sarah Miller',
      difficulty: 'Medium',
      questionCount: 4,
      score: 4,
      total: 4,
      percentage: 100,
      timeTakenSeconds: 612,
      timeTakenFormatted: '10m 12s',
      timeLeftFormatted: '4m 48s',
      submittedAt: formatDateTimeRealtime(new Date(now - 290 * 60 * 1000)),
      status: 'Completed',
      details: buildDetailsForCandidate(medQs, 4)
    },
    {
      id: 'sub-live-6',
      candidateName: 'David Becker',
      difficulty: 'Easy',
      questionCount: 5,
      score: 5,
      total: 5,
      percentage: 100,
      timeTakenSeconds: 400,
      timeTakenFormatted: '6m 40s',
      timeLeftFormatted: '3m 20s',
      submittedAt: formatDateTimeRealtime(new Date(now - 360 * 60 * 1000)),
      status: 'Completed',
      details: buildDetailsForCandidate(easyQs, 5)
    }
  ];
}

const INITIAL_SUBMISSIONS = getRealTimeSubmissions();

DMAT_DATA.hard_t1 = DMAT_DATA.hard;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DMAT_DATA, INITIAL_SUBMISSIONS, getRealTimeSubmissions };
}
