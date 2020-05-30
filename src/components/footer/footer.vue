<template>
  <div>
    <v-footer color="deep-orange accent-3" dark>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3">
            <v-toolbar-title>About Us</v-toolbar-title>
            <v-toolbar-title>Contact Us</v-toolbar-title>
            <v-toolbar-title>Privacy Policy</v-toolbar-title>
            <v-toolbar-title>Market Reviews</v-toolbar-title>
            <v-toolbar-title>Terms & Conditions</v-toolbar-title>
          </v-col>
          <v-col cols="12" md="3">
            <v-toolbar-title>How To Order?</v-toolbar-title>
            <v-toolbar-title>Delivery Charges</v-toolbar-title>
            <v-toolbar-title>Avilable Areas</v-toolbar-title>
            <v-toolbar-title>Return Policy</v-toolbar-title>
            <v-toolbar-title>FAQ's</v-toolbar-title>
          </v-col>
          <v-col cols="12" md="3">
            <v-toolbar-title>Call Us</v-toolbar-title>
            <v-toolbar-title>+977 - 9845739252</v-toolbar-title>
            <v-card-text>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn depressed elevation="12">
              <v-icon left>android</v-icon>PlayStore
            </v-btn>
            <v-btn depressed elevation="12" class="ml-2">
              <v-icon left>stay_current_portrait</v-icon>App Store
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-text class="text-center">
        Copyright &copy; {{ new Date().getFullYear() }} —
        <strong>BhojMandu. All Right Reserved.</strong>
      </v-card-text>
    </v-footer>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-youtube"]
  }),
  name: "Footer"
};
</script>