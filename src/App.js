
import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import "./App.css";
import Weather from './components/Weather';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityInfo: {},
      lat: "",
      lon: "",
      weatherInfo: [],
      findCity: '',
      show: false,

    }
  }



  searchCity = async (event) => {
    event.preventDefault();
    console.log(event.target.city.value)
    await this.setState({
      findCity: event.target.city.value

    })

    console.log(this.state.findCity)
 

    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${event.target.city.value}&format=json`

    try{
    let selectedCity = await axios.get(locUrl)
    this.setState({
     cityInfo: selectedCity.data[0],
     lat: selectedCity.data[0].lat,
     lon: selectedCity.data[0].lon,
     show: true
  
   })

  }catch(error){
    console.log(error.response)


  }




    let LocUrl2 =`${process.env.REACT_APP_SERVER_LINK}/weather?searchQuery=${this.state.findCity}&lat=${this.state.lat}&lon=${this.state.lon}`
    try{
    let selectedWether = await axios.get(LocUrl2)
    await this.setState({
      weatherInfo:selectedWether.data
    })
    console.log(selectedWether)

  }catch(error){
      console.log(error.response)


    }






  }



  render() {
    return (
      <div>


        <h2> City Explorer</h2>


        <Form onSubmit={this.searchCity}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>CITY NAME</Form.Label>
            <Form.Control type="text" placeholder="insert the wanted city" name="city" />
          </Form.Group>



          <Button type='submit'>Find the City</Button>
        </Form>



        {this.state.show && <p>{this.state.findCity}<br></br>lat:{this.state.cityInfo.lat}<br></br>lon:{this.state.cityInfo.lon}</p>}


        {this.state.show &&
          <Image
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=14&size=400x400&markers=icon:large-red-cutout|${this.state.cityInfo.lat},${this.state.cityInfo.lon}|${this.state.cityInfo.lat},${this.state.cityInfo.lon}`} fluid />}


        <Weather
          show={this.state.show}
          data={this.state.weatherInfo} />





      </div >
    )
  }


}
export default App;