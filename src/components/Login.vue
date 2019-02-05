<template>
  <div class="hello">
    <h1 class="d-flex justify-content-center login-title">Login</h1>
    <div class="container d-flex justify-content-center">
      <form class="form">
        <div class="container">
          <div class="row">
            <Row>
              <div class="col-lg-12 col">
                <div class="form-group">
                  <input class="form-control" v-model="username" placeholder="Enter your username">
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
                  <Button type="primary" class="btn btn-primary login-btn" long>Login</Button>
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
             <router-link :to="{ name: 'Register'}">Create An Account</router-link>
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  }
};

data: () => ({

    username: '',
    password: '',
  });

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
