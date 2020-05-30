<template>
  <div>
    <v-app-bar color="deep-orange accent-3" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>BhojMandu</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-icon>restaurant_menu</v-icon>
      <v-btn text class="ma-1">Feels Like Eating</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLogin" text class="ma-1" @click="dialog=true;isOPTRequested=false;">Login / Register</v-btn>
  
      <v-menu offset-y v-if="isLogin">
        <template v-slot:activator="{ on }">
            <v-btn v-if="userData && userData.displayName" v-on="on" text class="ma-1" >{{userData.displayName}}</v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in adminLink"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
            link
          >
            <v-list-item-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item>
          <v-list-item active-class="border" link>
            <v-list-item-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-item-action>
            <v-list-item-title @click="logoutUser">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>



      <v-menu left bottom></v-menu>
    </v-app-bar>

    <v-divider class="mx-4" horizontal></v-divider>

    <!-- For Forms  -->

      
    <v-dialog v-model="dialog" max-width="790" >
      <v-card class="mx-auto">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-row style="margin:0px">
              <v-col cols="12" md="4" class="deep-orange accent-3">
                <v-card-text class="white--text mt-6">
                  <h1 class="text-center display-1">Hello Friends !</h1>
                  <h5 class="text-center">Enter your personal details and start your jorney with us.</h5>
                </v-card-text>
                <div class="text-center">
                  <v-btn rounded outlined dark @click="step++">Sign Up</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="8" style="padding-top:0px">
                <v-card-text >
                  
                  <div class="text-center" mt-4>
                      <v-btn @click="signInGmail" class="mx-2" fab color="green" outlined>
                      <v-icon>fab fa-google</v-icon>
                    </v-btn>
                    <v-btn @click="signInFacebook" class="mx-2" fab color="blue" outlined>
                      <v-icon>fab fa-facebook-f</v-icon>
                    </v-btn>
                  
                  </div>
                  <p class="text-center" mlt-4 style="padding: 0px;margin: 0px;
                  padding-top: 5px;color: #a2a2a2;">Ensure your email for registraton</p>
                  <v-form>
                    <v-text-field
                     v-if="!isOPTRequested"
                      label="Enter Mobile Number"
                      name="phoneNumber"
                      v-model="mobileNumber"
                      prepend-icon="phone"
                      type="number"
                      color="deep-orange accent-3"
                    />
                   <div  v-if="!isOPTRequested" class="text-center" >
                   <v-btn @click="requestMobileOTP" rounded dark color="deep-orange accent-3">Request OTP</v-btn>
                   </div>
                    <v-text-field
                      v-if="isOPTRequested"
                      id="phoneOtp"
                      label="OTP"
                      name="phoneOtp"
                      v-model="OTPverificationCode"
                      prepend-icon="lock"
                      type="text"
                      color="deep-orange accent-3"
                    />
                  </v-form>
                  <!-- <h3 class="text-center" mt-3>Forgot Your Password ?</h3> -->
                   <div   v-if="isOPTRequested" class="text-center" >
                  <v-btn @click="verifyLoginCode" rounded dark color="deep-orange accent-3">Sign In</v-btn>
                   </div>
                </v-card-text>
               
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2">
            <v-row style="margin:0">
              <v-col cols="12" md="4" class="deep-orange accent-3">
                <v-card-text class="white--text mt-6">
                  <h1 class="text-cnter display-1">Welcome Back !</h1>
                  <h5 class="text-center">To Keep connected with us login with your personal info</h5>
                </v-card-text>
                <div class="text-center">
                  <v-btn rounded outlined dark @click="step--">Sign In</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="8" style="padding-top:0px">
                <v-card-text class="mt-12">
                  <v-form>
                    <v-text-field
                      label="Name"
                      name="Name"
                      prepend-icon="person"
                      type="text"
                      color="deep-orange accent-3"
                    />
                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="email"
                      type="text"
                      color="deep-orange accent-3"
                    />
                    <v-text-field
                      id="password"
                      label="Password"
                      name="Password"
                      prepend-icon="lock"
                      type="password"
                      color="deep-orange accent-3"
                    />
                  </v-form>
                </v-card-text>
                <div class="text-center mt-5">
                  <v-btn rounded color="deep-orange accent-3" dark>Sign Up</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
    
      </v-card>
    </v-dialog>

    <!-- End of Forms -->
  </div>
</template>

<script>
import * as firebase from "firebase";
import {db} from '../../firebase/firebaseAuth';
export default {
  data: () => ({
    dialog: false,
    step: 1,
    isLogin:false,
    isOPTRequested:false,
    mobileNumber:'',
    OTPverificationCode:'',
    userData:'',
    adminLink: [{ icon: "person_outline", text: "Profile", route: "" }],
  }),
  props: {
    source: String
  },
  created(){
   if(window.recaptchaVerifier == undefined){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
   'size': 'invisible',
   'callback': function() {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // ...
  },
  'expired-callback': function() {
    // Response expired. Ask user to solve reCAPTCHA again.
    // ...
  }
    })
    window.recaptchaVerifier.render()
  }
    this.checkIsLogin();
  },
  methods:{
    checkIsLogin(){
    if(localStorage.userData && localStorage.userData.length){
     this.isLogin=true;
     this.userData=JSON.parse(localStorage.userData).user;
     console.log(this.userData);
    }else{
      this.isLogin=false;
    }
    },
    signInGmail(){
     let _this=this; 
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
     var userToken = result.credential.accessToken;
     var user = result.user;
     let userObj={token:userToken,
                   user:user}
     localStorage.userData=JSON.stringify(userObj); 
      _this.dialog=false; 
      _this.checkIsLogin();
  // ...
     }).catch(function(error) {
     console.log(db);
     console.log(error);
  // ...
   });
    },
    signInFacebook(){
      let _this=this; 
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
      'display': 'popup'
      });
      firebase.auth().signInWithPopup(provider).then(function(result) {
      var userToken = result.credential.accessToken;
      var user = result.user;
      let userObj={token:userToken,
                   user:user};
     localStorage.userData=JSON.stringify(userObj);  
     _this.dialog=false; 
      _this.checkIsLogin();      
  // ...
    }).catch(function(error) {
  // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // var email = error.email;
  // var credential = error.credential;
  console.log(error)
  // ...
   });
    },
    requestMobileOTP(){
      console.log("this.mobileNumber");
     this.isOPTRequested=true;
     const appVerifier = window.recaptchaVerifier;
    const num = '+91' + this.mobileNumber;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        window.confirmationResult = result;
      })
      .catch(error => console.log(error));
    },
   verifyLoginCode() {
    window.confirmationResult
      .confirm(this.OTPverificationCode)
      .then(result => {
         localStorage.userData=JSON.stringify(result.user);  
        this.dialog=false; 
       this.checkIsLogin(); 
      })
      .catch(() =>{ 
       alert("Incorrect code entered?")
      });
  },
    logoutUser(){
      let _this=this; 
      firebase.auth().signOut().then(function() {
     localStorage.removeItem('userData');
     _this.checkIsLogin();
     console.log("loggedOut User")
     }).catch(function(error) {
      console.log(error);
     });
    }


  }
};
</script>



