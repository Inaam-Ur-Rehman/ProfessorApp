import React from "react";
import {Image, View, StyleSheet} from "react-native";


const RegisterScreen = () =>{
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://scontent.flhe2-1.fna.fbcdn.net/v/t1.18169-9/1937045_1078297205545187_2434932309380769786_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEW_wc2zAnDI-8Fcev75az1X_ykwfmIpNxf_KTB-Yik3O05SyRD4BsUlXtL7FJK7hAbwuA6CWxm91DIef-PQxZ3&_nc_ohc=gjpqzRUrgYAAX95asuW&_nc_ht=scontent.flhe2-1.fna&oh=1ef763316d2701e116c4f40b221ca4a0&oe=60B70CC8'}}
                   style={styles.logo}
                   resizeMode={'contain'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '60%',
        height: '30%',
    }
})

export default RegisterScreen;
