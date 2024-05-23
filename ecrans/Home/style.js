/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";


const dashboardStyles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:'white',
    },

    userImg: {
        width:50,
        heigth:50,
        borderRadius:50/2,
    },

    userName: {
        fontsize:16,

    },


});

export default dashboardStyles;