import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card as CardMatUI, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  price: {
    margin: theme.spacing(0,2),
    marginBottom: theme.spacing(2)
  },
  cardContent: {
      paddingBottom: 0
  }
}));

export default function Card(props) {

    const classes = useStyles();

    return (
        <CardMatUI>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="card-image"
                    height="140"
                    image="https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph"
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" color="textPrimary">
                        Product name
                    </Typography>
                    <Typography variant="caption" color="textSecondary" display="block">
                        Category
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Typography variant="h4" color="secondary" className={classes.price}>
                220€
            </Typography>
        </CardMatUI>
    )
}
