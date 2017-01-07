import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class Login extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading === true) {
      return (
        <Spinner size="large" />
      );
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            labelText="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            labelText="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}> {this.props.error} </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

/* auth is destructured off of state (i.e. state.auth) hence the need for the braces '{}'
 * Could also do the following:
 * const mapStateToProps = state => {
 * const { email, password, error } = state.auth;
 */
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login);
