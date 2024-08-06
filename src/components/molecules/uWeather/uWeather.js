import { View, Text, UIManager } from 'react-native'
import React, { useEffect } from 'react'
import { UImage } from '../../atoms/uImage/uImage'
import { Images } from '../../../assets/images/images'
import UWeatherF from '../../../functions/uWeatherF'

const UWeather = () => {

    const {uImageF,uDegreeF} = UWeatherF()
    useEffect(()=>{
        uImageF()
        console.log("gelen",uImageF());
    },[])
  return (
    <View>
      <UImage source={uImageF()}/>
      
    </View>
  )
}

export default UWeather
