import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./Product.css";
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import { UserContext } from '../../App';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const Product = (props) => {
    //console.log(props)
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [buyProduct, setbuyProduct] = useContext(UserContext);
    const { value, value2 } = React.useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [buyProduct, setbuyProduct] = value2;
    const {productName, Price, imageURL, _id} = props.pd;
    const classes = useStyles();
    
    const handleBuyProduct = ()=>{
        setbuyProduct(props.pd);
    }

    return (

        <Card className={classes.root} id="product-box">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={productName}
            height="auto"
            image={imageURL}
            title={productName}
          />
          <CardContent >
            <Typography id="h5" gutterBottom variant="h5" component="h2">
              {productName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid item xs={12} sm={6}>
                <Typography id="money" variant="h4" color="textSecondary" component="p">
                    ${Price}
                </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
    
                    <Link  to={"/checkout/" + _id}>
                            <Button variant="contained" size="small" color="primary" onClick={()=>{handleBuyProduct()}}>
                                BUY NOW
                            </Button>
                    </Link>
         </Grid>
        </CardActions>
      </Card>

    );
};

export default Product;