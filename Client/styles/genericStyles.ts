import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import GenericStyleTypes from "./types";

const genericStyles = StyleSheet.create<GenericStyleTypes>({
  p: (padding: Number) => ({
    padding: padding,
  }),
  pt: (padding: Number) => ({
    paddingTop: padding,
  }),
  pr: (padding: Number) => ({
    paddingRight: padding,
  }),
  pb: (padding: Number) => ({
    paddingBottom: padding,
  }),
  pl: (padding: Number) => ({
    paddingLeft: padding,
  }),
  m: (margin: Number) => ({
    margin: margin,
  }),
  mt: (margin: Number) => ({
    marginTop: margin,
  }),
  mr: (margin: Number) => ({
    marginRight: margin,
  }),
  mb: (margin: Number) => ({
    marginBottom: margin,
  }),
  ml: (margin: Number) => ({
    marginLeft: margin,
  }),
  bgColor: (color: String) => ({
    backgroundColor: color,
  }),

  textColor: (color: String) => ({
    color: color,
  }),
  flexRow: {
    flexDirection: "row",
  },
  flexRowColumn: {
    flexDirection: "column",
  },
});

export default genericStyles;
