import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';

function ConfirmDeleteMenu(props: {
  handleDelete: (id: string) => void;
  targetId: string;
  disabled?: boolean;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = () => {
    props.handleDelete(props.targetId);
    handleClose();
  };

  return (
    <>
      <IconButton
        edge="end"
        size="small"
        id="basic-button"
        disabled={props.disabled}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DeleteIcon color="error" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={onDelete} sx={{ backgroundColor: 'tomato' }}>
          Confirm
        </MenuItem>
        <MenuItem onClick={handleClose}>Cancel</MenuItem>
      </Menu>
    </>
  );
}

export default ConfirmDeleteMenu;
