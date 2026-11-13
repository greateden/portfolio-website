export const GET = () => new Response(
  [
    '# Eden Li Yitian',
    '',
    'Eden Li Yitian is a computational linguistics researcher, photographer and writer in Zürich, Switzerland.',
    '',
    'Sections:',
    '- Home: /',
    '- Photography: /gallery',
    '- Projects: /projects',
    '- Writing (themes and work in progress): /writing',
    '- About: /about',
    '- Contact: /contact',
    '',
    'Elsewhere:',
    '- Flickr: https://www.flickr.com/people/lumierecrafter/',
    '- LinkedIn: https://www.linkedin.com/in/eden-li-616a01255/',
    '- GitHub: https://github.com/greateden',
    '',
    'The portfolio draws on the source website’s original design and animation system, with new writing and imagery.',
  ].join('\n'),
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
);
