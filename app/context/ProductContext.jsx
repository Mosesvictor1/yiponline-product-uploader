import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

// Create the context
const ProductContext = createContext();

// Custom hook to use the product context
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

// Product Provider component
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Monitor product count and show notification when limit is reached
  useEffect(() => {
    if (products.length === 5) {
      Alert.alert(
        "Product Limit Reached",
        "You have reached the maximum limit of 5 products. Please remove some products before adding new ones.",
        [{ text: "OK" }]
      );
    }
  }, [products.length]);

  // Add a new product
  const addProduct = (product) => {
    if (products.length >= 5) {
      Alert.alert(
        "Cannot Add Product",
        "You have reached the maximum limit of 5 products. Please remove some products before adding new ones.",
        [{ text: "OK" }]
      );
      return false;
    }
    setProducts([...products, { ...product, id: Date.now() }]);
    return true;
  };

  // Remove a product
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Check if product limit is reached
  const isProductLimitReached = () => {
    return products.length >= 5;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        isProductLimitReached,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
