import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import FlatButton from './FlatButton.js'

function EventButton(props) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={props.onPress}>
                <ImageBackground source={props.img} style={{ width: '100%', height: '100%', resizeMode: "cover", justifyContent: 'flex-end' }}>
                    <Text style={styles.overlay}>{props.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const Exhibitions = ({ navigation }) => {

    const events = [
        {
            "id": 0,
            "title": "Better Shelter",
            "img": require('../assets/event1.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 1,
            "title": "Med pennan genom glastaket",
            "img": require('../assets/event2.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 2,
            "title": "Hej Robot!",
            "img": require('../assets/event3.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 3,
            "title": "Better Shelter",
            "img": require('../assets/event1.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 4,
            "title": "Med pennan genom glastaket",
            "img": require('../assets/event2.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 5,
            "title": "Hej Robot!",
            "img": require('../assets/event3.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 6,
            "title": "Better Shelter",
            "img": require('../assets/event1.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 7,
            "title": "Med pennan genom glastaket",
            "img": require('../assets/event2.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
        {
            "id": 8,
            "title": "Nummer 8",
            "img": require('../assets/event3.jpg'),
            "startDate": 200101,
            "endDate": 201201
        },
    ]
    const listItems = events.map((d) => <EventButton onPress={() => navigation.navigate('ExhibitInfo', { exhibitID: d.id })} key={d.id} title={d.title} img={d.img} />);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {listItems}
            </ScrollView>
            {/*<FlatButton onPress={() => navigation.navigate('ExhibitInfo')} text='Utställning1' ></FlatButton>*/}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
    },

    scroll: {
        backgroundColor: '#252525',
        height: "100%",
    },

    item: {
        backgroundColor: '#ffffff',
        width: '90%',
        height: 150,
        margin: '4%',
    },

    overlay: {
        color: '#ffffff',
        fontSize: 30,
        backgroundColor: "#000000a0",
        textTransform: "uppercase",
        textAlign: 'center',
    },
})

export default Exhibitions