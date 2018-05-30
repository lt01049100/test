<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <i-switch v-model="switch1" @on-change="change"></i-switch>

    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
    </ul>
    
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="City" prop="city">
            <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="Date">
            <Row>
                <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>

  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      switch1: false,
      formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
      },
      ruleValidate: {
          name: [
              { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          mail: [
              { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
              { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          city: [
              { required: true, message: 'Please select the city', trigger: 'change' }
          ],
          gender: [
              { required: true, message: 'Please select gender', trigger: 'change' }
          ],
          interest: [
              { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
              { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
          ],
          date: [
              { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
          ],
          time: [
              { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
          ],
          desc: [
              { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
              { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ]
      },
      switch1: false
    }
  },
  methods: {
      change (status) {
        this.$Message.info('开关状态：' + status);
      },
      handleSubmit (name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                  this.$Message.success('Success!');
              } else {
                  this.$Message.error('Fail!');
                  this.$router.push({ path: 'center' });
              }
          })
      },
      handleReset (name) {
          this.$refs[name].resetFields();
          this.$router.push({ path: '404' });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
