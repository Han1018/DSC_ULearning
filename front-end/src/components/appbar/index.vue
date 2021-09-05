<template>
  <v-app-bar app dense fixed elevation="0" color="white">
    <v-row>
      <v-btn
        icon
        color="rgb(0, 0, 0, 0)"
        @click="sigin()"
        style="position: relative; left: 30px"
      >
        <v-icon class="side-icon" color="red">mdi-google-chrome</v-icon>
        <span class="contact-text red--text" v-if="getUser">{{
          getUser[0].displayName
        }}</span>
        <span class="contact-text red--text" v-else>Login</span>
      </v-btn>
    </v-row>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">登出</v-card-title>
        <v-card-actions
          ><v-btn color="btnColor" text @click="singout()"> Agree </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="btnColor" text @click="dialog = false">
            Disagree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    sigin() {
      let vm = this;
      if (vm.getUser) {
        vm.dialog = true;
        return;
      }
      vm.$store.dispatch("userSignIn");
    },
    async singout() {
      let vm = this;
      await vm.$store.dispatch("userSignOut");
      location.reload();
    },
  },
  computed: {
    getUser() {
      console.log("This:", this.$store.state.user);
      return this.$store.state.user;
    },
  },
  components: {},
};
</script>
