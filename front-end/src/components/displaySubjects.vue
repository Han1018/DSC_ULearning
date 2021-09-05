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
            <v-btn text @click="selectSubject(item)"> 選擇主修 </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      majors: null,
      colors: ["#bbdefb", "#ef5350", "#ef9a9a", "#ffb74d"],
    };
  },

  components: {},

  methods: {
    selectSubject(val) {
      this.$store.commit("setSubject", val);
      this.$router.push({ name: "Majors" });
    },
  },

  async mounted() {
    // this.axios
    //   .get("http://34.145.96.108:3000/api/v1/subjects")
    //   .then((response) => (this.majors = response.data));

    let config = {
      method: "get",
      url: "api/subjects",
    };
    this.axios(config).then((response) => (this.majors = response.data));
  },
};
</script>
