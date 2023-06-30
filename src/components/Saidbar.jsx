import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';

const saidbar = ({ mode, setMode }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: 'block' } }}>
          <Box position='fixed'>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>
                    <HomeTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home pages" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pages" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PeopleTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StorefrontTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Market plase" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Groups2TwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DarkModeTwoToneIcon />
                  </ListItemIcon>
                  <Switch  onChange={(e) => { setMode(mode === 'light' ? "dark" : 'light') }}/>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
    )
}

export default saidbar