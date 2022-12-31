import { Dashboard } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function SidebarItem({title, icon}) {
  return (
    <ListItemButton>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  )
}

export default SidebarItem