<template>
  <div>
    <div class="center">
      <div class="mb-5">
        <v-img
          class="mr-2 img"
          contain
          :src="require('../assets/avans_logo.png')"
          transition="scale-transition"
          height="40"
          v-on:click.native="goHome()"
        />
      </div>
      <h3 class="my-5 text-center">
        Login imitation app only use for presentation
      </h3>
      <form>
        <label for="email" hidden>E-Mail Address</label>
        <div>
          <v-text-field
            :rules="rules"
            counter="25"
            filled
            label="Email"
            id="email"
            type="email"
            v-model="email"
            required
            autofocus
          ></v-text-field>
        </div>
        <div>
          <label for="password" hidden>Password</label>
          <div>
            <v-text-field
              id="password"
              type="password"
              v-model="password"
              required
              :rules="rules"
              counter="25"
              filled
              label="Password"
              autofocus
            ></v-text-field>
          </div>
        </div>
        <div>
          <v-btn
            type="submit"
            @click="handleSubmit"
            elevation="2"
            rounded
            block
            text
            >Login</v-btn
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.$di.users
          .login(this.email, this.password)
          .then((response) => {
            if (response == true) {
              this.$router.push("/");
            }
          })
          .catch(function (error) {
            console.error(error.response);
          });
      }
    },
  },
};
</script>
<style scoped>
.center {
  width: 50%;
  margin: 0 auto;
  margin-top: 15%;
}
</style>
