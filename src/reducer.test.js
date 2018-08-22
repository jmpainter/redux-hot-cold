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

});