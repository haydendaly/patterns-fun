import Link from 'next/link';

import toc from '@/chapters/toc';

function toDashes(name: string) {
  return name.replaceAll(' ', '-').toLowerCase();
}

type bookObj = {
  name: string;
  default?: string;
};

function getPath(section: bookObj, chapter?: bookObj, page?: bookObj) {
  const path = [toDashes(section.name)];
  if (chapter) {
    path.push(toDashes(chapter.name));
    if (page) {
      path.push(toDashes(page.name));
    }
  } else if (section.default) {
    path.push(toDashes(section.default));
  }
  return path.join('/');
}

function Menu() {
  return (
    <div
      style={{
        width: 250,
        height: '100vh',
        overflow: 'scroll',
        position: 'absolute',
        left: 0,
        padding: 10,
        paddingLeft: 20,
        backgroundColor: '#F5F7F9',
        borderStyle: 'none solid none none',
        borderWidth: 1,
        borderColor: '#D3DCE4',
      }}
    >
      <h1>patterns.fun</h1>
      {toc.map((section) => (
        <div key={section.name}>
          <Link href={getPath(section)} passHref>
            <h2>{section.name}</h2>
          </Link>
          {section.chapters.map((chapter) => (
            <div key={chapter.name}>
              <Link href={getPath(section, chapter)} passHref>
                <h3>{chapter.name}</h3>
              </Link>
              {chapter?.pages
                ? chapter.pages.map((page) => (
                    <div key={page.name}>
                      <Link href={getPath(section, chapter, page)} passHref>
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
