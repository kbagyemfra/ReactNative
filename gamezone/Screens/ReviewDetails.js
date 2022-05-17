import { Image, Text, View } from "react-native";
import Card from "../components/Card";
import { globalStyles, images } from "../styles/global";

const ReviewDetails = ({ navigation, route }) => {
  const { title, rating, body, key } = route.params;

  return (
    <>
      <View style={globalStyles.container}>
        <Card>
          <Text>{title}</Text>
          <Text>Comments: {body}</Text>
          <View style={globalStyles.heartRating}>
            <Text>
              GameZone Rating: <Image source={images.ratings[rating]} />
            </Text>
          </View>
        </Card>
      </View>
    </>
  );
};

export default ReviewDetails;
