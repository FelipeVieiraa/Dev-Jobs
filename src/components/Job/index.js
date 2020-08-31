import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

export default function Job(props) {
  const navigation = useNavigation();

  function filterTitle(title) {
    if(title.length <= 50) {
      return title;
    }  

    return `${title.substring(0, 50)}...`;
  }

  function filterDesc(desc) {
    if(desc.length <= 20) {
      return desc;
    }  

    return `${desc.substring(0, 25)}...`;
  }

 return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate("WebGit", {
        github: props.github,
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

        <View style={styles.labelsContainer}>
          <View style={{ flexDirection: 'row' }}>
            {props.labels
              ? props.labels.map(label => (
                <Text key={label.id} style={[ styles.label ,{ backgroundColor: `#${label.color}` }]}>{label.name}</Text>
              ))
              : <></>
            }
          </View>

          <View style={{ marginVertical: '2%' }}>
            <Text>Data: {format(new Date(props.updated), "dd/MM/yyyy 'às' HH:mm")}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 150,
    backgroundColor: '#FFF',
    marginVertical: '2%',
    borderRadius: 4,
    flexDirection: 'row',
  },
  contentLogo: {
    width: '32%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '92%',
    height: '92%'
  },
  contentDesc: {
    paddingVertical: '2%',
    paddingHorizontal: '2%',
    flexDirection: 'column',
    flex: 1,
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
  },
  labelsContainer: {
    flexDirection: 'column',
    overflow: "hidden",
    paddingVertical: '3%',
  },
  label: {
    marginHorizontal: '2%',
    padding: '1.2%',
    borderRadius: 10,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25
  }
});