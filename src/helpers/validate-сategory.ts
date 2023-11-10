import { CategoriesEnum } from '@/enums/categories.enum';

export const isValidCategory = (category: CategoriesEnum) =>
  Object.values(CategoriesEnum).includes(category);
