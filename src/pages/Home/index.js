import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Splash from '../Splash'; 
import Repository from '../../components/Repository';

import api from '../../services/api';

export default function Home() {
  const [ jobs, setJobs ] = useState(null);

  useEffect(() => {

    async function loadJobs() {
      const job = await api.get("search/repositories?q=vagas");
      const data = job.data.items;

      const filterData = data.filter(repository => 
        repository.id == 51001484 || 
        repository.id == 99366280 || 
        repository.id == 84590465 || 
        repository.id == 151413804 || 
        repository.id == 90783571);

      await setJobs(filterData);
    }

    loadJobs();
  }, []);

  if(!jobs) {
    return <Splash />
  }

  return (
    <ScrollView style={styles.container}>

      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: '10%' }}> 
        <Text style={styles.title}>REPOSITÓRIO DE VAGAS</Text>
      </View>
      
      <View style={styles.content}>
        { jobs.map(job => (
          <Repository 
            key={job.id} 
            img={job.owner.avatar_url} 
            title={job.full_name} 
            description={job.description}
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
  content: {
    width: '100%',
    alignItems: 'center',
  },

});