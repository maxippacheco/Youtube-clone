import { YoutubeLayout } from "../layouts"
import { Box, Grid, IconButton, Typography, CardMedia, Button } from '@mui/material';
import { DownloadOutlined, ShareOutlined, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";

export const VideoPage = () => {
	return (
		<YoutubeLayout>
			<Grid container spacing={ 2 }>
				<Grid item xs={ 12 } sm={ 9 }>
					<Box>
						<video style={{ height: '90%', width: '100%' }} controls>
							<source src="../../public/video.mp4" type="video/mp4" />
						</video>
					</Box>

					<Typography variant="h3" component="h3" fontSize={30} sx={{ mt: 2, pl: 1.5 }}>Title of the video</Typography>
					<Typography variant="caption" sx={{ pl: 1.5 }} color="gray">28.500 visualizaciones</Typography>

					<Box sx={{ display: 'flex', justifyContent: { xs: 'space-between', md: 'end' }, width: '100%' }}>
							<IconButton sx={{ p: 2}}>
								<ThumbUpOutlined />
							</IconButton>

							<IconButton sx={{ px: 2}}>
								<ThumbDownOutlined />
							</IconButton>

							<IconButton sx={{ px: 2}}>
								<ShareOutlined />
							</IconButton>

							<IconButton sx={{ px: 2}}>
								<DownloadOutlined />
							</IconButton>
					</Box>

					<Box sx={{ px: 1.5, display: 'flex', justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex'}}>
							<CardMedia
								component="image"
								image="https://i.pinimg.com/originals/ee/81/b0/ee81b07446b151f39d60a8b6e74914a2.jpg"
								sx={{ height: 60, width: 60, borderRadius: 100 }}
							/>
							<Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, ml: 1}}>
								<Typography>Channel</Typography>
								<Typography variant="caption" display="block" color="gray" >29.500 subscribers</Typography>
							</Box>
						</Box>

						<Button variant="text" color="error">SUBSCRIBE</Button>

					</Box>

				</Grid>
				

				<Grid item xs={ 12 } sm={ 3 }>

						<Typography sx={{ mb: 2 }}>Recommended Videos</Typography>

						<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }}}>
							<CardMedia 
								component="image"
								image="https://i.pinimg.com/originals/ee/81/b0/ee81b07446b151f39d60a8b6e74914a2.jpg"
								sx={{ width: { md: '40%', xs: '100%' }, height: { md: 100, xs: 200 }, display: { md: 'flex', xs: 'none'} }}
							/>

							<Box sx={{ width: '60%', pl: 1.5, display: { md: 'block', xs: 'none' } }}>

								<Typography variant="subtitle1">Title of the video</Typography>
								<Typography variant="caption" display="block" color="gray">Channel</Typography>
								<Typography variant="caption" display="block" color="gray">29.500 visualizaciones</Typography>
								<Typography variant="caption" display="block" color="gray">Hace 2 horas</Typography>
							</Box>
						
						</Box>
				</Grid>
				
			</Grid>
		</YoutubeLayout>
	)
}
