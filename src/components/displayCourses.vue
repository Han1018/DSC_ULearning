<template>
  <v-treeview
    style="text-overflow: ellipsis"
    open-all
    :items="items"
  ></v-treeview>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "影像處理 :",
          children: [
            { id: 2, name: "電腦圖學" },
            { id: 3, name: "線性代數" },
            { id: 4, name: "OpenCV" },
          ],
        },
        {
          id: 5,
          name: "人工智慧 :",
          children: [
            {
              id: 6,
              name: "人工智慧（英語：artificial intelligence，縮寫為AI）亦稱智械、機器智慧，指由人製造出來的機器所表現出來的智慧。通常人工智慧是指透過普通電腦程式來呈現人類智慧的技術。該詞也指出研究這樣的智慧系統是否能夠實現，以及如何實現。同時，透過醫學、神經科學、機器人學及統計學等的進步，常態預測則認為人類的很多職業也逐漸被其取代。",
              children: [
                {
                  id: 7,
                  name: "Python:",
                  children: [
                    { id: 8, name: "Pandas" },
                    { id: 9, name: "Numpy" },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: "material2 :",
              children: [
                {
                  id: 11,
                  name: "src :",
                  children: [
                    { id: 12, name: "v-btn : ts" },
                    { id: 13, name: "v-card : ts" },
                    { id: 14, name: "v-window : ts" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: "Downloads :",
          children: [
            { id: 16, name: "October : pdf" },
            { id: 17, name: "November : pdf" },
            { id: 18, name: "Tutorial : html" },
          ],
        },
        {
          id: 19,
          name: "Videos :",
          children: [
            {
              id: 20,
              name: "Tutorials :",
              children: [
                { id: 21, name: "Basic layouts : mp4" },
                { id: 22, name: "Advanced techniques : mp4" },
                { id: 23, name: "All about app : dir" },
              ],
            },
            { id: 24, name: "Intro : mov" },
            { id: 25, name: "Conference introduction : avi" },
          ],
        },
      ],
    };
  },
};
</script>
