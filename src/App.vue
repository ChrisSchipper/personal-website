<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="7">
            <div class="title-line">  </div>
          </v-col>
          <v-col align-self="end" md="4">
              <p class="title-text">Christopher Schipper</p>
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
}

.title-line {
    content: '';
    margin-top: 37px;
    border-top: 2px solid;
    flex: 1 0 10px;
    color: $main-brand;
    animation: slidein 2s;
}

//TODO: Maybe move these to their own animations file

@keyframes reaveal {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slidein {
  0% {
    margin-right: 800px;
  }
  100% {
    margin-left:0px;
  }
}

</style>
