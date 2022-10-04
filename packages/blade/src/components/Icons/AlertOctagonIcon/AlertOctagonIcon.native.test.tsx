import AlertOctagonIcon from '.';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<AlertOctagonIcon />', () => {
  it('should render AlertOctagonIcon', () => {
    const renderTree = renderWithTheme(
      <AlertOctagonIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
