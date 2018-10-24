import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { Grid, Button, Form } from 'semantic-ui-react';
import { authActions } from '../../actions';
import { Layer } from '../../components';

function mapStateToProps(state) {
  return state;
}

class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false
  };

  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
      this.props.history.push('/');
    } catch (e) {}
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
      this.props.dispatch(authActions.login());
      this.props.history.push('/');
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="Login">
        <Layer>
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
        </Layer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
