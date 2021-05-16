<template>
  <v-card elevation="0">
    <div v-if="majors.length > 0">
      <v-card
        elevation="0"
        :color="colors[Math.floor(Math.random() * colors.length)]"
        dark
        class="mx-auto my-5"
        v-for="(item, index) in majors"
        :key="index"
      >
        <v-card-title class="text-h5"> {{ item.name }} </v-card-title>
        <v-card-subtitle>
          {{ item.desription }}
        </v-card-subtitle>
        <br />
        <v-btn text @click="selectMajor(item)"> 選擇向度 </v-btn>
      </v-card>
    </div>
    <div v-else>
      <v-card
        elevation="0"
        :color="colors[Math.floor(Math.random() * colors.length)]"
        dark
        class="mx-auto my-5"
      >
        <v-card-title class="text-h5"> 尚無課程 </v-card-title>
        <v-card-subtitle> Empty </v-card-subtitle>
      </v-card>
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      majors: null,
      colors: ["#bbdefb", "#ef5350", "#ef9a9a", "#ffb74d"],
    };
  },

  methods: {
    selectMajor(val) {
      this.$store.commit("setMajor", val);
      this.$router.push({ name: "Courses" });
    },
  },

  async mounted() {
    let id = this.$store.state.selectSubject.id;
    this.axios
      .get("http://34.145.96.108:3000/api/v1/majors/" + id)
      .then((response) => (this.majors = response.data));
  },
};
</script>
