<template>
  <v-main>
    <v-row>
      <v-col cols="12" md="4" sm="12" class="about-section">
        <div class="icon-center">
          <v-list-item-icon>
            <v-icon class="section-icon">mdi-school</v-icon>
          </v-list-item-icon>
          <div class="divider"></div>
          <div class="section-text-block">
            <div class="section-text">Miami University - Oxford, OH</div>
            <div class="section-text">College of Engineering and Computing</div>
            <div class="section-text">Bachelor of Science in Computer Science | May 2017</div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4" sm="12" class="about-section">
        <div class="icon-center">
          <v-list-item-icon>
            <v-icon class="section-icon">mdi-briefcase</v-icon>
          </v-list-item-icon>
          <div class="divider"></div>
          <div class="section-text-block">
            <div class="section-text">Projetech, Inc. - Cincinnati OH</div>
            <div class="section-text">Software Developer</div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4" sm="12" class="about-section">
        <div class="icon-center">
          <v-list-item-icon>
            <v-icon class="section-icon">mdi-code-tags</v-icon>
          </v-list-item-icon>
          <div class="divider"></div>
          <div class="section-text-block">
            <div class="section-text">Vue.JS | TypeScript | SASS | Jest</div>
            <div class="section-text">.Net Core | XUnit</div>
            <div class="section-text">SQL Server | MongoDB</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.about-section {
  opacity: 0%;
  animation: 2s linear 2s reaveal forwards;
}
.icon-center {
  text-align: center;
}
.section-icon {
  font-size: 80px !important;
}
.divider {
  margin-top: 10px;
  border-top: 2px solid;
  flex: 1 0 10px;
  color: #fff;
  width: 80%;
  margin-left: 10%;
}
.section-text-block {
  margin-top: 20px;
}
</style>