import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, usersSelector } from "./slices/usersSlice";
import tw from "tailwind-react-native-classnames";
import SortableGridView from "react-native-sortable-gridview";
import UserModal from "./components/Modal";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, hasErrors, users } = useSelector(usersSelector);
  const [isDetail, setIsDetail] = useState(false);
  const [name, setName] = useState("");

  const handleDetailConfirm = () => {
    setIsDetail(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log("users", users);

  return (
    <View>
      <View style={tw`bg-gray-300`}>
        <Text style={tw`text-red-500 text-center py-5 text-3xl font-bold `}>
          Users
        </Text>
      </View>
      <SortableGridView
        numPerRow={4}
        data={users}
        onDragStart={() => {
          console.log("Default onDragStart");
        }}
        onDragRelease={(data) => {
          console.log("Default onDragRelease", data);
        }}
        renderItem={(item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setName(item.name);
                setIsDetail(true);
              }}
              uniqueKey={item.name}
              style={tw`m-2`} // Important! Should add this props!!!
            >
              <Image
                style={styles.imgs}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rx4agUBdI0yUYpb2PzUOVqu5VZI7VxoWLyEgmpLHSkhIYfInVqfW_aD3Y8WpE3U1iLE&usqp=CAU",
                }}
              />
              <Text style={[styles.text, { color: item.color }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <UserModal
        image="https://www.clipartmax.com/png/middle/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png"
        name={name}
        visible={isDetail}
        onConfirm={handleDetailConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgs: {
    height: 60,
    width: 60,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
