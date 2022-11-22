import { Dispatch, ReactNode, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Divider, Typography } from '@mui/material';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

type Props = {
  btnText: string;
  btnColor:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  title: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
  handleOpen: () => void;
  children: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
};

const BaseModal = (props: Props) => {
  return (
    <div>
      <Button
        onClick={props.handleOpen}
        variant={props.variant}
        color={props.btnColor}
      >
        {props.btnText}
      </Button>
      <Modal open={props.open} onClose={props.handleClose} disableEnforceFocus>
        <Box sx={style}>
          <Typography variant="h6" fontWeight={600}>
            {props.title}
          </Typography>
          <Divider />
          <Box mt={5} mb={3}>
            {props.children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BaseModal;
