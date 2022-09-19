import { useSnackbar } from 'notistack';

let snackBar;
export const SnackbarUtils = () => {
  snackBar = useSnackbar();
  return null;
};

export default {
  success(msg) {
    this.toast(msg, 'success');
  },
  warning(msg) {
    this.toast(msg, 'warning');
  },
  info(msg) {
    this.toast(msg, 'info');
  },
  error(msg) {
    this.toast(msg, 'error');
  },
  toast(msg, variant) {
    snackBar.enqueueSnackbar(msg, { variant });
  },
};