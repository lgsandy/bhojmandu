<template>
  <nav>
    <v-app-bar dark color="#F05A00" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase" style="color:white">
        <span class="font-weight-light">Bhoj</span>
        <span>mandu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
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
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-dots-vertical</v-icon>
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
            <v-list-item-title @click="logoutDialog = true">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <router-link to="/admin">
        <v-btn text @click="logout">
          <span>Exit</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </router-link>-->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app class="red darken-4" :mini-variant.sync="mini">
      <!-- <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/img1.png" alt />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Username</p>
        </v-flex>
        <v-flex class="mt-4 mb-4">
          <Popup />
        </v-flex>
      </v-layout>-->

      <v-list flat>
        <v-list-item class="px-2" link>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>John Leider</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    links: [{ icon: "dashboard", text: "Dashboard", route: "/adminDasboard" }],
    adminLink: [{ icon: "person_outline", text: "Profile", route: "" }],
    mini: true
  }),
  components: {
    // Popup
  },
  methods: {
    logout() {
      localStorage.removeItem("adminData");
    }
  }
};
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
