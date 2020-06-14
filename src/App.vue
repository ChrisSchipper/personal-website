<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row id="personal-overview">
          <v-col md="7">
            <div class="title-line"></div>
          </v-col>
          <v-col class="subtitle-col-top" align-self="end" cols="12" md="4">
            <p class="title-text">Christopher Schipper</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="subtitle-col-bottom" offset-md="7" cols="12" md="4">
            <p class="subtitle-text">Software Developer</p>
          </v-col>
        </v-row>
      </v-container>
      <Index />
    </v-main>
    <v-bottom-navigation :value="activeBtn" color="#4CBDD5" fixed>
      <v-btn @click="goToLink('#personal-overview')">
        <span>Overview</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn @click="goToLink('#personal-experience-section')">
        <span>Experience</span>
        <v-icon>mdi-code-braces</v-icon>
      </v-btn>
      <v-btn :href="'mailto:cschipper08@gmail.com'">
        <span>Email</span>
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn
        :href="'https://www.linkedin.com/in/christopher-schipper-44666796/'"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <span>LinkedIn</span>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        :href="'https://github.com/schippcj/personal-website'"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <span>GitHub</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <div class="filler"></div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Index from "./components/Index.vue";

export default Vue.extend({
  name: "App",

  components: {
    Index
  },

  data: () => ({
    activeBtn: 0
  }),

  methods: {
    goToLink(link: string) {
      try {
        this.$vuetify.goTo(link, {});
      } catch (error) {}
    }
  }
});
</script>

<style lang="scss">
@import "src/sass/variables.scss";
@import "src/sass/global.scss";

.subtitle-col-top {
  padding-bottom: 0px;
}

.subtitle-col-bottom {
  padding-top: 0px;
}

.filler {
  height: 60px;
}

@media only screen and (min-width: 960px) {
  .title-text {
    display: flex;
    width: 100%;
    opacity: 0%;
    color: $main-brand;
    font-family: "Georgia", sans-serif;
    font-weight: 500;
    font-size: 50px;
    text-align: right;
    float: right;
    animation: 2s linear 1s reaveal forwards;
    margin-left: -355px;
    margin-bottom: 0px !important;
  }

  .title-line {
    content: "";
    margin-top: 37px;
    border-top: 2px solid;
    flex: 1 0 10px;
    color: $main-brand;
    animation: slidein 2s;
  }

  .subtitle-text {
    display: flex;
    width: 100%;
    opacity: 0%;
    color: $main-brand;
    font-family: "Georgia", sans-serif;
    font-weight: 500;
    font-size: 25px;
    text-align: right;
    float: right;
    animation: 2s linear 1.5s reaveal forwards;
    margin-left: -355px;
  }
}

@media only screen and (max-width: 960px) {
  .title-text {
    width: 100%;
    opacity: 0%;
    color: $main-brand;
    font-family: "Georgia", sans-serif;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    animation: 2s linear 1s reaveal forwards;
    margin-bottom: 0px !important;
  }

  .title-line {
    display: none;
  }

  .subtitle-text {
    width: 100%;
    opacity: 0%;
    color: $main-brand;
    font-family: "Georgia", sans-serif;
    font-weight: 500;
    font-size: 25px;
    text-align: center;
    animation: 2s linear 1.5s reaveal forwards;
  }
}
</style>
