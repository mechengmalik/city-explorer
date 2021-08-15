
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      cityInfo: {},
      findCity :'',
      show : false
    } 
  }
  

  searchCity= async(event)=>{
    event.preventDefault();
console.log(event.target.city.value)
    this.setState({
      findCity: event.target.city.value
      
    })



    let locUrl=`https://eu1.locationiq.com/v1/search.php?key=pk.87bf99edc4a08e1d82b554684aab91db&q=amman&format=json`
    let selectedCity = await axios.get(locUrl)


    this.setState({
      cityInfo: selectedCity.data[0],
      show: true
    })



  }
  
  render(){
    return(
      <div>
        <h2> City Explorer</h2>
        <form onSubmit= {this.searchCity}>
          <input type="text" placeholder="insert the wanted city" name="city" />
          <button>Find the City</button>
        </form>

        {this.state.show && <p>lat:{this.state.cityInfo.lat}<br></br>lon:{this.state.cityInfo.lon}</p>}

      </div>
    )
  }

  
}
export default App;