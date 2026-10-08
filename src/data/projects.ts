export interface Project {
  num: string;
  kind: string;
  slug: string;
  name: string;
  client: string;
  desc: string;
  role: string;
  stack: string;
  year: string;
  accent: string;
  imgLabel: string;
  imgOrder: number;
  textOrder: number;
  challenge: string;
  approach: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    num: '01', kind: 'Agency · Team', slug: 'exploratorium', name: 'Exploratorium',
    client: 'Exploratorium · San Francisco',
    desc: 'A Drupal rebuild for a museum of science, art and human perception: exhibit and program content modeled for reuse, with a React-driven calendar and ticketing hand-off.',
    role: 'Lead Frontend Developer', stack: 'Drupal · React · JavaScript', year: '2024',
    accent: '#EF7D22', imgLabel: 'Screenshot · exploratorium.edu homepage',
    imgOrder: 1, textOrder: 2,
    challenge: 'Exhibit, event and program content lived in disconnected systems, and the old site could not keep up with a calendar that changes daily.',
    approach: 'Modeled content around reusable exhibit and program entities in Drupal, then built a React calendar that reads from the same source and hands off cleanly to ticketing.',
    outcome: 'Editors publish once and it shows up everywhere. Calendar pages went from the slowest on the site to among the fastest.',
  },
  {
    num: '02', kind: 'Agency · Team', slug: 'flysfo', name: 'flysfo.com',
    client: 'San Francisco International Airport',
    desc: 'A high-traffic airport site where live flight status, parking availability and wayfinding content needed to stay fast and accurate under load.',
    role: 'Senior Developer', stack: 'Drupal · APIs · Caching', year: '2023',
    accent: '#19A6A3', imgLabel: 'Screenshot · flysfo.com flight status',
    imgOrder: 2, textOrder: 1,
    challenge: 'Flight status, parking and wayfinding all depend on live data, and traffic spikes whenever weather does.',
    approach: 'Layered caching in front of the airport APIs, degraded gracefully when a feed stalled, and kept the critical path to flight status under a second.',
    outcome: 'Stable through holiday peaks, with live data that stays live.',
  },
  {
    num: '03', kind: 'Agency · Team', slug: 'colorado-health', name: 'Colorado Health',
    client: 'Colorado Health Institute',
    desc: 'Research publications and data made findable: faceted search, structured content architecture and an accessibility pass across the entire template system.',
    role: 'Technical Lead', stack: 'Drupal · Search · Accessibility', year: '2022',
    accent: '#F3C623', imgLabel: 'Screenshot · publications search',
    imgOrder: 1, textOrder: 2,
    challenge: 'Years of research publications were hard to find and harder to read on a phone.',
    approach: 'Rebuilt the content architecture around topics and publication types, added faceted search, and ran an accessibility pass across every template.',
    outcome: 'Reports are discoverable by topic, and the site meets WCAG 2.1 AA.',
  },
  {
    num: '04', kind: 'Agency · Team', slug: 'twit', name: 'TWiT',
    client: 'TWiT.tv',
    desc: 'A podcast network publishing hundreds of episodes a year. Media feeds, show pages and archives built to stay quick as the catalog keeps growing.',
    role: 'Full-Stack Developer', stack: 'Drupal · Media APIs · Performance', year: '2021',
    accent: '#EB3323', imgLabel: 'Screenshot · twit.tv show page',
    imgOrder: 2, textOrder: 1,
    challenge: 'Hundreds of new episodes a year, each with media feeds that had to be correct the moment they published.',
    approach: 'Rebuilt show and episode pages on Drupal with media handled through dedicated APIs, and tuned the archive so it stays quick as the catalog grows.',
    outcome: 'Publishing is a single step, and the archive loads as fast as a fresh page.',
  },
  {
    num: '05', kind: 'Agency · Team', slug: 'frick', name: 'The Frick Collection',
    client: 'The Frick Collection · New York',
    desc: 'Collection browsing and exhibition content for a museum and research library, with large imagery handled responsively so the art stays the focus.',
    role: 'Frontend Developer', stack: 'Drupal · Collection Search · Images', year: '2020',
    accent: '#C26A8E', imgLabel: 'Screenshot · collection detail',
    imgOrder: 1, textOrder: 2,
    challenge: 'Large collection imagery and detailed scholarly content had to coexist without slowing the experience down.',
    approach: 'Responsive image pipelines, collection search tuned for both researchers and visitors, and templates that keep the art in focus.',
    outcome: 'A faster, calmer collection browser that the museum can keep extending.',
  },
];
