<template>
  <v-app>
    <appbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import appbar from "@/components/appbar/index.vue";
export default {
  name: "App",

  data() {
    return {};
  },

  components: {
    appbar,
  },
};
</script>
