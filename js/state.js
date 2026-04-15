// js/state.js

export const appState = {
  settings: {
    aadl: {
      1: "high",
      2: "middle",
      3: "under",
      4: "high",
      5: "middle"
    },
    iadl: {
      1: "under",
      2: "middle",
      3: "high",
      4: "under",
      5: "high"
    }
  },

  testSet: [],
  currentQuestionIndex: 0,
  answers: [],
  score: 0,
  results: [],

  patientInfo: {
    name: "",
    age: "",
    gender: ""
  },

  currentPage: null,
  pageHistory: []
};