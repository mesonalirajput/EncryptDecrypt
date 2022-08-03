import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from './Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import Clipboard from '@react-native-clipboard/clipboard';
const InitialScreen = () => {
  const [message, setMessage] = useState('');
  const [num, setNum] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const _clear = () => {
    setMessage('');
    setNum('');
    setEncryptedMessage('');
  };

  let Alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let SAlphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const _encrypt = (msg, num) => {
    let nword = [];
    let newmsg = [];
    let nmsg = msg.split(' ');
    console.log('nmsg: ', nmsg);
    for (let i = 0; i < nmsg.length; i++) {
      for (let j = 0; j < nmsg[i].length; j++) {
        let char = nmsg[i].charAt(j);
        if (Alphabets.includes(char)) {
          let idx = Alphabets.indexOf(char);
          let n = idx + parseInt(num);
          if (n > 25) {
            n = n - 25;
          }
          let nchar = Alphabets[n];
          nword.push(nchar);
        } else if (SAlphabets.includes(char)) {
          let idx = SAlphabets.indexOf(char);
          let n = idx + parseInt(num);
          if (n > 25) {
            n = n - 25;
          }
          let nchar = SAlphabets[n];
          nword.push(nchar);
        } else if (char == ',') {
          let nchar = '^';
          nword.push(nchar);
        } else if (char == '.') {
          let nchar = '*';
          nword.push(nchar);
        }
      }
      let sword = nword.join('');
      newmsg.push(sword);
      nword = [];
      //   console.log(sword);
    }
    // console.log(newmsg);
    let finalmsg = newmsg.join(' ');
    // console.log(finalmsg);
    setEncryptedMessage(finalmsg);
  };

  const copyToClipboard = () => {
    Clipboard.setString(encryptedMessage);
  };
  return (
    <View style={styles.container}>
      <Header
        title="Encrypt"
        menu={() => <Feather name={'menu'} color={'#ffffff'} size={27} />}
      />
      <ScrollView style={styles.scrollview}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <View
            style={{
              width: '93%',
              alignItems: 'flex-start',
              marginBottom: 10,
            }}>
            <Text style={{color: '#008fb3', fontSize: 18, fontWeight: '600'}}>
              Enter your message :
            </Text>
          </View>
          <View style={styles.textInput__conatiner}>
            <TextInput
              onChangeText={setMessage}
              value={message}
              placeholder="Message to encrypt . . . "
              style={styles.textInput}
              multiline
              placeholderTextColor={'#ccc'}
              // numberOfLines={2}
            />
          </View>
          <View
            style={{
              width: '93%',
              alignItems: 'flex-start',
              marginBottom: 10,
              marginTop: 10,
            }}>
            <Text style={{color: '#008fb3', fontSize: 18, fontWeight: '600'}}>
              Enter a number :
            </Text>
          </View>
          <View style={styles.textInput__conatiner}>
            <TextInput
              onChangeText={setNum}
              value={num}
              placeholder="Between 0 and 25"
              style={styles.textInput}
              keyboardType="number-pad"
              placeholderTextColor={'#ccc'}
              // numberOfLines={2}
            />
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => _clear()}>
              <View style={styles.clearButton}>
                <Text
                  style={{color: '#008fb3', fontSize: 18, fontWeight: '600'}}>
                  Clear
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _encrypt(message, num)}>
              <View style={styles.encryptButton}>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
                  Encrypt
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {encryptedMessage ? (
          <View style={styles.result__container}>
            <View
              style={{
                width: '93%',
                alignItems: 'flex-start',
                marginBottom: 10,
                //   marginTop: 10,
              }}>
              <Text style={{color: '#008fb3', fontSize: 18, fontWeight: '600'}}>
                Encrypted message:
              </Text>
            </View>
            <View style={styles.result}>
              <Text style={{color: '#000', fontSize: 16}}>
                {encryptedMessage}
              </Text>
            </View>
            <View style={{width: '93%', alignItems: 'flex-end', marginTop: 10}}>
              <TouchableOpacity onPress={copyToClipboard}>
                <View style={styles.copyBtn}>
                  <Text
                    style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
                    Copy
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6faff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 150,
  },
  textInput__conatiner: {
    width: '93%',
    // height: 50,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#66e0ff',
  },
  textInput: {
    color: '#000',
    fontSize: 16,
  },
  button_container: {
    flexDirection: 'row',
    marginTop: 15,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  clearButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
    borderWidth: 1,
    borderColor: '#008fb3',
    borderRadius: 5,
  },
  encryptButton: {
    backgroundColor: '#008fb3',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
    borderRadius: 5,
  },
  copyBtn: {
    backgroundColor: '#008fb3',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 5,
  },
  result__container: {alignItems: 'center', marginTop: 20},
  result: {
    width: '93%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#66e0ff',
    padding: 10,
  },
});

export default InitialScreen;
