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
        <v-toolbar elevation="0" style="position: relative; top: -35px">
          <v-btn icon color="transparent" dark :to="{ name: 'Home' }">
            <v-icon color="grey">mdi-chevron-left</v-icon>
            <span class="grey--text">返回</span>
          </v-btn>
          <v-card-subtitle>向度 > 課程 > 學習影片</v-card-subtitle>
        </v-toolbar>
        <displayMajors style="position: relative; top: -20px" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import displayMajors from "../components/displayMajors.vue";
// import DisplayVideos from "../components/displayVideos.vue";

export default {
  components: { displayMajors },
  name: "Majors",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
