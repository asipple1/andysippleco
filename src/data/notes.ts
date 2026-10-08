export interface Note {
  slug: string;
  title: string;
  date: string;
  tag: string;
  read: string;
  excerpt: string;
  body: string[];
}

export const notes: Note[] = [
  {
    slug: 'astro-islands-for-drupal-people',
    title: 'Astro islands, for Drupal people',
    date: 'Sep 2026', tag: 'Astro', read: '5 min',
    excerpt: 'How I think about islands coming from a world of render arrays and Twig, and where the mental models line up.',
    body: [
      'If you have spent years in Drupal, the first thing to understand about Astro is that it defaults to shipping no JavaScript. That sounds like a constraint. In practice it is the same discipline Twig templates always encouraged: markup first, behavior only where it earns its place.',
      'An island is a component that gets hydrated on the client. Everything else is static HTML. The trick is deciding what truly needs to be interactive: a calendar filter yes, a hero headline no.',
      'The payoff shows up immediately in Lighthouse, but the bigger win is maintenance. Fewer moving parts, fewer surprises.',
    ],
  },
  {
    slug: 'core-web-vitals-on-a-museum-site',
    title: 'Core Web Vitals on a museum site',
    date: 'Jul 2026', tag: 'Performance', read: '6 min',
    excerpt: 'Where the slow parts actually were, and the three changes that mattered.',
    body: [
      'Large images are the obvious suspect on any museum site, and they were part of it. But the biggest Largest Contentful Paint issue was a web font loading strategy that blocked text rendering for nearly a second.',
      'The three fixes: font-display swap with a tuned fallback, responsive images with real width hints, and deferring the event calendar script until it scrolled into view.',
      'None of these are exotic. The work is in measuring first so you fix the thing that is actually slow.',
    ],
  },
  {
    slug: 'accessibility-is-a-content-problem',
    title: 'Accessibility is a content problem too',
    date: 'May 2026', tag: 'Accessibility', read: '4 min',
    excerpt: 'Why the template audit was the easy half of a WCAG project.',
    body: [
      'Fixing templates for WCAG 2.1 AA is bounded work. You audit, you fix, you re-test. The harder half is content: heading levels in body copy, alt text on ten years of uploads, PDFs that were never tagged.',
      'What worked was building guardrails into the editing experience rather than writing a style guide nobody reads. Required alt text, a heading picker that only offers valid levels, and a warning when a PDF is uploaded without a web version.',
      'Accessibility stays good when the tools make the right thing the default.',
    ],
  },
  {
    slug: 'building-from-an-island',
    title: 'Running a web practice from an island',
    date: 'Mar 2026', tag: 'Practice', read: '3 min',
    excerpt: 'Time zones, trust, and why being local matters to Hawaiʻi businesses.',
    body: [
      'Hawaiʻi is five or six hours behind the East Coast depending on the season. Early mornings here are mid-afternoon there, which turns out to be a productive overlap for agency work.',
      'For local clients the time zone is beside the point. What matters is that I can meet them in person, understand the market they are in, and be reachable when something breaks.',
      'Both kinds of work make the other better.',
    ],
  },
];
