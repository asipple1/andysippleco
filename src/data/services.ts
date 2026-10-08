export interface Service {
  num: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { num: '01', title: 'Websites', desc: 'Custom website design and development for businesses that need something better than an off-the-shelf template.' },
  { num: '02', title: 'Website Rebuilds', desc: 'Modernize an outdated or difficult-to-maintain site without losing what already works.' },
  { num: '03', title: 'Drupal & CMS Development', desc: 'Custom Drupal builds, integrations, migrations and frontend development.' },
  { num: '04', title: 'Performance & Technical Consulting', desc: 'Improve accessibility, Core Web Vitals, architecture and frontend performance.' },
];

export interface SkillGroup {
  title: string;
  accent: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { title: 'Frontend', accent: '#EB3323', items: ['Astro', 'React / Preact', 'JavaScript / TypeScript', 'Tailwind', 'CSS'] },
  { title: 'CMS', accent: '#19A6A3', items: ['Drupal', 'Headless CMS', 'Content architecture'] },
  { title: 'Engineering', accent: '#F3C623', items: ['API integrations', 'Search', 'Performance', 'Accessibility', 'Component systems'] },
];
