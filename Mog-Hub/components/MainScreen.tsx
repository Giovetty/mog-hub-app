import {StatusBar} from 'expo-status-bar';
import { Text, TextInput, View, Image, SafeAreaView, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import {useState} from 'react';
import styles from './Styles'

function MainScreen() {

  const [petName, setPetName] = useState('');
  const [selectedValue, setSelectedValue] = useState('0');
  const [pet, setPet] = useState<string[]>([]);

  const renderPets = () => {
    const arrDisplay = [];

    for(let i=0; i < pet.length; i++){
      arrDisplay.push(
        <View key={1} style={styles.inputContainer}>
          <text style={styles.petTxt}>
            {pet[i]}
          </text>
        </View>
      )
    }
  }

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Image
            style={styles.mogHubLogo}
            source={require('../')}
          />
          <Text style={styles.mainTxt}>Mog Hub</Text>
          <Text style={styles.slogan}>Purrfect companions</Text>

          <View style={styles.inputFlex}>
            <Text style={styles.inputTxt}>Name your Pet:</Text>
            <TextInput
              style={styles.userInputTxt}
              placeholder="Mog"
              value={petName}
              onChangeText={(newText) => setPetName(newText)}
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 18}}>
              Select your Pet</Text>
            
            <View style={styles.radiocontainer}>
              <View style={styles.radioGroup}>

                {/*radio button for cat*/}
                <View style={styles.radioBtn}>
                  <RadioButton.IOS
                     value="1"
                     status={selectedValue == "1" ? 'checked' : 'unchecked'}
                     onPress={() => setSelectedValue('1')}
                     color='orange'
                  />
                  <Text style={styles.radioBtn}>Cat</Text>
                </View>

                {/*radio button for dog*/}
                <View style={styles.radioBtn}>
                  <RadioButton.IOS
                     value="2"
                     status={selectedValue == "2" ? 'checked' : 'unchecked'}
                     onPress={() => setSelectedValue('2')}
                     color='orange'
                  />
                  <Text style={styles.radioBtn}>Dog</Text>
                </View>

                {/*radio button for other*/}
                <View style={styles.radioBtn}>
                  <RadioButton.IOS
                     value="3"
                     status={selectedValue == "3" ? 'checked' : 'unchecked'}
                     onPress={() => setSelectedValue('3')}
                     color='orange'
                  />
                  <Text style={styles.radioBtn}>Other</Text>
                </View>


              </View>
            </View>
          </View>

          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default MainScreen