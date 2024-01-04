import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export interface Props {
  onPress?: () => void;
  title: string;
  size: "sm" | "medium" | "lagre";
  background_color?: string;
}

export const AppButton: FC<Props> = ({
  onPress,
  title,
  size,
  background_color,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6,
      },
      background_color ? { backgroundColor: background_color } : null,
    ]}>
    <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
