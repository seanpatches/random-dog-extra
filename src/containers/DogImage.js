import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectDog } from '../selectors/dogSelector';
import { getDog } from '../actions/dogActions';
import Image from '../components/Image';

class DogImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.fetch();
  }

  render(){
    return <Image img={this.props.image} />;
  }
}

const mapStateToProps = state => ({
  image: selectDog(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(){
    dispatch(getDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);
