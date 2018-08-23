import reducer from './reducer';
import { generateAuralUpdate, restartGame, makeGuess } from './actions';


describe('restartGame', () => {
  it('Should restart the game', () => {
    let state = {
      guesses: [44, 21, 75],
      feedback: 'Some feedback',
      auralStatus: 'Some aural status',
      correctAnswer: Math.round(Math.random() * 100) + 1      
    };
    state = reducer(state, restartGame());
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.auralStatus).toEqual('');
  });
});

describe('generateAuralUpdate', () => {
  it('Should generate an aural update', () => {
    let state = {
      guesses: [44, 21, 75],
      feedback: 'Some feedback',
      auralStatus: '',
    };
    state = reducer(state, generateAuralUpdate());
    expect(state.auralStatus).toEqual('Here\'s the status of the game right now: Some feedback You\'ve made 3 guesses. In order of most- to least-recent, they are: 75, 21, 44');
  });

  describe('makeGuess', () => {
    it('Should enter a guess', () => {
      let state = {
        guesses: [],
        feedback: '',
        auralStatus: '',
        correctAnswer: 45    
      };
      const guess = 40;
      state = reducer(state, makeGuess(guess));
      expect(state).toEqual({
          guesses: [ 40 ],
          feedback: 'You\'re Hot!',
          auralStatus: '',
          correctAnswer: 45
      });
    });
  });
});