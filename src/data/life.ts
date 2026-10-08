export interface LifeItem {
  id: string;
  kind: 'photo' | 'video';
  span: string;
  ratio: string;
  accent: string;
  date: string;
  place: string;
  caption: string;
  placeholder: string;
}

export const life: LifeItem[] = [
  { id: 'life-01', kind: 'photo', span: 'span 2', ratio: '16/9', accent: '#19A6A3', date: 'Sep 2026', place: 'Kaʻena Point', caption: 'End of the trail, end of the day.', placeholder: 'Wide landscape photo' },
  { id: 'life-02', kind: 'video', span: 'auto', ratio: '4/5', accent: '#F3C623', date: 'Aug 2026', place: 'North Shore', caption: 'Short clip from the water.', placeholder: 'vertical clip' },
  { id: 'life-03', kind: 'photo', span: 'auto', ratio: '4/5', accent: '#EB3323', date: 'Jul 2026', place: 'Mānoa', caption: 'After the rain.', placeholder: 'Portrait photo' },
  { id: 'life-04', kind: 'photo', span: 'auto', ratio: '1/1', accent: '#C26A8E', date: 'Jun 2026', place: 'Home', caption: 'Weekend project, not a website.', placeholder: 'Square photo' },
  { id: 'life-05', kind: 'video', span: 'span 2', ratio: '16/9', accent: '#5FD3CF', date: 'May 2026', place: 'Haleʻiwa', caption: 'Sunset timelapse.', placeholder: 'landscape clip' },
  { id: 'life-06', kind: 'photo', span: 'auto', ratio: '4/5', accent: '#F3C623', date: 'Apr 2026', place: 'Koʻolau', caption: 'Ridge line before the clouds came in.', placeholder: 'Portrait photo' },
];
