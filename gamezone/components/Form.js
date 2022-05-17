import { View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "./Button";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number between 1 and 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const Form = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(fprops) => (
          <>
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review Title"
                onChangeText={fprops.handleChange("title")}
                value={fprops.values.title}
                onBlur={fprops.handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {fprops.touched.title && fprops.errors.title}
              </Text>

              <TextInput
                style={globalStyles.input}
                placeholder="Review Body"
                onChangeText={fprops.handleChange("body")}
                value={fprops.values.body}
                onBlur={fprops.handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {fprops.touched.body && fprops.errors.body}
              </Text>

              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={fprops.handleChange("rating")}
                value={fprops.values.rating}
                keyboardType="numeric"
                onBlur={fprops.handleBlur("rating")}
              />
              <Text style={globalStyles.errorText}>
                {fprops.touched.rating && fprops.errors.rating}
              </Text>

              <FlatButton text="submit" onPress={fprops.handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Form;
