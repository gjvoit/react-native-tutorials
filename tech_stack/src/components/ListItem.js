import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}> {library.description} </Text>
        </CardSection>
      );
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}> {title} </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

/*
 * "selectedLibraryId:" is arbitrary.. could be data, could be selected, etc.
 * "selectedLibraryId:" is simply the local prop key where the state will be mapped to.
 * "state.selectedLibraryId" is set by '../reducers/index.js' where I defined a key
 * of selectedLibraryId
 * ownProps is exactly equal to this.props - can now remove logic from the component and
 * include here instead.
 */

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
  // ES6 syntax, expanded: expanded is condensed down to just "expanded"
};

export default connect(mapStateToProps, actions)(ListItem);
