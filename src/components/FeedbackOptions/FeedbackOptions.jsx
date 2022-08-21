import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      {options.map(option => {
        return (
          <li key={option}>
            <Button
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          </li>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
