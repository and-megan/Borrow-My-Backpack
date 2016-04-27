var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require('../actions/user_actions');
var CurrentUserState = require('../mixins/current_user_state');
var LoginForm = require('./login_form');

var SignUpForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],
	getInitialState: function(){
		return {form: "signup"};
	},
	handleSubmit: function(e){
		e.preventDefault();
		UserActions.signup({
			email: this.state.email,
			password: this.state.password
		});
    this.setState({
      email: "",
      password: ""
    });
	},
  displayLoginForm: function () {
    this.setState({
      form: "login"
    });
  },
  renderLoginForm: function () {
    if (this.state.form === "signup") {
      return;
    }
    return (<div>
    {
      <LoginForm />
      })
    }
    </div>);
	},
	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},
	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},
	form: function(){
		if (this.state.currentUser) {
			return;
		}
		return(
				<form onSubmit={this.handleSubmit}>
					<section>
						<label> Email:
							<input type="text" valueLink={this.linkState("email")}/>
						</label>

						<label> Password:
							<input type="password" valueLink={this.linkState("password")}/>
						</label>
					</section>

					<section>

							<button name="action" type="submit">Sign up</button>

            	<button name="action" value="login" className="render-another-form" onClick={this.displayLoginForm}>Log in</button>

					</section>


				</form>
		);
	},
	render: function(){
		return (
			<div id="signup-form">
				{this.errors()}
        {this.form()}
        {this.renderLoginForm()}
			</div>
		);
	}
});

module.exports = SignUpForm;
