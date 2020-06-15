import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
  },
  headingText: {
    fontSize: 15,
    color: '#333333',
  },
  countryInput: {
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
  },
  changeBtn: {},
  changeBtnText: {
    fontSize: 15,
    color: '#333333',
  },
  card: {
    flex: 1,
    height: '100%',
  },

  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: '100%',
  },
  cardImage: {
    height: 300,
    width: '100%',
  },
  sourceName: {
    fontSize: 12,
    padding: 10,
    color: '#979797',
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
    color: '#333333',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 13,
    color: '#979797',
  },
  moreBtn: {},
  moreBtnText: {
    fontSize: 13,
    color: '#979797',
    textAlign: 'center',
  },
});

export default styles;
