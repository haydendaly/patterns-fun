import Link from 'next/link';

const sections = [
  {
    name: 'General',
    chapters: [
      { name: 'Introduction', pages: [] },
      { name: 'Writing Good Code', pages: [] },
      { name: 'Practice', pages: [] },
    ],
  },
  {
    name: 'Patterns',
    chapters: [
      {
        name: 'Range Queries',
        pages: [
          { name: 'Matrix Range Queries' },
          { name: 'Tree Range Queries' },
          { name: 'Challenge Problems' },
        ],
      },
    ],
  },
];

function toDashes(name: string) {
  return name.replace(' ', '-').toLowerCase();
}

function getPath(section: string, chapter?: string, page?: string) {
  const path = [toDashes(section)];
  if (chapter) {
    path.push(toDashes(chapter));
    if (page) {
      path.push(toDashes(page));
    }
  }
  return path.join('/');
}

function Menu() {
  return (
    <div
      style={{
        width: 250,
        position: 'absolute',
        left: 0,
        height: '100vh',
        padding: 10,
        backgroundColor: '#F5F7F9',
        borderStyle: 'none solid none none',
        borderWidth: 1,
        borderColor: '#D3DCE4',
      }}
    >
      <h1>Chapters</h1>
      {sections.map((section) => (
        <div key={section.name}>
          <h2>{section.name}</h2>
          {section.chapters.map((chapter) => (
            <div key={chapter.name}>
              <h3>{chapter.name}</h3>
              {chapter?.pages
                ? chapter.pages.map((page) => (
                    <div key={page.name}>
                      <Link
                        href={getPath(section.name, chapter.name, page.name)}
                        passHref
                      >
                        <h4>{page.name}</h4>
                      </Link>
                    </div>
                  ))
                : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
