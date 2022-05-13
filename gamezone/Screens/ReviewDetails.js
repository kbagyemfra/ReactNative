import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation, route }) => {
  const { title, rating, body, key } = route.params;

  return (
    <>
      <View style={globalStyles.container}>
        <Text>{title}</Text>
        <Text>User Rating: {rating}</Text>
        <Text>Comments: {body}</Text>
      </View>
    </>
  );
};

export default ReviewDetails;
