import Vue from 'vue';
import Vuex from 'vuex'

import imageData from './assets/images/demo_avatar2.svg';

import iHub from './assets/images/iHub_logo2.svg';
import kupipolis from './assets/images/kupipolis.svg';
import sosmed from './assets/images/sos_medical_assistance.svg';
import komesk from './assets/images/centras_komesk.svg';
import mycent from './assets/images/mycent_logo.svg';

import iHubWave from './assets/images/blue_wave.png';
import kupipolisWave from './assets/images/kupipolis_wave.png';
import sosmedWave from './assets/images/sosmed_wave.png';
import kommeskWave from './assets/images/kommesk_wave.png';
import mycentWave from './assets/images/mycent_wave.png';


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
        },
        projects: [
            {
                logoUrl: iHub,
                text: 'Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim.',
                subdivision: 'Centras iHub',
                wave: iHubWave
            },
            {
                logoUrl: kupipolis,
                text: 'Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim.',
                subdivision: 'Kupipolis',
                wave: kupipolisWave
            },
            {
                logoUrl: sosmed,
                text: 'Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim.',
                subdivision: 'Sosmed',
                wave: sosmedWave
            },
            {
                logoUrl: komesk,
                text: 'Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim.',
                subdivision: 'Centras kommesk',
                wave: kommeskWave
            },
            {
                logoUrl: mycent,
                text: 'Lorem ipsum dolor sit amet consectetur. Arcu vulputate dignissim a tellus tincidunt porttitor mi sagittis. Adipiscing gravida nisl morbi tempor arcu neque enim.',
                subdivision: 'Mycent',
                wave: mycentWave
            }
        ]
    }
});

export default store;