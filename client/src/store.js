import Vue from 'vue';
import Vuex from 'vuex'

import imageData from './assets/images/demo_avatar2.svg';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {
            profile_image: imageData,
            name: 'Артур',
            surname: 'Далакян',
            work: 'UX/UI designer',
            level: 'Junior',
            date_of_birth: {
                day: '04',
                month: '04',
                year: '2005'
            },
            employmentTime: 'с 9:00 до 18:00',
            personality: 'Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim. Enim interdum ut velit scelerisque viverra vestibulum fringilla ornare adipiscing. Sit fames sed venenatis in. Enim interdum ut velit scelerisque viverra vestibulum fringilla ornare adipiscing. Sit fames sed venenatis in.',
            softSkills: ['Креативность', 'Любознательность', 'Коммуникабельность'],
            hardSkills: ['Типографика', 'FigmaAdobe', 'PhotoShop', 'UX анализ', 'Agile', 'Коммуникационный дизайн'],
            project: 'Centras iHub',
            contacts: {
                mail: 'arturdalakan748@gmail.com',
                telegram: '@forexample123',
                phone: '+7 (777) 777-77-77'
            }
        }
    }
});

export default store;