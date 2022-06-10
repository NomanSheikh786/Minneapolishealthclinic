import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import {vh, vw} from '../../constaint/index';
import { Radio, Center, NativeBaseProvider, Flex } from "native-base";
import RedLongButton from '../../component/RedLongButton';

export default function PaymentMethod() {
  return (
      <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
    <View style={{}}>
    <Text style={{ textAlign: "center", fontSize: 30, color: "black", fontWeight: "bold", marginTop: vh * 0.02,width:vw*0.7 }}>Payment Method</Text>
</View>
<View style={{flex:1,marginTop : vh * 0.02,marginHorizontal: vw * 0.07}}>

    {/* first view */}
    <View>
    <Text>
    Choose a Payment Method
    </Text>
</View>

{/* second view  */}
<View style={{height:200,flex:0.9,marginTop: vh * 0.03}}>
    <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
      <Radio  value="1" my={5}>
      Credit/Debit Card
      </Radio>
      <Radio  value="2" my={5}>
          
      Paypal
      </Radio>
      <Radio  value="3" my={5}>
      Cash 
      </Radio>
    </Radio.Group>
    </View>


    {/* third view */}
<View style={{}}>
        <RedLongButton buttonText="Add new card"/>
    </View>


</View>
</SafeAreaView>
  )
}