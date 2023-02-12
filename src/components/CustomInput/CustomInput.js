import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, placeholder, rules = {}, secureTextEntry }) => {
    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, { borderColor: error ? "red" : "#e8e8e8" }]}>
                        <TextInput value={value} placeholder={placeholder} onChangeText={onChange} onBlur={onBlur} />
                    </View>
                    {error && <Text style={{ color: "red", alignSelf: "stretch" }}>{error.message || "Error"}</Text>}
                </>
            )}
            style={styles.input}
            secureTextEntry={secureTextEntry}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput;
