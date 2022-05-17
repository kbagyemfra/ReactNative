import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import React, { useState } from "react";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import Form from "../components/Form";

const Home = ({ navigation }) => {
  // console.log(navigation);

  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    });
    setModalOpen(false);
  };

  const onRender = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ReviewDetails", item)}
    >
      <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
      </Card>
    </TouchableOpacity>
  );

  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  // };

  return (
    <>
      <View style={globalStyles.container}>
        {/* MODAL */}
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={{
                  ...globalStyles.modalToggle,
                  ...globalStyles.modalClose,
                }}
                onPress={() => setModalOpen(false)}
              />
              <Form addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons
          name="add"
          size={24}
          style={globalStyles.modalToggle}
          onPress={() => setModalOpen(true)}
        />
        <FlatList data={reviews} renderItem={onRender} />
        {/* <Button
          onPress={pressHandler}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </View>
    </>
  );
};

export default Home;
