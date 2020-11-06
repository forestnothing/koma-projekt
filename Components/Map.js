import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button} from 'react-native';
import ZoomableImage from 'react-native-interactive-image'


const Map = () => {

    return (
        <View>

<ZoomableImage
					source={ require('/Users/rikard/KoMa/assets/arbt.jpg') }
					imageHeight={ 600 }
					imageWidth={ 450 }
                    annotations={ annotations }
					popOverStyles={ { backgroundColor: 'white' } }
/>


            
        </View>
    )
}

const annotations = [
	{
		x1: 25,
		x2: 35,
		y1: 20,
		y2: 30,
		description: 'A pair of black running sports shoes, has lace-up detail. Textile and mesh upper',
	},
	{
		x1: 60,
		x2: 70,
		y1: 15,
		y2: 25,
		description: 'Shoe sole tip!',
	},
	{
		x1: 20,
		x2: 30,
		y1: 50,
		y2: 60,
		description: 'Textured and patterned outsole',
	},
	{
		x1: 65,
		x2: 75,
		y1: 65,
		y2: 75,
		description: 'Textured outsole with a stacked heel',
	},
]

export default Map