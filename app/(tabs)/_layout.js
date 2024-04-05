import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { EvilIcons, FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    //screenOptions={{ headerShown: false }}
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#ff9a3c", headerShown: false }}
    >
      <Tabs.Screen
        // this is the file its looking for
        name="Explore"
        options={{
          tabBarLabel: "Explore",
          //typically title at top of screen
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={20} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="circle-user" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Inbox"
        options={{
          tabBarLabel: "Inbox",
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="message" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
