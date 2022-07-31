import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { YoutubeLayout } from '../layouts';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { FileUploadOutlined } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CreatevideoPage = () =>  {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <YoutubeLayout>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ padding: 2, width: 250, fontSize: 18}}>
        Create your video
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create new video
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
     
		      <ListItem>
            <ListItemText primary="Title:" />
						<TextField 
							sx={{ flexGrow: 1 }}
						/>
          </ListItem>
        
				  <Divider />
          <ListItem>
            <ListItemText
              primary="Desc:"
            />
						<TextField sx={{ flexGrow: 1 }} />
          </ListItem>

				  <Divider />
          <ListItem sx={{ mb: 8 }}>
            <ListItemText
              primary="Tags"
            />
						<TextField sx={{ flexGrow: 1 }} />
          </ListItem>

					<ListItem sx={{ display: 'flex', justifyContent: 'center', paddingX: 10 }} button>
						<Box 
							sx={{ 
								border: 'dashed',
								width: '100%', 
								height: 300,
								display: 'flex', 
								justifyContent: 'center', 
								alignItems:'center', 
								flexDirection: 'column',
								":hover":{
									backgroundColor: "rgba(255, 255, 255, 0.2)",
									border: "dashed",
									cursor: 'pointer'
								}
							}}
						>
							<Typography variant="h5" mb={ 1 }>Upload your video</Typography>
							<FileUploadOutlined fontSize='large' />
						</Box>
					</ListItem>

        </List>
      </Dialog>
    </YoutubeLayout>
  );
}