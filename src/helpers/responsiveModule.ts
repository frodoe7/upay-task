import {Platform, Dimensions, PixelRatio} from 'react-native';

let fixedWidth = 390;
let fixedHeight = 844;

var scale = Dimensions.get('window').width / fixedWidth;

function responsiveHeight(originalValue: number) {
  return (Dimensions.get('window').height * originalValue) / fixedHeight;
}

function responsiveWidth(originalValue: number) {
  return (Dimensions.get('window').width * originalValue) / fixedWidth;
}

function scaleFont(size: number) {
  const newSize = (size * scale) / 1.1;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

export default {responsiveHeight, responsiveWidth, scaleFont};
