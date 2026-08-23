import { jsx } from 'react/jsx-runtime';

const PATHS = [
  ['New World', 'arcanea-new-world'],
  ['New Character', 'arcanea-new-character'],
  ['New Book', 'arcanea-new-book'],
  ['New Research', 'arcanea-new-research'],
  ['Canon QA', 'arcanea-canon-qa'],
];

function Launcher() {
  return jsx('div', {
    style: { padding: '12px 14px', color: 'var(--ui-text-secondary)', fontSize: 13, lineHeight: 1.45 },
    children: [
      jsx('p', { key: 'h', style: { margin: '0 0 8px', color: 'var(--ui-text)' }, children: 'Arcanea session' }),
      jsx('p', { key: 'd', style: { margin: '0 0 10px' }, children: 'Ask for one path. Do not start five.' }),
      jsx('ul', {
        key: 'l',
        style: { margin: 0, paddingLeft: 18 },
        children: PATHS.map(([label, skill]) =>
          jsx('li', { key: skill, children: `${label} — ${skill}` })
        ),
      }),
    ],
  });
}

export default {
  id: 'arcanea-launcher',
  name: 'Arcanea launcher',
  register(ctx) {
    ctx.register({
      id: 'arcanea-launcher-pane',
      area: 'panes',
      title: 'Arcanea',
      data: { placement: 'right', width: '240px' },
      render: () => jsx(Launcher, {}),
    });
  },
};
