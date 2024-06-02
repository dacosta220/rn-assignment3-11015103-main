import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, FlatList } from 'react-native';

// Sample data
const categories = [
  { id: 1, title: 'Exercise', subtitle: '12 Tasks', image: require('./images/exercise.png') },
  { id: 2, title: 'Study', subtitle: '12 Tasks', image: require('./images/study.png') },
  { id: 3, title: 'Cook', subtitle: '12 Tasks', image: require('./images/cook.png') },
  { id: 4, title: 'Code', subtitle: '12 Tasks', image: require('./images/code.png') },
  { id: 5, title: 'Travel', subtitle: '12 Tasks', image: require('./images/travel.png') },
  { id: 6, title: 'Read', subtitle: '12 Tasks', image: require('./images/read.png') },
  { id: 7, title: 'Plan', subtitle: '12 Tasks', image: require('./images/plan.png') },
  { id: 8, title: 'Teach', subtitle: '12 Tasks', image: require('./images/teach.png') },
];

const ongoingTask = [
  { id: 1, title: 'Mobile App Development' },
  { id: 2, title: 'Web Development' },
  { id: 3, title: 'Push Ups' },
  { id: 4, title: 'Cook Dinner' },
  { id: 5, title: 'Plan Vacation' },
  { id: 6, title: 'Study Biology' },
  { id: 7, title: 'Write Code Documentation' },
  { id: 8, title: 'Read Book' },
  { id: 9, title: 'Teach React Native' },
  { id: 10, title: 'Exercise Yoga' },
  { id: 11, title: 'Travel to Paris' },
  { id: 12, title: 'Study Math' },
  { id: 13, title: 'Plan Weekly Schedule' },
  { id: 14, title: 'Cook Breakfast' },
  { id: 15, title: 'Teach English' },
];

const CustomCategory = ({ title, subtitle, image }) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.categoryTitle}>{title}</Text>
    <Image source={image} style={styles.categoryImage} />
    <Text style={styles.categorySubtitle}>{subtitle}</Text>
  </View>
);

const CustomTaskItem = ({ title }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskTitle}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello, Devs</Text>
        <Text style={styles.subtitle}>14 tasks today</Text>
        <Image source={require('./images/person.png')} style={styles.profileImage} />
      </View>
      
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image source={require('./images/Search.png')} style={styles.searchIcon} />
        <Image source={require('./images/Filter.png')} style={styles.filterIcon} />
      </View>
      
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.categoriesContainer}>
        {categories.map(category => (
          <CustomCategory 
            key={category.id} 
            title={category.title} 
            subtitle={category.subtitle} 
            image={category.image} 
          />
        ))}
      </ScrollView>
      
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={ongoingTask}
        renderItem={({ item }) => <CustomTaskItem title={item.title} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
    position:'relative',
    right: 140,
    marginTop: 50,
   

  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 'auto',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    width: 280,
    height: 49,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#fffff',
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    position:'absolute',
    left: 1,
    paddingHorizontal: 10,
    marginLeft: 30,
    fontSize: 15,
  
  },
  searchIcon: {
    flex:1,
    position:'absolute',
    left: 8,
    width: 20,
    height: 20,
  

  },
  filterIcon: {
    flex: 1,
    position:'absolute',
    right: -75,
    width: 50,
    height: 49,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  categoriesContainer: {
    marginTop: 10,
  },
  categoryContainer: {
    marginRight: 10,
    width: 130,
    height: 200,
    marginBottom: 200,
    marginEnd: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
    marginLeft: 5,
  },
  
  categoryImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  categorySubtitle: {
    flex: 1,
    fontSize: 13,
    position:'absolute',
    top: -20,
    right: 70,
    marginTop: 50,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  
  taskItem: {
    width: 354,
    height: 120,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffff',
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
  taskTitle: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
