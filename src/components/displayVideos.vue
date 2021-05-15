<template>
  <v-timeline align-top dense>
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" dark>
        <v-card-title class="title"> 影片名稱 </v-card-title>
        <v-card-text class="white text--primary">
          <v-row>
            <v-col cols="6">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <p>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </p>

              <v-btn :color="item.color" class="mx-0" outlined>
                開始學習
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon",
        },
        {
          color: "indigo",
          icon: "mdi-buffer",
        },
      ],
    };
  },
};
</script>
