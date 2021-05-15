<template>
  <v-card elevation="0">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            elevation="0"
            :color="colors[Math.floor(Math.random() * colors.length)]"
            dark
            class="mx-auto my-5"
            v-for="(item, index) in majors"
            :key="index"
          >
            <v-card-title class="text-h5"> {{ item.major }} </v-card-title>
            <!-- <v-card-subtitle>
              {{ item.desription }}
            </v-card-subtitle> -->
            <v-btn text @click="selectMajor(item)"> 選擇主修 </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer>
      <v-card
        flat
        tile
        width="100%"
        height="100%"
        class="red lighten-1 text-center"
        elevation="0"
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

  data() {
    return {
      majors: null,
      colors: ["#ef5350", "#ef9a9a", "#ffb74d"],
    };
  },

  components: {},

  methods: {
    selectMajor(val) {
      this.$store.commit("setMajor", val);
      this.$router.push({ name: "Courses" });
    },
  },

  async mounted() {
    this.axios
      .get("http://34.145.96.108:3000/api/v1/majors")
      .then((response) => (this.majors = response.data));
  },
};
</script>
