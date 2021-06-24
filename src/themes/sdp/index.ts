import { CustomTheme } from '@redware/card-types/v1';
import Card from './sections/card/Card.vue';

import Content from './layout/Content.vue';

const theme: CustomTheme = {
  name: 'sdp',
  extend: 'basic',
  components: {
    sections: {
      Card
    },
    layout: {
      Content
    }
  }
};
export default theme;
