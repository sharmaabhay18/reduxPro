import React, { Component } from 'react';
import { Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {


  componentWillUpdate() {
     LayoutAnimation.spring();
   }

renderDescription() {
   const { library, expanded } = this.props;
   if (expanded) {
     console.log(library);
   }
   // if (expanded) {
   //   return (
   //
   //     <CardSection>
   //     <Text style={{ flex: 1 }}>{ library.description }</Text>
   //     </CardSection>
   //
   //   );
   // }
}

  render() {
    const { titleStyle } = styles;
    const { title, id } = this.props.library;
   console.log(id);
    return (
        <TouchableOpacity onPress={() => this.props.selectLibrary.bind(this, id)} >
        <View>
      <CardSection>
      <Text style={titleStyle}>{title}</Text>

      </CardSection>
{this.renderDescription()}

      </View>
      </TouchableOpacity>
      );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectionLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
