import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {

renderDescription() {
   const { library, selectionLibraryId } = this.props;

   if (library.id === selectionLibraryId) {
     return (
       <Text>{ library.description }</Text>
     );
   }
}

  render() {
    const { title, id } = this.props.library;
    return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
      <CardSection>
      <Text>{title}</Text>
      </CardSection>

      {this.renderDescription()}
      
      </View>
      </TouchableWithoutFeedback>
      );
  }
}

const mapStateToProps = state => {
  return { selectionLibraryId: state.selectionLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
