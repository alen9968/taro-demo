import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './about.scss'

class About extends Component {

  config = {
    navigationBarTitleText: 'About'
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount () {
  }

  componentDidMount () {}

  componentWillUnmount () { }

  componentWillReceiveProps (nextProps) {
    console.log(this.props)
    console.log(nextProps)
  }

  componentDidShow () { }

  componentDidHide () { }

  handleRoute() {
    Taro.navigateTo({url: '/pages/index/index'});
  }

  render () {
    const { handleIncrement } = this.props;
    const { handleDecrement } = this.props;

    return (
      <View className='index'>
        <Text>num:{this.props.count}</Text>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={this.handleRoute}>回到首页</Button>
      </View>
    )
  }
}

const mapState = (state) => {
  return {
    count: state.counter
  }
};

const mapDispatch = ({counter: {handleIncrement, handleDecrement}}) => {
  return {
    handleIncrement: () => handleIncrement(),
    handleDecrement: () => handleDecrement()
  }
}

export default connect(mapState, mapDispatch)(About);

