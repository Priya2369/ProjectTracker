import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form,  Header } from 'semantic-ui-react'
import styles from '../styles/profile.module.css'

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: '',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/e21a51ef-fcf5-4a30-a0e1-fdf8e8d6a817', this.state)
    .then(response => {
      console.log(response);
    })
  }
  render() {
    const { name, age, salary, hobby } = this.state; 
    return (
      <div fluid className={styles.container}>
        <h2 className={styles.h2}>Track your project</h2>
        <Form className={styles.form} onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field>
          
          <button color="blue" type='submit' className={styles.button}>Submit</button>
        </Form>
      </div>
    )
  }
}