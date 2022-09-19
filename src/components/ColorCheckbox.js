import Checkbox from '@mui/material/Checkbox';
import { withStyles } from '@mui/styles';

const ColorCheckbox = withStyles({
  root: {
    color: '#0096C7',
    '&$checked': {
      color: '#0096C7',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default ColorCheckbox;
