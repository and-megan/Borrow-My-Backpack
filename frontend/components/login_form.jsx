var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//mixins
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CurrentUserState = require('../mixins/current_user_state');
//store
var UserStore = require('../stores/user_store');
//actions
var UserActions = require('../actions/user_actions');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],
	getInitialState: function(){
		return {
			form: "login"
		};
	},
	componentDidMount: function() {
		this.userListener = UserStore.addListener(this.onChange);
	},
	componentWillUnmount: function() {
		this.userListener.remove();
	},
	onChange: function () {
		if (this.state.currentUser) {
			hashHistory.push("/");
		}
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
	demoLogin: function (e) {
		e.preventDefault();

		UserActions.login({
			email: "borrow@backpack.com",
			password: "password"
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
	displaySignupForm: function (e) {
		e.preventDefault();
		this.setState({
			form: "signup"
		});
	},
	displayLoginForm: function (e) {
		e.preventDefault();
		this.setState({
			form: "login"
		});
	},

	// greeting: function(){
	// 	if (!this.state.currentUser) {
	// 		return;
	// 	}
	// 	return (
	// 		<div>
	// 			<h2>Welcome back, {this.state.currentUser.email}</h2>
	// 			<input type="submit" value="logout" onClick={this.logout}/>
	// 		</div>
	// 	);
	// },
	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li className='success-message' key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},
	formFields: function () {
		return(
			<section className="user-form-fields">

					<input className="email" type="email" placeholder="Email" valueLink={this.linkState("email")}/>



					<input className="password" type="password" placeholder="Password" valueLink={this.linkState("password")}/>

			</section>
		);
	},
	renderLoginForm: function(){
		if (this.state.form === "signup" || this.state.currentUser) {
			return;
		}
		return(

				<form className="user-form" onSubmit={this.handleLoginSubmit}>

					<h2>Log In</h2>
						{this.formFields()}

					<section className="user-button-container">

							<button name="action" value="signup" className="user-button" onClick={this.displaySignupForm}>Sign Up Page</button>

							<button type="submit" name="action" className="user-button" onClick={this.demoLogin}>Guest Demo</button>

							<button type="submit" name="action" className="user-button">Log in</button>

					</section>


				</form>

		);
	},
	renderSignupForm: function () {
		if (this.state.form === "login" || this.state.currentUser) {
			return;
		}
		return(
				<form className="user-form" onSubmit={this.handleSignupSubmit}>

					<h2>Create an account</h2>
					{this.formFields()}

					<section className="user-button-container">

							<button name="action" value="login" className="user-button" onClick={this.displayLoginForm}>Login Page</button>

							<button name="action" type="submit" className="user-button">Create Your Account</button>


					</section>
				</form>
		);
	},
	render: function(){
		return (
			<div className='login-page'>
				{this.errors()}
				<div className="blackground"><p className="tagline">Here at Borrow My Backpack we believe in exploring without the need for big purchases. Share your kayaks, snowboards,  backpacks, and more with our like-minded community.</p></div>
				<div className="login-form-container">
					{this.renderLoginForm()}
					{this.renderSignupForm()}
				</div>
				<div className="blackground"><h2 className="welcome-home">Welcome home.</h2></div>
			</div>
		);
	}
});

module.exports = LoginForm;
