<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-title class="red--text">
          <router-link to="/" style="z-index: 100; text-decoration: none">
            WikiLearngin | >
          </router-link>
          <v-card-subtitle class="secondary--text">自學平台</v-card-subtitle>
        </v-card-title>
        <v-card-subtitle>主修 > 向度 > 課程 > 學習影片</v-card-subtitle>
        <displayMajors> </displayMajors>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import displayMajors from "../components/displaySubjects.vue";
// import displayCourses from "../components/displayCourses.vue";
// import DisplayVideos from "../components/displayVideos.vue";

export default {
  components: { displayMajors },
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {},
  // components: { DisplayCourses, DisplayVideos },
};
</script>

<style scoped></style>
