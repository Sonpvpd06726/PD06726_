import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const class1 = [
    {
      mssv: 'PS0000',
      name: 'Nguyen Van A',
      avgPoint: 8.9,
      avgTrainingPoint: 7,
      status: 'pass',
    },
    {
      mssv: 'PS0001',
      name: 'Nguyen Van B',
      avgPoint: 4.9,
      avgTrainingPoint: 10,
      status: 'pass',
    },
  ];

  const class2 = [
    {
      mssv: 'PS0002',
      name: 'Nguyen Van C',
      avgPoint: 4.9,
      avgTrainingPoint: 10,
      status: 'failed',
    },
    {
      mssv: 'PS0003',
      name: 'Nguyen Van D',
      avgPoint: 10,
      avgTrainingPoint: 10,
      status: 'pass',
    },
    {
      mssv: 'PS0004',
      name: 'Nguyen Van E',
      avgPoint: 10,
      avgTrainingPoint: 2,
      status: 'pass',
    },
  ];

  const [allStudents, setAllStudents] = useState([]);
  const [passStudents, setPassStudents] = useState([]);
  const [sortedByAvgPoint, setSortedByAvgPoint] = useState([]);
  const [sortedByAvgTrainingPoint, setSortedByAvgTrainingPoint] = useState([]);
  const [ongVang, setOngVang] = useState(null);

  useEffect(() => {
    // Gộp danh sách sinh viên từ các lớp
    const mergedStudents = [...class1, ...class2];
    setAllStudents(mergedStudents);

    // Lọc ra sinh viên pass và không có trạng thái failed
    const passStudentsList = mergedStudents.filter(
      (student) =>
        student.status === 'pass' &&
        student.avgPoint !== undefined &&
        student.avgTrainingPoint !== undefined
    );
    setPassStudents(passStudentsList);

    // Sắp xếp danh sách sinh viên theo điểm số giảm dần
    const sortedByAvgPointList = [...passStudentsList].sort(
      (a, b) => b.avgPoint - a.avgPoint
    );
    setSortedByAvgPoint(sortedByAvgPointList);

    // Sắp xếp danh sách sinh viên theo điểm rèn luyện giảm dần
    const sortedByAvgTrainingPointList = [...passStudentsList].sort(
      (a, b) => b.avgTrainingPoint - a.avgTrainingPoint
    );
    setSortedByAvgTrainingPoint(sortedByAvgTrainingPointList);

    // Lấy thông tin của Ong vàng (sinh viên có điểm số cao nhất)
    const ongVangStudent = sortedByAvgPointList[0];
    setOngVang(ongVangStudent);
  }, [class1, class2]);

  return (
    <View>
      

      <Text>Danh sách sinh viên theo điểm số từ cao xún thấp:</Text>
      {sortedByAvgPoint.map((student, index) => (
        <Text key={index}>{`${student.name}: ${student.avgPoint} điểm`}</Text>
      ))}

      <Text>Danh sách sinh viên theo điểm rèn luyện từ cao xún thấp:</Text>
      {sortedByAvgTrainingPoint.map((student, index) => (
        <Text key={index}>{`${student.name}: ${student.avgTrainingPoint} điểm`}</Text>
      ))}
      <Text>Thông tin Sinh Viên Đạt giải Ong vàng:</Text>
      {ongVang && (
        <Text>{`${ongVang.name}: ${ongVang.avgPoint} điểm`}</Text>
      )}
    </View>
  );
};

export default App;
