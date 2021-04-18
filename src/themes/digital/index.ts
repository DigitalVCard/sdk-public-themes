import { CustomTheme } from '@redware/card-types/v1';
import Card from './sections/card/Card.vue';

import Content from './layout/Content.vue';

// import TheSectionMain from '@/common/theme/basic/components/TheSectionMain.vue';
// import TheAppBar from '@/common/theme/basic/components/TheAppBar.vue';

const theme: CustomTheme = {
  extend: 'basic',
  name: 'simple',
  components: {
    sections: {
      Card
    },
    layout: {
      Content
    }
    // sectionCard: Card,
    // theSectionMain: TheSectionMain,
    // theAppBar: TheAppBar
  }
};
export default theme;
