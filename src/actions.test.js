import { GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';

describe('generateAuralUpdate', () => {
  it('Should return the action', () => {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});

describe('restartGame', () => {
  it('Should return the action', () => {
    const action = restartGame();
    expect(action.type).toEqual(RESTART_GAME);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = 5;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
})