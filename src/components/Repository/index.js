import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Repository(props) {
  const navigation = useNavigation();

  function filterTitle(title) {
    if(title.length <= 25) {
      return title;
    }  

    return `${title.substring(0, 26)}...`;
  }

  function filterDesc(desc) {
    if(desc.length <= 50) {
      return desc;
    }  

    return `${desc.substring(0, 50)}...`;
  }

 return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate("Detail", {
        repository: props.title,
      })}
    >
      <View style={styles.contentLogo}>
        <Image
          source={{uri: props.img}}
          style={styles.logo}
        />
      </View>
      <View style={styles.contentDesc}>
        <Text style={styles.title}>{filterTitle(props.title)}</Text>
        {props.description
        ? <Text style={styles.text}>{filterDesc(props.description)}</Text>
        : <></>
        }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    backgroundColor: '#FFF',
    marginVertical: '2%',
    borderRadius: 4,
    flexDirection: 'row',
  },
  contentLogo: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '90%',
    height: '90%'
  },
  contentDesc: {
    paddingVertical: '2%',
    paddingRight: '2%',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Anton_400Regular',
    color: '#b1b1b1'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#17181a',
    height: '100%',
    width: '70%',
  }
});