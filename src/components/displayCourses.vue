<template>
  <v-card elevation="0">
    <div v-if="courses.length > 0">
      <v-card
        elevation="0"
        :color="colors[Math.floor(Math.random() * colors.length)]"
        dark
        class="mx-auto my-5"
        v-for="(item, index) in courses"
        :key="index"
      >
        <v-card-title class="text-h5"> {{ item.name }} </v-card-title>
        <v-card-subtitle>
          {{ item.desription }}
        </v-card-subtitle>
        <br />
        <v-btn text @click="selectCourse(item)"> 選擇課程 </v-btn>
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
      courses: null,
      colors: ["#bbdefb", "#ef5350", "#ef9a9a", "#ffb74d"],
    };
  },

  methods: {
    selectCourse(val) {
      this.$store.commit("setCourse", val);
      this.$router.push({ name: "Videos" });
    },
  },

  async mounted() {
    let id = this.$store.state.selectMajor.id;
    this.axios
      .get("http://34.145.96.108:3000/api/v1/course/" + id)
      .then((response) => (this.courses = response.data));
  },
};
</script>
