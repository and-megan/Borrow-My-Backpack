var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require('../actions/user_actions');
var CurrentUserState = require('../mixins/current_user_state');


var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],
	getInitialState: function(){
		return {
			form: "login"
		};
	},


	handleLoginSubmit: function(e){
		e.preventDefault();
		UserActions.login({
			email: this.state.email,
			password: this.state.password
		});
		this.setState({
			email: "",
			password: ""
		});
	},
	handleSignupSubmit: function(e){
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
	logout: function(e){
		e.preventDefault();
		this.setState({
			form: "login"
		});
		UserActions.logout();
	},
	displaySignupForm: function () {
		this.setState({
			form: "signup"
		});
	},
	displayLoginForm: function () {
		this.setState({
			form: "login"
		});
	},

	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Welcome back, {this.state.currentUser.email}</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
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
	formFields: function () {
		return(
			<section>
				<label> Email:
					<input type="email" valueLink={this.linkState("email")}/>
				</label>

				<label> Password:
					<input type="password" valueLink={this.linkState("password")}/>
				</label>
			</section>
		)
	},
	renderLoginForm: function(){
		if (this.state.form === "signup" || this.state.currentUser) {
			return;
		}
		return(
				<form onSubmit={this.handleLoginSubmit}>

					<h2>Log in to your account</h2>
						{this.formFields()}

					<section>
							<button type="submit" name="action">Log in</button>
							<br></br>
							<br></br>
							<button name="action" value="signup" className="render-another-form" onClick={this.displaySignupForm}>Go to the sign up page</button>
					</section>


				</form>
		);
	},
	renderSignupForm: function () {
		if (this.state.form === "login" || this.state.currentUser) {
			return;
		}
		return(
				<form onSubmit={this.handleSignupSubmit}>

					<h2>Create a new account</h2>
					{this.formFields()}

					<section>
							<button name="action" type="submit">Create your account</button>
							<br></br>
							<br></br>
							<br></br>
							<button name="action" value="login" className="render-another-form" onClick={this.displayLoginForm}>Go to the login page</button>
					</section>

				</form>
		);
	},
	render: function(){
		return (
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.renderLoginForm()}
				{this.renderSignupForm()}
			</div>
		);
	}
});

module.exports = LoginForm;
