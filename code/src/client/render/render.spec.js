const { Render, errorMessage } = require('./render');

const elem = {
  html: jest.fn(),
};

describe('the rendering helper', () => {
  it('should render an error message when error is called', () => {
    const render = new Render(elem);
    render.error();
    expect(elem.html).toBeCalledWith(errorMessage);
  });
});
