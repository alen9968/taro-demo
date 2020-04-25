import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux';

class Index extends Component {

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

  goToTest2 () {
    Taro.navigateTo({
      url: '/pages/test2/test2'
    })
  }


  toTest1 () {
    Taro.navigateTo({
      url: '/pages/test1/test1'
    })
  }

  toTest2 () {
    Taro.navigateTo({
      url: '/pages/test2/test2'
    })
  }

  render () {
    const { handleIncrement } = this.props;
    const { handleDecrement } = this.props;

    return (
      <View className='index'>
        <Text>num:{this.props.count}</Text>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={this.toTest1}>Page test1</Button>
        <Button onClick={this.toTest2}>Page test2</Button>
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

export default connect(mapState, mapDispatch)(Index);



