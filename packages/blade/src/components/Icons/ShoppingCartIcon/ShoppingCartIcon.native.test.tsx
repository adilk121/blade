import ShoppingCartIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<ShoppingCartIcon />', () => {
  it('should render ShoppingCartIcon', () => {
    const renderTree = renderWithTheme(
      <ShoppingCartIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
