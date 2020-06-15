<template>
  <v-container>
    <bio></bio>
    <v-btn class="contact-btn" outlined color="#4CBDD5" large :href="'mailto:cschipper08@gmail.com'">Get in Touch</v-btn>
    <top-three class="section-divider"></top-three>
    <experience id="personal-experience-section" class="section-divider"></experience>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Bio from '@/components/Bio.vue';
  import TopThree from "@/components/TopThree.vue";
  import Experience from "@/components/Experience.vue";

  export default Vue.extend({
    name: 'Index',

    components: {
      Bio,
      TopThree,
      Experience
    },

    data: () => ({}),
  })
</script>

<style scoped lang="scss">
  .section-divider {
    margin-top: 100px;
  }
  @media only screen and (min-width: 960px) {
    .contact-btn {
      opacity: 0%;
      float: right;
      margin-right: 300px;
      animation: 2s linear 3s reveal forwards;
    }
  }

  @media only screen and (max-width: 960px) {
    .contact-btn {
      opacity: 0%;
      float: right;
      animation: 2s linear 3s reveal forwards;
    }
  }

</style>