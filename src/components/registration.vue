<template>
  <div class="hello">
    <h1 class="d-flex justify-content-center login-title">Register</h1>
    <div class="container d-flex justify-content-center">
      <form class="form">
        <div class="container">
          <div class="row">
            <Row>
              <div class="col-lg-12 col">
                <div class="form-group">
                  <input class="form-control first-name" v-model="fullName" placeholder="Enter your  fullname">
                </div>
              </div>
            </Row>
          </div>
          <div class="row">
            <Row>
              <div class="col-lg-12 col">
                <div class="form-group">
                  <input v-model="username" class="form-control" placeholder="Enter your username">
                </div>
              </div>
            </Row>
          </div>

          <div class="row">
            <Row>
              <div class="col-lg-12 col">
                <div class="form-group">
                  <input v-model="password" class="form-control" placeholder="Enter your password">
                </div>
              </div>
            </Row>
          </div>

          <div class="row">
            <Row>
              <div class="col-lg-12 col">
                <div class="form-group">
                  <Button type="primary" class="btn btn-primary login-btn" long>Create Account</Button>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </form>
    </div>
    <div class="justify-content-center">
      <Row>
        <div class="col-lg-12 col">
          <a href="#">Create an account</a>
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    msg: String
  }
};
 data: () => ({
    fullName: '', 
    username: '',
    password: '',
  })
  
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
input {
  width: 350px;
}
.login-title {
  margin-bottom: 80px;
  margin-top: 140px;
}
.row {
  margin-bottom: 15px;
}

.login-btn {
  width: 353px;
}
</style>
