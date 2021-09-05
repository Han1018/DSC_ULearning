<template>
  <v-card class="elevation-8 pt-12 pb-12 pl-6 pr-6" height="100%">
    <v-row align="center" justify="center text-center">
      <v-col cols="12" sm="8" md="4">
      <v-img height="150" contain src="https://pbs.twimg.com/profile_images/1182361454072209408/VEaUkAkk_400x400.png"></v-img>
        <h3><strong>LOGIN</strong></h3>
        <div>
          <v-text-field
          label="Account"
          hide-details="auto"
          solo
          class="my-2"
          clearable
          ></v-text-field>
          <v-text-field label="Password" solo clearable class="my-2"></v-text-field>
        </div>
      </v-col>
    </v-row>
    <div class="text-center">
      <div class="my-2">
        <v-btn class="red lighten-1 white--text">
        Login
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn class="red lighten-1 white--text">
        Forget password
        </v-btn>
      </div>
    </div>
    <v-footer position: fixed>
      <v-card
        flat
        tile
        width="100%"
        height="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text class="white--text">
            <strong>DSC</strong>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong>{{ new Date().getFullYear() }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
