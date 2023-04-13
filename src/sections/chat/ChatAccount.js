import { useState } from 'react';
// @mui
import { Box, Stack, Typography } from '@mui/material';
import BadgeStatus from '../../components/ChatThemeComp/BadgeStatus';
import MenuPopover from '../../components/ChatThemeComp/MenuPopover';
import MyAvatar from '../../components/User/Profile/MyAvatar';
import { useSelector } from 'react-redux';


// ----------------------------------------------------------------------

const STATUS = ['online', 'invisible', 'away'];

export default function ChatAccount() {

  const [status, setStatus] = useState('online');

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  const { imgUrl } = useSelector((state) => state.login);

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <MyAvatar imgUrl={imgUrl} onClick={handleOpen} sx={{ cursor: 'pointer', width: 48, height: 48 }} />
        <BadgeStatus status={status} sx={{ position: 'absolute', bottom: 2, right: 2 }} />
      </Box>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        arrow="left-top"
        sx={{ p: 0, ml: 0.5, width: 'auto' }}
      >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2, pr: 3, pl: 2.5 }}>
          <div>
            <Typography noWrap variant="subtitle1">
              Dinindu Chamikara
            </Typography>
            <Typography noWrap variant="body2" sx={{ color: 'text.secondary' }}>
              {/* {user?.email} */}
              dinindu@gmail.com
            </Typography>
          </div>

        </Stack>

      
      </MenuPopover>
    </>
  );
}
