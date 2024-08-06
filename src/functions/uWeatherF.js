import axios from "axios";
import { useState } from "react";
import { Images } from "../assets/images/images";

const UWeatherF =  () => {
  const [iconn, setIconn] =useState("")
  const [degree, setDegree] = useState("")
  let url = "https://api.openweathermap.org/data/2.5/weather?q=İzmir,tr&appid=7cd29d77c3df76dde754c78758365e82"
      axios.get(url).then((response)=>{
        setIconn(response.data.weather[0].icon)
        setDegree(parseInt(response.data.main.feels_like-273.15))
        console.log(response.data.weather[0].icon);
       // console.log(parseInt(response.data.main.feels_like-273.15));
      
    })
  const uImageF = () => {

    switch (iconn){
      case "01d":
        return Images.d01
        break
        case "01n":
        return Images.n01
        break
        case "02d":
        return Images.d02
        break
        case "03d":
        return Images.d03
        break
        case "03n":
        return Images.n03
        break
        case "04d":
        return Images.d04
        break
        case "09d":
        return Images.d09
        break
        case "11d":
        return Images.d11
        break
    }
  }

  const uDegreeF =()=>{
    return (degree)
  }
  

  return {uImageF,uDegreeF};
};

export default UWeatherF;
