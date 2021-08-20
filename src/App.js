
import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import "./App.css";
import Weather from './components/Weather';
import Movie from './components/Movie';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      findCity: '',
      lat: "",
      lon: "",
      cityInfo: {},
      weatherInfo: [],
      MovieInfo:[],
      show: false,

    }
  }



  searchCity = async (event) => {
    event.preventDefault();

    // console.log(event.target.city.value)

    await this.setState({

      findCity: event.target.city.value

    })

    // console.log(this.state.findCity)


    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.findCity}&format=json`

    try {
      let selectedCity = await axios.get(locUrl)
      this.setState({
        cityInfo: selectedCity.data[0],
        lat: selectedCity.data[0].lat,
        lon: selectedCity.data[0].lon,
        show: true

      })

    } catch (error) {
      console.log(error.response)


    }
    this.getWeather();
    this.getMovie();
  }

//___________________________________________________________________________________________________________________

  getWeather = async () => {
    

    // console.log(event.target.city.value)

    


    let LocUrl2 =`${process.env.REACT_APP_SERVER_LINK}/forecast?searchQuery=${this.state.findCity}`
    try {
      let selectedWeather = await axios.get(LocUrl2)
      
      await this.setState({

        weatherInfo: selectedWeather.data
      })
      console.log("eeeeeeeeeeee",this.state.weatherInfo)
      
    } catch (error) {
      console.log(error.response)



    }

  }
//____________________________________________________________________________________________________________________



  getMovie = async () => {
    

    // console.log(event.target.city.value)
     /* {console.log("ddddddd",this.state.weatherInfo)}; */  


    let LocUrl3 =`${process.env.REACT_APP_SERVER_LINK}/movie?searchQuery=${this.state.findCity}`
    try {
      let selectedMovie = await axios.get(LocUrl3)
      
      await this.setState({

        MovieInfo: selectedMovie.data
      })
      // console.log(selectedWether)

    } catch (error) {
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
        {/* {console.log("ddddddd",this.state.weatherInfo)}; */}

        <Movie
        show = {this.state.show}
        data = {this.state.MovieInfo}/>

    </div >
   )
 };
}



export default App;