import React, { Component } from "react";
import { connect } from "react-redux";
import Article from "../components/Article";
import { fetchArticleDetails } from "../actions";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchArticleDetails({query: "{ Users { age name gender } }"});
  }
  render() {
    // SOOOO I got stuck here because I don't know how to pass the fetched result. 
    // I guess I'd use the redux store for this? the react force is not strong on me.
    let { age, name, gender } = this.props.data
    const { users } = this.props.data;
    // TODO fugly syntax
    if(users){
      for (const user of users){
        let { age, name, gender } = user
      }
    }
    
    return (
        <main>
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
              <Article
                age={age}
                gender={gender}
                name={name}
              />
            )}
        </main>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});

export default connect(mapStateToProps, { fetchArticleDetails })(App);
