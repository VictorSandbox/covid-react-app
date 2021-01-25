import React from "react";
import { Cards, Chart, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { getData } from "./api";

// https://www.youtube.com/watch?v=khJlrj3Y6Ls&ab_channel=JavaScriptMastery

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await getData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
