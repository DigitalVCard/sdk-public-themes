import { UseHelpers } from '@redware/gcard-sdk/types';
import { inject } from 'vue';

export const useHelpers: UseHelpers = () => {
  const helpers = inject('helpers') as any;
  return helpers;
};
