import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Splash from '../Splash';
import Job from '../../components/Job';

import api from '../../services/api';

export default function Detail() {
  const { params } = useRoute();
  const [ repository, setRepository ] = useState(null);
  const [ jobs, setJobs ] = useState(null);

  useEffect(() => {
    async function loadRepository() {
      const repo = await api.get(`repos/${params.repository}`);
      const data = repo.data;

      await setRepository(data);
    }

    async function loadJobs() {
      const job = await api.get(`repos/${params.repository}/issues`);
      const data = job.data;

      await setJobs(data);
    }

    loadRepository();
    loadJobs();
  }, []);

  if(!jobs) {
    return <Splash />
  }

  if(!repository) {
    return <Splash />
  }

return (
    <ScrollView style={styles.container}>

      <View style={{ width: '100%', height: 350 , alignItems: 'center', justifyContent: 'center', padding: '5%', borderBottomColor: '#FFF', borderWidth: 1 }}> 
        <Image 
          source={{uri: repository.owner.avatar_url}}
          style={{ width: '40%', height: '40%', borderWidth: 1 }}
        />
        <Text style={styles.title}>{repository.full_name}</Text>
        <Text style={styles.description}>{repository.description}</Text>
      </View>
      
      <View style={styles.content}>
        <View>
          <Text style={[styles.title, { fontSize: 22, marginBottom: '5%' }]}>Disponíveis:</Text>
        </View>

        { jobs.map(job => (
          <Job 
            key={job.id} 
            img={job.user.avatar_url} 
            title={job.title} 
            description={job.user.login}
            labels={job.labels}
            github={job.html_url}
            updated={job.updated_at}
          />
        )) }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#416FD9',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Anton_400Regular',
    color: '#FFF',
    paddingTop: 20,
  },
  description: {
    fontSize: 19,
    color: '#FFF',
    paddingTop: 5,
    paddingHorizontal: '2%'
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },

});