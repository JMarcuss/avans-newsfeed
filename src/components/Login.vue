<template>
    <div >
        <div class="center">
            <h4>Login</h4>
            <form>
                <label for="email" >E-Mail Address</label>
                <div>
                    <input id="email" type="email" v-model="email" required autofocus>
                </div>
                <div>
                    <label for="password" >Password</label>
                    <div>
                        <input id="password" type="password" v-model="password" required>
                    </div>
                </div>
                <div>
                    <button type="submit" @click="handleSubmit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                email : "",
                password : ""
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    this.$di.users.login(this.email, this.password).then(response => {
                        if(response == true){
                            this.$router.push('/')
                        }
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }
            }
        }
    }
</script>
<style scoped>
.center{
    width: 50%;
    margin: 0 auto;
    margin-top: 15%;
}
</style>
