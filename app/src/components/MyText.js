import { Text } from "react-native";

function MyText({ children, style = "a" }) {
  const styles = "text-white " + style;
  console.log(style);
  return <Text className={styles}>{children}</Text>;
}

export default MyText;
