import React, { Component } from 'react';
import samp from '../../helpers/samp';
import store from '../../helpers/store';

/* Pages */
//import imgBackground from '../../assets/img/background.png';

class Index extends Component {

    state = {
        login: '',
        pass: ''
    }

    handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

		this.setState({
		    [name]: value
		});
    }

    render() {
        return (
            <div className="panel-content">
                <div className="lgn-wrp grysh">
                    <div className="lgn-innr">
                        <div className="widget lgn-frm">
                            <div className="frm-tl">
                                <h4>Login to Admin</h4>
                                <span>Fill your detail to get in</span>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="row mrg10">
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <input className="brd-rd5" type="text" placeholder="User Name" name="login" value={this.state.login} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <input className="brd-rd5" type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <span className="chbx"><input type="checkbox" id="chk1" /><label for="chk1">Remember Me</label></span>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <button className="green-bg brd-rd5" type="submit">Login Now</button>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <a href="#" title="" className="frgt">Forget password?</a>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <a className="brd-rd5 blue-bg act-btn" href="#" title="">Create An Account</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        samp.CallServer("OnSubmitAuthorization", this.state.login, this.state.pass);
  	}
}

export default Index;