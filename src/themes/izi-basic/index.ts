import { CustomTheme } from '@redware/card-types/v1';
import Card from './sections/card/Card.vue';

import Content from './layout/Content.vue';
import TopBar from './layout/TopBar.vue';
import BottomBar from './layout/BottomBar.vue';
import TitleSection from './layout/TitleSection.vue';

// import TheSectionMain from '@/common/theme/basic/components/TheSectionMain.vue';
// import TheAppBar from '@/common/theme/basic/components/TheAppBar.vue';

const theme: CustomTheme = {
  extend: 'basic',
  name: 'izi-basic',
  components: {
    sections: {
      Card
    },
    layout: {
      Content,
      TopBar,
      TitleSection,
      BottomBar
    }
    // sectionCard: Card,
    // theSectionMain: TheSectionMain,
    // theAppBar: TheAppBar
  }
};
export default theme;
