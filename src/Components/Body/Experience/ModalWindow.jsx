import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import './Experience.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid lightgreen',
  boxShadow: 24,
  p: 4,
}
const button = {
  p: 1.1,
  color: 'black',
  bgcolor: 'lightgreen',
  
}


export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button sx={button} onClick={handleOpen}>
        Full description
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Photography Video and Marketing
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Photographer at "Paraná Digitales".
            <br />
            <br />
            Coordination and organization of national and international events
            (Photography). <br />
            <br />
            Content creator(Photography and Video) various events. <br />
            <br />
            Photographer and editor in the organization "Audio Visual
            Communication of the province of Entre Ríos". <br />
            <br />
            In addition, I developed my digital Marketing ventures
            autonomously-sales (soft skills with clients)
          </Typography>
          <br/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Physical education
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Employment dependency relationship 2016 - 2017
            <br />
            <br />
            Teacher and coordinator of educational games and activities in
            children's events "Larrymanias". <br/>
            <br/>
            Attention to the public in "Rest
            Bar Betty boob" 2014-2015
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
