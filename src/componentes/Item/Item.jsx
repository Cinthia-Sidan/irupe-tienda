import './Item.css'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


const Item = ({ id, nombre, precio, img }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt={nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/item/${id}`}><Button size="small" color="primary">
            Ver Detalle
          </Button></Link>
        </CardActions>
      </Card>

    </Grid>
  )
}


export default Item