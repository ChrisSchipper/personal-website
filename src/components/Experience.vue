<template>
  <v-main>
    <v-row>
      <v-col cols="12">
        <p class="experience-title">A bit of what I've accomplished...</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" offset-md="1" md="10">
        <v-timeline :dense="smallScreen">
          <v-timeline-item v-for="exp in experiences" :key="exp.id">
            <template v-slot:icon></template>
            <span slot="opposite">{{ exp.date }}</span>
            <v-card class="timeline-card" color="#17161E" outlined :id="`timeline-${exp.id}`">
              <v-card-title class="headline">{{ exp.company }}</v-card-title>
              <v-card-subtitle>{{ exp.title }}
                <div v-if="smallScreen">{{ exp.date }} </div>
              </v-card-subtitle>
              <v-card-text>
                <p v-for="(note, i) in exp.notes" :key="i">{{ note }}</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import { IntersectionAnimationApplier, IntersectionAnimationApplierFactory } from "./../util/IntersectionAnimationApplierFactory";

export default Vue.extend({
  name: "Experience",
  data: () => ({
    experiences: [
      {
        id: "projetech",
        company: "Projetech Inc.",
        title: "Software Developer",
        date: "2017 - Present",
        notes: [
          "Developing full stack business software in Vue.JS, C#/.Net Core, Node.JS and Python/Jython with a focus on front-end development.",
          "Lead the front-end development on one of our primary software development projects",
          "Design and maintain many of the continuous deployment/integration pipelines and processes used across six separate projects.",
          "Led the agile/scrum processes for many of our software development projects.",
          "Assisted in running the Software Developer co-op program and provided mentorship/leadership for co-ops throughout their term"
        ]
      },
      {
        id: "miami2",
        company: "Miami University",
        title: "Research Assistant",
        date: "2016 - 2017",
        notes: [
          "Developed a sound localization application for the Microsoft HoloLens using Unity and C# to assist users that suffer from hearing disabilities.",
          "More about this can be read in my published paper:",
          "https://dl.acm.org/doi/10.1145/3132525.3134786"
        ]
      },
      {
        id: "marathon",
        company: "Marathon Petroleum Corporation",
        title: "Pipeline Applications Intern",
        date: "Summer 2016",
        notes: [
          "Developed a full stack application using C#/.Net that gathered data and generated basic reports.",
          "Made enhancements to an existing Java application to enhance its usability and modernize its apperance.",
          "Managed an intern and two summer helpers in a small project involving a third-party application.",
          "Designed user tests for a third-party application and lead testing meetings with business users to determine whether the software was ready for production."
        ]
      },
      {
        id: "miami1",
        company: "Miami University",
        title: "Teaching Assistant",
        date: "2015-2017",
        notes: [
          "CSE 174 - Fundamentals of Programming and Problem Solving",
          "CSE 274 - Data Abstraction and Data Structures",
          "CSE 283 - Data Communications and Networks"
        ]
      },
      {
        id: "smuckers",
        company: "The J.M. Smucker Company",
        title: "IS Intern",
        date: "Summer 2015",
        notes: [
          "Created pages within the transportation department's web application using Oracle's APEX software.",
          "Handled low priority tasks in the change management system including SQL changes and system fixes."
        ]
      }
    ] as Array<ExperienceBase>,
    observers: [] as Array<IntersectionAnimationApplier>
  }),
  computed: {
    smallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  mounted() {
    const applierFactory: IntersectionAnimationApplierFactory = new IntersectionAnimationApplierFactory();

    (this.experiences as Array<ExperienceBase>).forEach((experience) => {
      const id: string = `timeline-${experience.id}`;
      const element: HTMLElement = document.getElementById(id) as HTMLElement;
      const applier: IntersectionAnimationApplier = applierFactory.Create(element);
      applier.Observe();
      this.observers.push(applier);
    });
  },
  beforeDestroy() {
    (this.observers as Array<IntersectionAnimationApplier>).forEach(observer => {
      observer.Disconnect();
    });
  }
});

interface ExperienceBase {
  id: string,
  company: string;
  title: string;
  date: string;
  notes: Array<string>;
}
</script>

<style scoped lang="scss">
.experience-title {
  font-family: "Georgia", sans-serif;
  font-size: 30px;
  color: $light-shade;
  text-align: center;
}

.timeline-card {
  opacity: 0%;
  border-color: $main-brand !important;
  border-width: 2px !important;
}
</style>