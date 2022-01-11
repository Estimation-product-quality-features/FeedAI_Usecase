import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';
import './addEvaluation.css';

import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
// import Image from '@material-ui/core/Image';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Paper from '@material-ui/core/Paper';
import Index, { ObjectDetector } from "../../components/Index";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModelMenu from '../../components/ModelMenu';

// Image imports
import corn from './images/corn.jpeg';
import wheat from './images/wheat.jpeg'; 
import triticale from './images/triticale.jpeg'; 
import rays from './images/rays.jpeg'; 





const itemData = [
  {
    img: corn,
    title: 'Corn',
  },
    {
    img: wheat,
    title: 'Wheat',
  },
  {
    img: triticale,
    title: 'Triticale',
  },
  {
    img: rays,
    title: 'Rays',
  },
  
];

// https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa
// Read Input or (click on image and trigger action)
// Create URL object and setState
// Display Image automatically


class AddEvaluation extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      imgPred: "images/pred_init.svg"
    };
    var x = null
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClickCard = this.handleClickCard.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      imgPred: URL.createObjectURL(event.target.files[0])
    })
  }

  handleClickCard(img) {
    this.setState({
      imgPred: img
    })
  }

  render() {
    return (
        <div className= "Detection">
        <><Navbar />
        {/* Some spacing  */}
        <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br>
        {/* <Grid container spacing={12} direction="column">
          <Grid container spacing={6} direction="row">
            <Grid item xs='auto'>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
            <Grid item ml={4}>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
            <Grid item ml={4}>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
            <Grid item ml={4}>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          width="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
          </Grid>
          <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br>
          <Grid container spacing={4} direction="row" align-items='center'>
            <Grid item ml={4}>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
            <Grid item ml={4}>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
            <Grid item ml={4}>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
            <Grid item ml={4}>
            <Card sx={{ maxwidth: 128, maxheight: 128}}>
                        <CardMedia
                          component="img"
                          height="256"
                          image={this.state.imgPred}
                          alt='DisplayedImg'
                          title='Source Image'
                          />
                      </Card>
            </Grid>
          </Grid>
        </Grid> */}

        <Container>
          <Grid container spacing={6}>
            <Grid 
              container
              direction='row'
              spacing={2}
              lignItems="center"
              justifyContent="center"
              >
              <Grid item>
                <ImageList sx={{heigth:128, width:128}} cols={2} rowHeight={128}>
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={item.img}
                                alt={item.title}
                                title={item.title}
                                height='128'
                                onClick={() => this.handleClickCard(item.img)}
                                />
                            </CardActionArea>
                      </ImageListItem>
                    ))}
                  </ImageList>
              </Grid>
              <Grid item>
                <input type="file" onChange={this.handleInputChange}/>
                  <Card sx={{ maxwidth: 256, maxheight: 256}}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={this.state.imgPred}
                      alt='DisplayedImg'
                      title='Source Image'
                      />
                  </Card>
              </Grid>
           </Grid>
            

            <Grid 
              container
              direction='row'
              spacing={4}
              lignItems="center"
              justifyContent="center"
              >
              <Grid item>
                  <h1>Predicted Image</h1>
                  <Card>
                    <CardMedia
                      component="img"
                      height="256"
                      image={this.state.imgPred}
                      alt='PredImg'
                      tile='Predicted Boundingboxes'
                      />
                  </Card>
              </Grid>
              <Grid item>
                <Grid 
                  container
                  direction='column'
                  spacing={4}
                  lignItems="center"
                  justifyContent="center"
                  >
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                    <Grid item xs={1/2}>
                      <ModelMenu />
                    </Grid>
                    <Grid item xs={1/2}>
                      <Button variant="contained" color='inherit' size='large'>
                      Predict Image
                      </Button>
                    </Grid>


                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {/* Some spacing  */}
        <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br>

        <Footer />
        </>
        </div>
        );
    }
  }

 export default AddEvaluation;



