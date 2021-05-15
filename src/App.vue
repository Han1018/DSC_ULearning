<template>
  <v-app>
    <appbar />
    <v-content style="height: 100vh; max-height: 100%">
      <router-view></router-view>
    </v-content>
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
