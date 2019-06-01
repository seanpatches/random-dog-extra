import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectDog, selectDogPending } from '../selectors/dogSelector';
import { getDog } from '../actions/dogActions';
import Image from '../components/Image';

class DogImage extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount(){
    this.props.fetch();
  }

  render(){
    const { loading, img } = this.props;
    if(loading) return <h1>Hold up, loading...</h1>;
    return <Image img={img} />;
  }
}

const mapStateToProps = state => ({
  img: selectDog(state),
  loading: selectDogPending(state)
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
