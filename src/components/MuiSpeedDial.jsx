import React from 'react'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import Backdrop from '@mui/material/Backdrop';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
function MuiSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        <Backdrop open={open} />
        <SpeedDial
            ariaLabel=''
            sx={{ 
            '& .MuiFab-primary': { 
                width: 45, height: 45, 
                background: '#fb923c',
                '&:hover': {backgroundColor: '#fb923c'},
         },
            position: 'fixed',
            bottom: 40, right: 20,  
        }}
            icon={
                // <img src={gameController} className='h-6 w-6' alt='icon'  
                <SpeedDialIcon />
            }

            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
            />
            ))}
        </SpeedDial>
    </>
  )
}

export default MuiSpeedDial