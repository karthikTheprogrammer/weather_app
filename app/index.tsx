import {View, Text, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React, {useState} from "react";
import { Theme } from "./theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"
import {MapPinIcon} from "@heroicons/react/16/solid";

export default function Index() {

    const [showSearch, toggleSearch] = useState(true);
    const [locations, setLocations] = useState([1,2,3]);

    const handleLocation = (loc) => {
        console.log(loc);
    }

    return (
        <View className="flex-1 relativ">
            <StatusBar barStyle='light-content' />
            <Image
                blurRadius={70}
                source={require("../assets/images/bg.png")}
                className="absolute h-full w-full"
            />
            <SafeAreaView className="flex flex-1">
                <View style={{height:"7%"}} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full" style={{backgroundColor: showSearch ? Theme.bgWhite(0.2) : "transparent" }}>
                        {
                            showSearch ? (
                                <TextInput
                                    placeholder="Search City"
                                    placeholderTextColor={"lightgray"}
                                    className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                                />
                            ) : null
                        }
                        <TouchableOpacity onPress={() => toggleSearch(!showSearch)} style={{backgroundColor:Theme.bgWhite((0.3))}} className="rounded-full p-3 m-1" >
                            <Text><MagnifyingGlassIcon size="25" color="white" /></Text>
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length>0 && showSearch ? (
                            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                {
                                    locations.map((loc, index) =>{
                                        let showBorder = index+1 != locations.length;
                                        let borderClass = showBorder ? "border-b-2 border-b-gray-400" : "" ;
                                        return (
                                          <TouchableOpacity
                                              onPress={() => handleLocation(loc)}
                                              key={index}
                                              className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}
                                          >
                                              <MapPinIcon color="gray" />
                                              <Text className="text-black text-lg ml-2">London, United Kingdom</Text>
                                          </TouchableOpacity>
                                        );
                                    })
                                }
                            </View>
                        ) : null
                    }
                </View>
                <View className="mx-4 flex justify-around flex-1 mb-2">
                    <Text className="text-white text-center text-2xl font-bold">
                        London,
                        <Text className="text-lg font-semibold text-gray-300">
                            United Kingdom
                        </Text>
                    </Text>
                    <View className="flex-row justify-center">
                        <Image
                            source={require("../assets/images/partlycloudy.png")}
                            className="w-52 h-52"
                        />
                    </View>
                    <View className="space-y-2">
                        <Text className="text-center font-bold text-white text-6xl ml-5">
                            23&#176;
                        </Text>
                        <Text className="text-center text-white text-xl tracking-widest">
                            Partly Cloudy
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}