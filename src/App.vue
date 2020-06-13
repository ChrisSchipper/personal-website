<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row >
          <v-col md="7">
            <div class="title-line">  </div>
          </v-col>
          <v-col class="subtitle-col-top" align-self="end" md="4">
              <p class="title-text">Christopher Schipper</p>
          </v-col>
        </v-row>
        <v-row class="subtitle-row">
          <v-col class="subtitle-col-bottom" offset-md="7" md="4">
              <p class="subtitle-text">Software Developer</p>
          </v-col>
        </v-row>
      </v-container>
      <Index/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Index from './components/Index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
@import 'src/sass/variables.scss';
@import 'src/sass/global.scss';

.title-text {
  display: flex;
  width: 100%;
  opacity: 0%;
  color: $main-brand;
  font-family: 'Georgia', sans-serif;
  font-weight:500;
  font-size: 50px;
  text-align: right;
  float: right;
  animation: 2s linear 1s reaveal forwards;
  margin-left:-355px;
  margin-bottom: 0px !important;
}

.title-line {
    content: '';
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
  font-family: 'Georgia', sans-serif;
  font-weight:500;
  font-size: 25px;
  text-align: right;
  float: right;
  animation: 2s linear 1.5s reaveal forwards;
  margin-left:-355px;
}

.subtitle-col-top {
  padding-bottom:0px;
}
.subtitle-col-bottom {
  padding-top:0px;
}
</style>
