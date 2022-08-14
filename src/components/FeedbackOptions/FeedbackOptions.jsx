import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      <li>
        <Button
          onClick={() => {
            onLeaveFeedback('good');
          }}
        >
          Good
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            onLeaveFeedback('neutral');
          }}
        >
          Neutral
        </Button>
      </li>
      <li>
        <Button
          onClick={() => {
            onLeaveFeedback('bad');
          }}
        >
          Bad
        </Button>
      </li>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
