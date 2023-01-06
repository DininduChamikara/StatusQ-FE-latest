import { Box, Card, Container } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import useSettings from '../../hooks/useSettings';
import ChatSidebar from '../../sections/chat/ChatSidebar';
import ChatWindow from '../../sections/chat/ChatWindow';

function AdminComplaints() {

  const { themeStretch } = useSettings();

  return (
    <Box>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {/* <Typography>Chat (dacoreate later)</Typography> */}
        <Card sx={{ height: '80vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </Box>
  )
}

export default AdminComplaints