import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { useProducts } from "../context/ProductContext";

const { width } = Dimensions.get("window");

const ProductCard = ({ product }) => {
  const { removeProduct } = useProducts();

  return (
    <View
      className="bg-white p-4 rounded-lg shadow-sm mb-4"
      style={{ width: width > 600 ? 600 : width - 32 }}
    >
      <Image
        source={{ uri: product.photo }}
        className="w-full h-40 rounded-lg mb-2"
        resizeMode="cover"
      />

      <View className="flex-row justify-between items-center">
        <View className="flex-1 mr-4">
          <Text className="text-lg font-semibold" numberOfLines={1}>
            {product.name}
          </Text>
          <Text className="text-gray-600">₦{product.price.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          className="bg-red-500 px-3 py-1 rounded-lg"
          onPress={() => removeProduct(product.id)}
        >
          <Text className="text-white">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
