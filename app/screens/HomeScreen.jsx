import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/ProductContext";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const { products } = useProducts();

  return (
    <View className="flex-1 bg-gray-100">
      <Header title="YIPONLINE Products" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
            width: width,
            maxWidth: 600,
            alignSelf: "center",
          }}
        >
          <View className="p-4">
            <ProductForm />

            <View className="mt-6">
              <Text className="text-xl font-semibold mb-4">
                Your Products ({products.length}/5)
              </Text>

              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {products.length === 0 && (
                <Text className="text-gray-500 text-center py-4">
                  No products added yet. Add your first product above!
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;
