const sections = [
  {
    name: 'General',
    chapters: [
      { name: 'Introduction' },
      { name: 'Writing Good Code' },
      { name: 'Practice' },
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
                      <h4>{page.name}</h4>
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
