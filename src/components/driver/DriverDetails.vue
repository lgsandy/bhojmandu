<template>
  <v-container>
    <v-card flat outlined>
      <v-toolbar flat color="cyan accent-3" dark dense fixed height="35">
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
                    <v-text-field v-model="editedItem.name" label="Name" outlined dense></v-text-field>

                    <v-text-field v-model="editedItem.email" label="Email" outlined dense></v-text-field>

                    <v-text-field v-model="editedItem.mobile" label="Mobile" outlined dense></v-text-field>

                    <v-text-field
                      v-model="editedItem.cCertificateNo"
                      label="Citzenship Certificate N0"
                      outlined
                      dense
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.drvLysinceNo"
                      label="Driving Lysince No"
                      outlined
                      dense
                    ></v-text-field>

                    <v-textarea
                      v-model="editedItem.address"
                      label="Address"
                      outlined
                      dense
                      rows="2"
                    ></v-textarea>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Email", value: "email" },
      { text: "Mobile", value: "mobile" },
      { text: "Citzenship Certificate No", value: "cCertificateNo" },
      { text: "Driving Lysince No", value: "drvLysinceNo" },
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
      drvLysinceNo: "",
      address: ""
    },
    defaultItem: {
      name: "",
      email: "",
      mobile: "",
      cCertificateNo: "",
      drvLysinceNo: "",
      address: ""
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
      this.desserts = [
        {
          name: "Sandy",
          email: "Sandy@email.com",
          mobile: "987654343987",
          cCertificateNo: "5567/9877",
          drvLysinceNo: "676778/76",
          address: "Hyderabad"
        }
      ];
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    back() {
      this.$router.push("/adminDasboard");
    }
  }
};
</script>