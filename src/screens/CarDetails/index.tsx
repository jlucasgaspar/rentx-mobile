import React, {useEffect, useState} from 'react';
import { StatusBar, StyleSheet } from 'react-native';
// import { useTheme } from 'styled-components'; 
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

// import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
// import { CarDTO } from '../../dtos/CarDTO';
// import { Car as CarModel} from '../../database/model/Car';
import SpeedSvg from '../../assets/speed.svg';

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Content,
  Accessories,
  Footer,
  OfflineInfo
} from './styles';

// interface Params {
//   car: CarModel;
// }

export function CarDetails(){
  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"      
      />

      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={[{ id: '1', photo: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png' }]} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Ferrari</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380 km/h" icon={SpeedSvg} />
          <Accessory name="speed" icon={SpeedSvg} />
          <Accessory name="speed" icon={SpeedSvg} />
          <Accessory name="speed" icon={SpeedSvg} />
          <Accessory name="speed" icon={SpeedSvg} />
          <Accessory name="speed" icon={SpeedSvg} />
        </Accessories>

        <About>
          Lorem ipsum qualquer
          Lorem ipsum qualquer
          Lorem ipsum qualquer
          Lorem ipsum qualquer
          Lorem ipsum qualquer
          Lorem ipsum qualquer
          Lorem ipsum qualquer
          Lorem ipsum qualquer
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden', 
    zIndex: 1,
  },
})