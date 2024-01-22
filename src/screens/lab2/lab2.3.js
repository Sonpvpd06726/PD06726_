import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 2000);
  });

  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error: some bug');
    }, 2000);
  });

  const getList = async () => {
    try {
      const response = await fetch('https://64d8a86c5f9bf5b879ce6dd9.mockapi.io/api/v1/moviesnow');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };

  // Yêu cầu thứ nhất: Dừng khi một promise thất bại
  useEffect(() => {
    Promise.all([firstPromise, secondPromise, getList()])
      .then((results) => {
        console.log('Thành công:', results);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  }, []);

  // Yêu cầu thứ hai: Chạy bất kỳ promise nào thành công hoặc thất bại
  useEffect(() => {
    Promise.allSettled([firstPromise, secondPromise, getList()])
      .then((results) => {
        console.log('Kết quả:', results);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      })
      .finally(() => {
        console.log('Hoàn thành tất cả promise.');
      });
  }, []);

  return (
    <View>
      <Text>done!</Text>
    </View>
  );
};

export default App;
