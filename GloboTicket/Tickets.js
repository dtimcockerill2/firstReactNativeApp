import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = ({navigation}) => {

  const ticketItem = ({item}) => {

    return (
      <View style={styles.tickets}>
        <View>
          <Image
            source={item.image}
          />
        </View>
        <View>
          <Text style={styles.tickettitle}>
            {item.event}
          </Text>
          <Text
          style={styles.ticketshortdescription}>
            {item.shortDescription}
          </Text>
          <Text style={styles.ticketdescription}
                numberOfLines={2}
                ellipsizeMode='tail'>
            {item.description}
          </Text>
          <Text
          style={styles.ticketshortdescription}>
            Price: {item.price}
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Purchase', {tickId: item.eventId})
            }}
            stles={styles.button}
          >
          <Text style={styles.ticketbutton}>
            GET TICKETS
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };
  return(
    <View style={styles.container}>
      <FlatList
        data={globoTickets}
        renderItem={ticketItem}
        keyExtractor={(item => item.eventId)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15
  },
  tickets: {
    flexDirection: 'column'
  },
  img: {
    height: 180,
    width: '100%'
  },
  tickettitle: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  ticketshortdescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5
  },
  ticketdescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    paddingTop: 15
  },
  ticketbutton: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 5
  }
});

export default Tickets;
