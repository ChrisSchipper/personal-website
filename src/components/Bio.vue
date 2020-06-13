<template>
  <v-main>
    <v-row>
      <v-col cols="12" offset-md="2" md="2" sm="12" class="profile-picture">
        <v-avatar size="250" class="side-nav-profile-picture">
          <img src="./../assets/profile-pic.png" />
        </v-avatar>
      </v-col>
      <v-col md="6" class="bio-card">
        <v-card color="#1B998B" shaped>
          <v-card-text>
            <v-card color="#17161E" shaped>
              <v-card-text>
                <p
                  class="section-text"
                >I am a full stack developer, but have found myself working primarily on the front-end as of late. I have experience with distributed architectures/cloud-based software systems as well as API and SPA development.</p>
                <p
                  class="section-text"
                >Additionally, I have experience building and maintaining CI/CD pipelines via Azure DevOps, and hosting and maintaining applications via IIS.</p>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
        <div class="fading-effect"></div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.bio-card {
  padding-top: 30px;
  opacity: 100%;
  transform: translate(0%, 0%);
  z-index: 1; /* Places this below the image container */
}

.profile-picture {
  opacity: 100%;
  z-index: 2;
  transform: translateX(1000px);
  animation: image-slide 4s cubic-bezier(.5,.5,0,1) forwards;
}

// CSS Effects taken/modified from https://css-tricks.com/slide-an-image-to-reveal-text-with-css-animations/
// TODO: handle different media queries for screen sizes  
.fading-effect {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: $dark-shade;
  animation: text-slide 4s cubic-bezier(.5,.5,0,1) forwards;
}

@keyframes image-slide {
  0% { transform: translateX(1000px) scale(0); }
  60% { transform: translateX(1000px) scale(1); }
  90% { transform: translateX(0) scale(1); }
  100% { transform: translateX(0) scale(1); }  
}

/* Slides the text by shrinking the width of the object from full (100%) to nada (0%) */
@keyframes text-slide {
  0% { transform: translateX(0px) scale(1);  }
  60% { transform: translateX(0px) scale(1);  }
  90%{ transform: translateX(-1000px) scale(1);  }
  100% { transform: translateX(-1000px) scale(1); }
}
</style>