import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";

const _layout = () => {
  <Stack>
    <Stack.Screen options={{ headerShown: false }} />
  </Stack>;
};

export default _layout;
