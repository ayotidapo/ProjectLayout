import React, { Component } from 'react';
import { connect } from 'react-redux';
import './auth.css';

class SearchOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 1,
    };
  }

  componentDidMount() {
    //this.props.fetchOrganisations();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.organisations !== prevState.organisations) {
      return {
        organisations: nextProps.organisations,
      };
    }
  }

  handleClick = () => {
    const { value } = this.state;
    if (value) {
      this.props.history.push('/get-started');
    } else {
      this.setState({
        err: 'Select a school',
      });
    }
  };

  onChange = value => {
    this.setState({
      value,
      err: '',
    });
  };

  render() {
    const { sample } = this.state;
    console.log(sample);
    return (
      <div>
        <h1>Organisation</h1>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth,
//   organisations: state.organisations.organisations,
//   searchTerm: state.organisations.searchTerm,
// });

export default connect(
  null,
  null,
)(SearchOrganization);
