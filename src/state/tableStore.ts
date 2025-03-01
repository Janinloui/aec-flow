import { create } from 'zustand';
import { SlabType } from '../types/slabType';
import { UserCategory } from '../enums/user';
import { StartData } from './data';

type TableStore = {
  elements: SlabType[];
  updateElement: (element: SlabType) => void;
  userCategory: UserCategory;
  setUserCategory: (c: UserCategory) => void;
};

export const useTableStore = create<TableStore>((set) => ({
  elements: StartData,
  updateElement: (element: SlabType) =>
    set((s) => {
      const index = s.elements.findIndex((e) => e.id === element.id);
      if (index !== -1) s.elements[index] = { ...element };
      return { elements: [...s.elements] };
    }),
  userCategory: UserCategory.Ubermensch,
  setUserCategory: (userCategory: UserCategory) => set((s) => ({ userCategory })),
}));
