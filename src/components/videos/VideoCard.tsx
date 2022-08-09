import { CardMedia, CardContent, Typography, Grid } from '@mui/material';

export const VideoCard = () => {
   return (

      <Grid item xs={ 12 } sm={ 6 } md={ 4 } sx={{ margin: 0}}>
         <CardContent sx={{ padding: { xs: 0, sm: 1 }, cursor: 'pointer' }}>
               <CardMedia
                  component="img"
                  height="200"
                  image="https://i0.wp.com/powerbuildingoficial.com/wp-content/uploads/2019/07/joan01.jpg?fit=768%2C432&ssl=1"
                  alt="green iguana"
               />
               <CardContent>

                  <Grid container>
                     <Grid item sm={ 2 }>
                        <img 
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwmqGyiWcj2QV7q25KJM_rJesGNYqJnbqarJQmcIDTA&s=36"
                           style={{ height: 40, width: 40, marginRight: 2, borderRadius: 100 }}
                        />
                     </Grid>
                     <Grid item sm={ 10 } sx={{ paddingLeft: { xs: 1, md: 0 }}}>
                        <Typography fontWeight={ 700 } sx={{ fontSize:{ xs: 13, sm: 15 } }}>EMPIEZAN los PROBLEMAS | CARGA DÍA 2</Typography>

                        <Typography variant="subtitle2" color="text.secondary" fontWeight={ 400 }>Joan Pradells</Typography>
                        <Typography variant="caption"   color="text.secondary">37.723 visualizaciones . hace 7 horas</Typography>
                     </Grid>
                  </Grid>      

                     
               </CardContent>
         </CardContent>
      </Grid>
   );
};
