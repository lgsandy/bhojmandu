<template>
  <v-container>
    <v-card flat outlined>
      <v-toolbar color="#F05A00" flat dark dense fixed height="35">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="mr-1" @click="back">keyboard_backspace</v-icon>
          </template>
          <span>Back</span>
        </v-tooltip>
        <v-spacer />
        <v-toolbar-title class="body-2">
          <h4>All Drriver Details</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Driver Details</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="400px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">Add</v-btn>
              </template>
              <v-card>
                <v-card-title class="justify-center">
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-form ref="driverForm">
                      <v-text-field
                        :rules="driverName"
                        v-model="editedItem.name"
                        label="Name"
                        outlined
                        dense
                      ></v-text-field>
                      <v-text-field
                        :rules="driverEmail"
                        v-model="editedItem.email"
                        label="Email"
                        outlined
                        dense
                      ></v-text-field>
                      <v-text-field
                        :rules="driverMobileNo"
                        v-model="editedItem.mobile"
                        label="Mobile"
                        outlined
                        dense
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.cCertificateNo"
                        label="Citzenship No"
                        :rules="driverCitizenship"
                        outlined
                        dense
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.driverLicenseNo"
                        label="Driving license No"
                        :rules="driverLicense"
                        outlined
                        dense
                      ></v-text-field>
                      <v-textarea
                        v-model="editedItem.address"
                        label="Address"
                        :rules="driverAdress"
                        outlined
                        dense
                        rows="2"
                      ></v-textarea>
                    </v-form>
                  </v-container>
                </v-card-text>
                <v-card-actions dense>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="saveDriverData">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small color="warning" class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small color="error" @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import { db } from "../../firebase/firebaseAuth";
export default {
  data: () => ({
    dialog: false,
    driverName: [v => !!v || "Name is required"],
    driverCitizenship: [v => !!v || "Citizenship is required"],
    driverLicense: [v => !!v || "License is required"],
    driverAdress: [v => !!v || "Adress is required"],
    driverMobileNo: [
      v => /^[0-9_ ]*$/.test(v) || "Please enter numbers only",
      v =>
        v == 0 ||
        (v && !isNaN(parseFloat(v)) && v.length >= 10 && v.length <= 10) ||
        "Phone Number should be 10  digits",
        v => !!v || "Adress is required"
    ],
    driverEmail: [v => /^\w+@[a-zA-Z_ ]+?\.[a-zA-Z ]{2,3}$/.test(v)],
    headers: [
      { text: "Name", align: "start", sortable: false, value: "name" },
      { text: "Status", value: "isActive" },
      { text: "Mobile", value: "mobile" },
      { text: "Citzenship  No", value: "cCertificateNo" },
      { text: "Driving license No", value: "driverLicenseNo" },
      { text: "Address", value: "address" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      email: "",
      mobile: "",
      cCertificateNo: "",
      driverLicenseNo: "",
      address: "",
      isActive: false,
      currentLocation: "",
      isApproved: false
    },
    defaultItem: {
      name: "",
      email: "",
      mobile: "",
      cCertificateNo: "",
      driverLicenseNo: "",
      address: "",
      isActive: false,
      currentLocation: "",
      isApproved: false
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Driver" : "Edit Driver Details";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      let ref = db.collection("drivers");
      ref.onSnapshot(res => {
        this.desserts = [];
        if (res && res.docs) {
          for (let d of res.docs) {
            this.desserts.push(d.data());
          }
        }
      });
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    saveDriverData() {
      if (this.$refs.driverForm.validate()) {
        this.close();
        if(this.editedIndex == -1){
        this.editedItem.id=Math.random().toString(36).substring(5).toUpperCase();
        }
        let ref = db.collection("drivers").doc(this.editedItem.id);
        ref.set(this.editedItem).then(res => {
          console.log(res);
          this.resetValidation();
        });
      }
      //  this.desserts.push(this.editedItem);
    },
    back() {
      this.$router.push("/adminDasboard");
    },
    resetValidation() {
      this.$refs.driverForm.resetValidation();
    }
  }
};
</script>