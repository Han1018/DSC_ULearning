<template>
  <v-container>
    <v-btn icon color="transparent" dark :to="{ name: 'Courses' }">
      <v-icon color="grey">mdi-chevron-left</v-icon>
      <span class="grey--text">返回</span>
    </v-btn>
    <v-row>
      <v-col cols="12">
        <displayVidoes />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import displayVidoes from "../components/displayVideos.vue";

export default {
  components: { displayVidoes },
  name: "Courses",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
