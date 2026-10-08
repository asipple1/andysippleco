export interface TimelineEntry {
  years: string;
  title: string;
  desc: string;
  accent: string;
}

export const timeline: TimelineEntry[] = [
  { years: '2024 → now', title: 'Independent · Oʻahu', desc: 'Direct work with Hawaiʻi businesses and senior contract work with agency teams.', accent: '#F3C623' },
  { years: '2020 → 2024', title: 'Lead Frontend Developer', desc: 'Technical lead on museum, airport and research institute builds. Drupal, React, accessibility and performance.', accent: '#5FD3CF' },
  { years: '2016 → 2020', title: 'Senior Developer', desc: 'Full-stack Drupal development for media and cultural clients, including large media archives.', accent: '#EB3323' },
  { years: '2012 → 2016', title: 'Web Developer', desc: 'Agency work across small business and nonprofit sites. Learned to ship.', accent: '#E39BB8' },
];
