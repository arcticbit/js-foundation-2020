const obj = {
  run: jest.fn(),
};

function exec(obj) {
  obj.run('sad panda');
}

describe('the test obj', () => {
  it('should register calls to run', () => {
    exec(obj);
    expect(obj.run).toBeCalledWith('lollercopter');
  });
});
