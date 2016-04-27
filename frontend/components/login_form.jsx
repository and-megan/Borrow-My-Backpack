var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require('../actions/user_actions');
var CurrentUserState = require('../mixins/current_user_state');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],
	getInitialState: function(){
		return {form: "login"};
	},
	setForm: function(e){
		this.setState({form: e.currentTarget.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		UserActions.login({
			email: this.state.email,
			password: this.state.password
		});
	},
	logout: function(e){
		e.preventDefault();
		UserActions.logout();
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
						<label> Login
							<input type="Radio" name="action" value="login" onChange={this.setForm}/>
						</label>

						<label> Sign Up
							<input type="Radio" name="action" value="signup" onChange={this.setForm}/>
						</label>
					</section>

					<input type="submit" value="Submit"/>
				</form>
		);
	},
	render: function(){
		return (
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
