import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Gap, Header, ListCard} from '../../components/';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Home = ({navigation}) => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axios
          .get(`https://reqres.in/api/users?page=${page}`)
          .then((res) => {
            setData([...data, ...res.data.data]);
            setPage(page + 1);
          });
    }

    const loadMore = () => {
      return(
      <View style={styles.loadMore}>
        <TouchableOpacity onPress={getData}>
          <AntDesign name="reload1" size={30} color="black" />
        </TouchableOpacity>
      </View>
      )
    }
    
    return (
      <View style={styles.page}>
        <Header />
        <FlatList
          data={data}
          keyExtractor={(item) => 'key-' + item.id}
          renderItem={({item}) => (
            <ListCard
              firstName={item.first_name}
              lastName={item.last_name}
              avatar={item.avatar}
              email={item.email}
              onPress={() => navigation.navigate('Details', {item})}
            />
          )}
          ListFooterComponent={loadMore}
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 20}}
        />
      </View>
    );
}

export default Home

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  loadMore: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50
  }
});
