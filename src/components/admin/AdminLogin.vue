<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid style="background-color:#F05A00">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-1">
              <v-toolbar color="#ca4b00" dark flat>
                 <v-spacer></v-spacer>
                <v-toolbar-title >Admin Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="adminLoginForm">
                  <v-text-field :rules="userNameRules" v-model="userName" label="Login" name="login" prepend-icon="person" type="text"></v-text-field>

                  <v-text-field :rules="passwordRules" v-model="password" id="password" label="Password" name="password" prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#F05A00" @click="loginAdmin" style="color:white">Login</v-btn>
                  <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar v-model="adminSnackbar" :timeout="2000">{{ snackbarText }}</v-snackbar>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import{ db } from '../../firebase/firebaseAuth';
export default {
  data: () => ({
   userName:'',
   password:'',
   adminSnackbar:false,
   snackbarText:'',
   userNameRules: [v => !!v || 'UserName is required'],
   passwordRules: [v => !!v || 'Password is required'],
  }),
  methods: {
    loginAdmin() {
      if(this.$refs.adminLoginForm.validate()){
         let ref = db.collection("bhojmandu").doc('admin')
        ref.get().then((res)=>{
          if(this.userName == res.data().userName){
            if(this.password == res.data().password){
              let adminObj=res.data();
              delete adminObj.password
              localStorage.adminData=JSON.stringify(adminObj);
             this.$router.push("/adminDasboard");
            }else{
              this.adminSnackbar=true;
              this.snackbarText='password Invalid';
            }
        }else{
            this.adminSnackbar=true;
            this.snackbarText='UserName Invalid';
        }
        })
        

 
      }
    }
  }
};
</script>