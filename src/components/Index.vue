<template>
  <v-container>
    <bio></bio>
    <v-btn class="contact-btn" outlined color="#4CBDD5" large>Contact Me</v-btn>
    <top-three class="section-divider"></top-three>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Bio from '@/components/Bio.vue';
  import TopThree from "@/components/TopThree.vue";

  export default Vue.extend({
    name: 'Index',

    components: {
      Bio,
      TopThree
    },

    data: () => ({ }),
  })
</script>

<style scoped lang="scss">
  .section-divider {
    margin-top: 100px;
  }
  .contact-btn {
    opacity: 0%;
    float: right;
    margin-right: 300px;
    animation: 2s linear 3s reaveal forwards;
  }
</style>