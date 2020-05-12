<template>
  <v-app>
    <div v-if="getRouteName=='AdminDashboard'">
      <Navbar />
    </div>
    <v-content class="ma-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },
  computed: {
    getRouteName() {
      return this.$route.name;
    }
  },
  data: () => ({
    //
  })
};
</script>
