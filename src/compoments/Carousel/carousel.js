import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import Promo from '../Promo/Promo';
class CarouselForm extends Component {
  render(){
    return(
     
      <div>
      <Container >
        <Carousel 
          activeItem={1} 
          length={4}
          showControls={false}
          showIndicators={false}
          className="z-depth-1" style={{zIndex:"0"}}>
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="../images/SiledShow/SiledShow.jpg" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                
              
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="../images/SiledShow/SiledShow1.jpg" alt="Second slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
               
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="../images/SiledShow/SiledShow2.jpg" alt="Third slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
              
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="../images/SiledShow/SiledShow3.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
         
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
      <Promo/>
      </div>
     
    );
  }
}

export default CarouselForm;