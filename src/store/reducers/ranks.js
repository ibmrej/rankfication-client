const initialState = {
  list: [
    { id: 1, sortOrder: 6, title: "Bobo da Corte", minScore: 0 },
    { id: 2, sortOrder: 5, title: "Clero", minScore: 10 },
    { id: 3, sortOrder: 4, title: "Cavaleiro/Cavaleira", minScore: 20 },
    { id: 4, sortOrder: 3, title: "Principe/Princesa", minScore: 30 },
    { id: 5, sortOrder: 2, title: "Rei/Rainha", minScore: 40 },
    { id: 6, sortOrder: 1, title: "Imperador/Imperatriz", minScore: 50 }
  ]
};

export default (state = initialState) => state;
