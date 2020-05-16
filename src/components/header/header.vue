<template>
  <div>
    <v-app-bar color="deep-orange accent-3" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>BhojMandu</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-icon>restaurant_menu</v-icon>
      <v-btn text class="ma-1">Feels Like Eating</v-btn>
      <v-spacer></v-spacer>
      <v-btn text class="ma-1" @click="dialog=true">Login / Register</v-btn>
      <v-menu left bottom></v-menu>
    </v-app-bar>

    <v-divider class="mx-4" horizontal></v-divider>

    <!-- For Forms  -->

    <v-dialog v-model="dialog" min-width="100%">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="4" class="deep-orange accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello Friends !</h1>
                        <h5
                          class="text-center"
                        >Enter your personal details and start your jorney with us.</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">Sign Up</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 deep-orange--text text--accent-3"
                        >Sign in to BhojMandu</h1>
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center" mlt-4>Ensure your email for registraton</h4>
                        <v-form>
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
                        <h3 class="text-center" mt-3>Forgot Your Password ?</h3>
                      </v-card-text>
                      <div class="text-center" mt-3>
                        <v-btn rounded color="deep-orange accent-3">Sign In</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="deep-orange accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-cnter display-1">Welcome Back !</h1>
                        <h5
                          class="text-center"
                        >To Keep connected with us login with your personal info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Sign In</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 deep-orange--text text--accent-3"
                        >Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your Email For Registration</h4>
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
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>

    <!-- End of Forms -->
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    step: 1
  }),
  props: {
    source: String
  }
};
</script>
