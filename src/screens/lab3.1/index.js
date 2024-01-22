import React, { useState } from 'react';
import { styles } from './styles';
import { Text, TextInput, View } from 'react-native';

const colorText = color => ({color,
});

const Viewcomponent = () => {
    const [name, setName] = useState('');
return(
    <View style={styles.container}> 
    <TextInput
    value={name}
    onChangeText={setName}
    placeholder="Nhap ho ten"
    style={styles.tipStyle}>
        
    </TextInput>
    

    <Text style={styles.baseText}>
     Em Vao Doi Bang{'  '}
     <Text style={[styles.boldText, colorText('red')]}>vang do</Text> anh vao doi bang {' '}
     <Text style={[styles.boldText, colorText('yellow')]}>nuoc tra</Text>   
    </Text>
    
    </View>
);

};
export default Viewcomponent;
