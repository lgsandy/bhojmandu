<template>
  <div class="team">
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Order Received</div>
                <v-list-item-title class="headline mb-1 text-right">523614</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div style="font-size:25px">523614</div>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="#F44336" width="80" height="80" elevation="10">
                  <v-icon dark large>subscriptions</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Order Delivered</div>
                <v-list-item-title class="headline mb-1 text-right">+700</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div style="font-size:25px">700</div>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="#03A9F4" width="80" height="80" elevation="10">
                  <v-icon dark large>add_shopping_cart</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Today Earnings</div>
                <v-list-item-title class="headline mb-1 text-right">34,245</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div style="font-size:25px">34,245</div>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="#FFC107" width="80" height="80" elevation="10">
                  <v-icon dark large>folder_shared</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Monthy Earnings</div>
                <v-list-item-title class="headline mb-1 text-right">1730</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div style="font-size:25px">1730</div>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="list in team" :key="list.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img :src="list.avatar" alt />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{list.name}}</div>
              <div class="grey--text">{{list.role}}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn outlined color="orange" @click="updateData(list)">
                <span>{{list.name}}</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- Dialogue For Add Driver -->

      <v-dialog v-model="driverDialog" width="500">
        <v-card>
          <v-card-title class="grey lighten-2" primary-title>Add Driver</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet,</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="driverDialog = false">Add</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "team",
  components: {},
  data: () => ({
    driverDialog: false,
    team: [
      { name: "All Resturents", role: "allResturent", avatar: "/img1.png" },
      { name: "All Drivers", role: "allDriver", avatar: "/img2.png" },
      { name: "Add Resturent", role: "addResturent", avatar: "/img3.png" },
      { name: "Add Driver", role: "addDriver", avatar: "/img4.png" }
    ]
  }),
  methods: {
    updateData(list) {
      if (list.role == "addDriver") {
        this.$router.push("/driverDetails");
      } else if (list.role == "addResturent") {
        console.log("resturent Add here");
      }
    }
  }
};
</script>
