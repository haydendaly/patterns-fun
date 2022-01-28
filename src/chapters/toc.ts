const toc = [
  {
    name: 'General',
    default: 'Introduction',
    chapters: [
      { name: 'Introduction', pages: [] },
      { name: 'Writing Good Code', pages: [] },
      { name: 'Practice', pages: [] },
    ],
  },
  {
    name: 'Patterns',
    default: 'Range Queries',
    chapters: [
      {
        name: 'Range Queries',
        pages: [
          { name: 'Matrix Range Queries' },
          { name: 'Tree Range Queries' },
          { name: 'Challenge Problems' },
        ],
      },
      {
        name: 'Sliding Window',
        pages: [{ name: 'Variations' }, { name: 'Challenge Problems' }],
      },
      {
        name: 'Intervals',
        pages: [{ name: 'Variations' }, { name: 'Challenge Problems' }],
      },
      {
        name: 'Binary Search',
        pages: [{ name: 'Variations' }, { name: 'Challenge Problems' }],
      },
      {
        name: 'Two Pointers',
        pages: [{ name: 'Variations' }, { name: 'Challenge Problems' }],
      },
      {
        name: 'Fast and Slow Pointers',
        pages: [{ name: 'Variations' }, { name: 'Challenge Problems' }],
      },
      {
        name: 'Linked List Reversal',
        pages: [{ name: 'Variations' }, { name: 'Challenge Problems' }],
      },
    ],
  },
  {
    name: 'Advanced Patterns',
    default: 'Disjoint Sets and Union Find',
    chapters: [
      {
        name: 'Disjoint Sets and Union Find',
        pages: [{ name: 'Variations' }, { name: 'Challenge Problems' }],
      },
    ],
  },
];

export default toc;
