import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import './login.less'

class Login extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
			}
		})
	}
	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div className="login">
				<header className="login-header">
					<h1>React项目：后台管理系统</h1>
				</header>
				<section className="login-content">
					<h2>用户登录</h2>
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [
									{
										required: true,
										message: '请输入用户名!',
									},
								],
							})(<Input placeholder="用户名" />)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [
									{
										required: true,
										message: '请输入密码',
									},
								],
							})(<Input type="password" placeholder="密码" />)}
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
							>
								登录
							</Button>
						</Form.Item>
					</Form>
				</section>
			</div>
		)
	}
}
// const WrapLogin = Form.create()(Login)
export default WrapLogin
