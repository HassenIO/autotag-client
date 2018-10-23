import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { FormControl, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { authActions } from '../../actions';
import { Layer } from '../../components';
import './style.css';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  buttonBlue: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
  }
};

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
    const { classes } = this.props;
    return (
      <div className="Login">
        <Layer size={2}>
          <form onSubmit={this.handleSubmit}>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                id="email"
                label="e-mail"
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                className={classes.textField}
                type="password"
                id="password"
                label="Mot de passe"
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
              />
            </FormControl>
            <FormControl fullWidth>
              <Button
                className={classNames(classes.button, {
                  [classes.buttonBlue]: true
                })}
                onClick={this.handleSubmit}
                disabled={this.state.isLoading}
              >
                Me connecter
              </Button>
            </FormControl>
          </form>
        </Layer>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Login));
