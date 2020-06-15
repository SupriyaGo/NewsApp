import React, {Component} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import {
  Container,
  Content,
  List,
  Text,
  ListItem,
  Left,
  Thumbnail,
  Body,
  View,
} from 'native-base';

import {getArticles} from '../Services/Services';

export default class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  componentDidMount() {
    getArticles(this.props.country).then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={{marginTop: 10}} children="Please Wait.." />
        </View>
      );
    }

    return (
      <Container>
        <Content>
          {this.state.data.length > 0 ? (
            <List
              dataArray={this.state.data}
              renderRow={(item, i) => {
                return (
                  <ListItem thumbnail key={i}>
                    <Left>
                      <Thumbnail square source={{uri: item.urlToImage}} />
                    </Left>
                    <Body>
                      <Text numberOfLines={2}>{item.title}</Text>
                      <Text note numberOfLines={2}>
                        {item.description}
                      </Text>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginTop: 8,
                          marginLeft: 0,
                        }}>
                        <Text note>{item.source.name}</Text>
                      </View>
                    </Body>
                  </ListItem>
                );
              }}
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
        </Content>
      </Container>
    );
  }
}
