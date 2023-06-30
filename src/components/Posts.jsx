import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Posts = () => {
    return (
    <Card sx={{ marginTop: '20px' }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            image="https://thumbs.dreamstime.com/b/scenic-nature-landscape-path-near-lake-forest-path-tunnel-trees-near-lake-scenic-nature-autumn-landscape-panorama-view-115358410.jpg"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }}/>} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
        </CardActions>
    </Card>
    )
}

export default Posts