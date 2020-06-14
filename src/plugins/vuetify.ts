import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#17161E',
                secondary: '#1B998B',
                accent: '#7A6171',
            }
        }
    }
});
