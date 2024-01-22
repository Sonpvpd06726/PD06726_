import React from "react";
import { Alert, Button } from "react-native";
const Button1 = () => {
return(
    <Button
    title="Enter"
onPress={() => Alert.alert('Simple Button ok')}
/>
    );

};
export default React.memo(Button1);
