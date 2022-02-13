import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.white}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.white}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: defaultStyles.colors.white,
        backgroundColor: defaultStyles.colors.black,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;
