import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useProducts } from "../context/ProductContext";

const { width } = Dimensions.get("window");

const ProductForm = () => {
  const { addProduct, isProductLimitReached } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);

  // Handle image picker
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Please grant permission to access your photos"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate inputs
    if (!name.trim()) {
      Alert.alert("Error", "Please enter a product name");
      return;
    }

    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      Alert.alert("Error", "Please enter a valid price");
      return;
    }

    if (!photo) {
      Alert.alert("Error", "Please select a product photo");
      return;
    }

    // Add product
    const success = addProduct({
      name: name.trim(),
      price: parseFloat(price),
      photo,
    });

    if (!success) {
      Alert.alert("Limit Reached", "You can only add up to 5 products");
      return;
    }

    // Reset form
    setName("");
    setPrice("");
    setPhoto(null);
  };

  return (
    <View
      className="p-4 bg-white rounded-lg shadow-sm"
      style={{ width: width > 600 ? 600 : width - 32 }}
    >
      <Text className="text-xl font-bold mb-4">Add New Product</Text>

      <View className="mb-4">
        <Text className="text-gray-700 font-medium mb-1">Product Name</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2"
          placeholder="Enter product name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View className="mb-4">
        <Text className="text-gray-700 font-medium mb-1">Price (₦)</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2"
          placeholder="Enter product price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
      </View>

      <View className="mb-4">
        <Text className="text-gray-700 font-medium mb-1">Product Photo</Text>
        <TouchableOpacity
          className="bg-blue-500 p-2 rounded-lg"
          onPress={pickImage}
        >
          <Text className="text-white text-center">
            {photo ? "Change Photo" : "Select Photo"}
          </Text>
        </TouchableOpacity>
      </View>

      {photo && (
        <View className="mb-4">
          <Text className="text-gray-700 font-medium mb-1">Preview</Text>
          <Image
            source={{ uri: photo }}
            className="w-full h-40 rounded-lg"
            resizeMode="cover"
          />
        </View>
      )}

      <TouchableOpacity
        className={`p-2 rounded-lg ${
          isProductLimitReached() ? "bg-gray-400" : "bg-green-500"
        }`}
        onPress={handleSubmit}
        disabled={isProductLimitReached()}
      >
        <Text className="text-white text-center">
          {isProductLimitReached() ? "Product Limit Reached" : "Add Product"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductForm;
