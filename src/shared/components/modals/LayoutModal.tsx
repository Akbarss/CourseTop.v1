import { Box, Fade, Modal } from '@mui/material';

export const styleModal = {
  position: 'absolute',
  top: '53%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 280, sm: 400, md: 600, lg: 'auto' },
  minWidth: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: '20px', md: '30px' },
  borderRadius: '7px',
  overflow: 'scroll',
  height: 'auto',
  maxHeight: '85%',
};

interface LayoutModalProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setOpen: Function;
  zIndex?: number;
}

const LayoutModal = (props: LayoutModalProps) => {
  return (
    <Box>
      <Box onClick={() => props?.setOpen(true)}>{props?.icon}</Box>
      <Modal
        sx={{ zIndex: props.zIndex || 9999 }}
        disableEnforceFocus
        open={props?.open}
        onClose={() => props?.setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={props?.open} {...{ timeout: 700 }}>
          <Box sx={styleModal} className="noHidenScroll">
            {props?.children}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default LayoutModal;
