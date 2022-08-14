import PropTypes from 'prop-types';
import { ListElStyle, Total, Percentage } from './Statistic.styled';
import { Box } from 'components/Box';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
      <li>
        <ListElStyle>Good: {good}</ListElStyle>
      </li>
      <li>
        <ListElStyle>Neutral: {neutral}</ListElStyle>
      </li>
      <li>
        <ListElStyle>Bad: {bad}</ListElStyle>
      </li>
      <li>
        <Total>Total: {total()}</Total>
      </li>
      <li>
        <Percentage>
          ListElStyleositive feedBack: {positivePercentage()}
        </Percentage>
      </li>
    </Box>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
