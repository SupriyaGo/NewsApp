import React, {Component} from 'react';
import {
  Image,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Linking,
  TextInput,
  StatusBar,
} from 'react-native';
import {Header, DeckSwiper} from 'native-base';
import styles from './Style';
import {getArticles} from '../../Services/Services';

export default class NewsScreen extends Component {
  state = {
    newsData: '',
    isLoading: true,
    countryCode: 'in',
  };
  componentDidMount() {
    let countryCode = this.state.countryCode;
    this.getArticlesData(countryCode);
  }

  getArticlesData = countryCode => {
    getArticles(countryCode).then(
      data => {
        this.setState({
          isLoading: false,
          newsData: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  };
  onPressChangeBtn = () => {
    this.setState({isLoading: true});
    let countryCode = this.state.countryCode;
    this.getArticlesData(countryCode);
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={{marginTop: 10}} children="Please Wait.." />
        </View>
      );
    }
    return (
      <>
        <View style={styles.container}>
          <Header
            iosBarStyle="dark-content"
            noShadow={false}
            androidStatusBarColor="#fff"
            style={styles.header}>
            <Text style={styles.headingText}> Change country</Text>

            <TextInput
              style={styles.countryInput}
              placeholder="Enter country code"
              placeholderTextColor="#979797"
              on
              onChangeText={val => this.setState({countryCode: val})}
            />

            <TouchableOpacity
              style={styles.changeBtn}
              onPress={this.onPressChangeBtn}>
              <Text style={styles.changeBtnText}>Change</Text>
            </TouchableOpacity>
          </Header>

          {this.state.newsData.length > 0 ? (
            <DeckSwiper
              dataSource={this.state.newsData}
              renderItem={item => (
                <View style={styles.cardContainer}>
                  <Image
                    style={styles.cardImage}
                    resizeMode="cover"
                    source={{uri: item.urlToImage}}
                  />
                  <Text style={styles.sourceName}>{item.source.name}</Text>

                  <Text numberOfLines={2} style={styles.heading}>
                    {item.title}
                  </Text>
                  <Text style={styles.description}>{item.description}</Text>

                  <View style={styles.dateContainer}>
                    <Text style={styles.date}>{item.publishedAt}</Text>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(item.url)}
                      style={styles.moreBtn}>
                      <Text style={styles.moreBtnText}>Click for more</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Sorry, no data available...</Text>
            </View>
          )}
        </View>
      </>
    );
  }
}
