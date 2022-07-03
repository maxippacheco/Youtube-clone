import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, LoginOutlined, VideoSettingsOutlined, VpnKeyOutlined, AddCircleOutline } from '@mui/icons-material';


export const SideMenu = () => {
  return (
    <Drawer
        open={ false }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            

            <List
                subheader={
                    <ListSubheader>Youtobe</ListSubheader>
                }
            >

                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'} />
                </ListItem>



                <ListItem button>
                    <ListItemIcon>
                        <VpnKeyOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Log in'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Log out'} />
                </ListItem>


                {/* Admin */}
                <Divider />
                <ListSubheader>Videos Panel</ListSubheader>

                <ListItem button>
                    <ListItemIcon>
                        <VideoSettingsOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Your videos'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleOutline />
                    </ListItemIcon>
                    <ListItemText primary={'Create'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AdminPanelSettings/>
                    </ListItemIcon>
                    <ListItemText primary={'User settings'} />
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}