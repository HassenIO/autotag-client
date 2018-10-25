import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Button, Form } from 'semantic-ui-react';
import { wrio } from '../../lib';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
    this.authStore = props.store.auth;
  }

  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
      this.props.history.push('/');
    } catch (e) {}
  }

  render() {
    return (
      <div className="Login">
        <Grid>
          <Grid.Column width={5}>
            <Form onSubmit={this.handleSubmit} loading={this.state.isLoading}>
              <Form.Field>
                <label>e-mail</label>
                <input onChange={this.handleChange('email')} />
              </Form.Field>
              <Form.Field>
                <label>Mot de passe</label>
                <input
                  type="password"
                  onChange={this.handleChange('password')}
                />
              </Form.Field>
              <Button type="submit" onClick={this.handleSubmit}>
                Me connecter
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.authStore.login();
      this.props.history.push('/');
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };
}

export default wrio(['store'], Login);
