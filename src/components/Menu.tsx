import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  const [selected, setSelected] = useState<string[]>([
    'general',
    'introduction',
  ]);
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath.split('/').filter((p) => p);
    if (path.length >= 2) {
      setSelected(path);
    }
  }, [router.asPath]);
  return (
    <div
      style={{
        width: 300,
        height: '100vh',
        overflow: 'scroll',
        position: 'absolute',
        left: 0,
        padding: 10,
        paddingLeft: 23,
        paddingRight: 0,
        backgroundColor: '#F5F7F9',
        borderStyle: 'none solid none none',
        borderWidth: 1,
        borderColor: '#D3DCE4',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>patterns.fun</h1>
      {toc.map((section) => (
        <div className="menu-section" key={section.name}>
          <Link href={getPath(section)} passHref>
            <h2 className="menu-section-text">{section.name}</h2>
          </Link>
          {section.chapters.map((chapter) => (
            <>
              <div
                className={
                  'menu-item menu-chapter' +
                  (selected.length == 2 &&
                  selected[0] == toDashes(section.name) &&
                  selected[1] == toDashes(chapter.name)
                    ? ' menu-item-selected'
                    : '')
                }
                key={chapter.name}
              >
                <Link href={getPath(section, chapter)} passHref>
                  <h3
                    className={
                      'menu-chapter-text' +
                      (selected.length == 2 &&
                      selected[0] == toDashes(section.name) &&
                      selected[1] == toDashes(chapter.name)
                        ? ' menu-chapter-text-selected'
                        : '')
                    }
                  >
                    {chapter.name}
                  </h3>
                </Link>
              </div>
              {chapter?.pages &&
              selected[0] == toDashes(section.name) &&
              selected[1] == toDashes(chapter.name)
                ? chapter.pages.map((page) => (
                    <div
                      className={
                        'menu-item menu-page' +
                        (selected[0] == toDashes(section.name) &&
                        selected[1] == toDashes(chapter.name) &&
                        selected.length > 2 &&
                        selected[2] == toDashes(page.name)
                          ? ' menu-item-selected'
                          : '')
                      }
                      key={page.name}
                    >
                      <Link href={getPath(section, chapter, page)} passHref>
                        <h4
                          onClick={() => {
                            if (selected.includes(chapter.name)) {
                              setSelected(
                                selected.filter((c) => c != chapter.name),
                              );
                            } else {
                              setSelected([...selected, chapter.name]);
                            }
                          }}
                        >
                          {page.name}
                        </h4>
                      </Link>
                    </div>
                  ))
                : null}
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
