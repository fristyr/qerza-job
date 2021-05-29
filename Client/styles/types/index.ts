import { TextStyle, ViewStyle, ImageStyle } from "react-native";

type GenericStyleTypes = {
  p: ViewStyle | TextStyle | ImageStyle | any;
  pt: ViewStyle | TextStyle | ImageStyle | any;
  pr: ViewStyle | TextStyle | ImageStyle | any;
  pb: ViewStyle | TextStyle | ImageStyle | any;
  pl: ViewStyle | TextStyle | ImageStyle | any;
  m: ViewStyle | TextStyle | ImageStyle | any;
  mt: ViewStyle | TextStyle | ImageStyle | any;
  mr: ViewStyle | TextStyle | ImageStyle | any;
  mb: ViewStyle | TextStyle | ImageStyle | any;
  ml: ViewStyle | TextStyle | ImageStyle | any;
  bgColor: ViewStyle | TextStyle | ImageStyle | any;
  textColor: ViewStyle | TextStyle | ImageStyle | any;
  flexRow: Object;
  flexRowColumn: Object;
};

export default GenericStyleTypes;
