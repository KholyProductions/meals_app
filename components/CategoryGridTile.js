import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}){
    return <View style={[styles.gridItem, {backgroundColor: color}]}>
        <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({

    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },

    button:{
        flex: 1,
    },

    buttonPressed:{
        opacity: 0.3,
    },

    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 16,
        fontWeight: '700',
    }

});