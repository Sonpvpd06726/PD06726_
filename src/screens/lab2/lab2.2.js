import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ProductList = () => {
  const productsArray = [
    { code: 'P001', name: 'Son môi', price: 10 },
    { code: 'P002', name: 'Phấn nền', price: 15 },
    { code: 'P003', name: 'Product C', price: null },
    { name: 'Product D', price: 20 },
    { code: 'P004', price: 25 },
    { code: 'P005', name: 'Tẩy Trang', price: 20 },
    null,
    undefined,
  ];

  const [productsObject, setProductsObject] = useState({});

  useEffect(() => {
    const convertArrayToObject = () => {
      const convertedObject = Object.fromEntries(
        productsArray
          .filter(product => product && product.code && product.name && product.price !== undefined && product.price !== null)
          .map(product => [product.code, product])
      );
      setProductsObject(convertedObject);
    };

    convertArrayToObject();
  }, [productsArray]);

  useEffect(() => {
    const removeInvalidData = () => {
      Object.keys(productsObject).forEach(key => {
        const product = productsObject[key];
        if (!product || !product.code || !product.name || product.price === undefined || product.price === null) {
          delete productsObject[key];
        }
      });
    };

    removeInvalidData();
  }, [productsObject]);

  return (
    <View>
      <Text>Danh sách sản phẩm sau khi chuyển đổi và loại bỏ sản phẩm không hợp lệ:</Text>
      {Object.keys(productsObject).map(key => (
        <Text key={key}>{`${key}: ${productsObject[key].name} - ${productsObject[key].price}`}</Text>
      ))}
    </View>
  );
};

export default ProductList;
