<template>
  <v-app>
    <appbar />
    <v-container
      fluid
      style="height: 100vh; min-height: 100%; max-height: 100%"
    >
      <router-view></router-view>
    </v-container>
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
