<template>
  <div class="hello">
    <h1 class="d-flex justify-content-center dashboard-title">{{ msg }}</h1>
    <div class="container d-flex justify-content-center">
      <form class="form">
        <div class="container">
          <div class="row">
            <Row>
              <div class="col-lg-12 col">
                <div class="form-group">
                  <input class="form-control" v-model="email" placeholder="Enter your username">
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
                  <Button type="primary" class="btn btn-primary dashboard-btn" long>dashboard</Button>
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
  name: "Dashboard",
  props: {
    msg: String
  }
};
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
.dashboard-title {
  margin-bottom: 80px;
  margin-top: 140px;
}
.row {
  margin-bottom: 15px;
}

.dashboard-btn {
  width: 353px;
}
</style>
