<template>
  <v-card>
    <div
      align="center"
      justify="center"
      >
      <v-btn class="mx-5 black--text" width="100px" color="white">
        人工智慧
      </v-btn>
      <v-btn class="mx-5 black--text" width="100px" color="white">
        資工
      </v-btn>
      <v-btn class="mx-5 black--text" width="100px" color="white">
        經濟
      </v-btn>
      <v-btn class="mx-5 black--text" width="100px" color="white">
        機械
      </v-btn>
      <v-btn class="mx-5 black--text" width="100px" color="white">
        日文
      </v-btn>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
            class="mx-auto my-5"
            >
            <v-card-title class="text-h5">
              人工智慧
            </v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <v-icon dark>
                mdi-heart
              </v-icon>
              <v-btn text>
                Learn more
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
            color="#1F7087"
            dark
            class="mx-auto my-5"
          >
            <v-card-title class="text-h5">
              資工
            </v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <v-icon dark>
                mdi-heart
              </v-icon>
              <v-btn text>
                Learn more
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
            color="#952175"
            dark
            class="mx-auto my-5"
            >
            <v-card-title class="text-h5">
              經濟
            </v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <v-icon dark>
                mdi-heart
              </v-icon>
              <v-btn text>
                Learn more
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
            color="#952175"
            dark
            class="mx-auto my-5"
            >
            <v-card-title class="text-h5">
              經濟
            </v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <v-icon dark>
                mdi-heart
              </v-icon>
              <v-btn text>
                Learn more
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
            color="#952175"
            dark
            class="mx-auto my-5"
            >
            <v-card-title class="text-h5">
              經濟
            </v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <v-icon dark>
                mdi-heart
              </v-icon>
              <v-btn text>
                Learn more
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer>
      <v-card
        flat
        tile
        width="100%"
        height="100%"
        class="red lighten-1 text-center"
        >
        <v-card-text class="white--text">
            <strong>DSC</strong>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          <strong>{{ new Date().getFullYear() }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
};
</script>