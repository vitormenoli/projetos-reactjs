const ICONS = [
  {
    id: "cat",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFB74D" d="M32 4c-6 0-11 4-12 9-5 1-9 6-9 12 0 7 6 12 6 20 0 8 9 19 15 19s15-11 15-19c0-8 6-13 6-20 0-6-4-11-9-12-1-5-6-9-12-9z"/>
        <circle fill="#FFF3E0" cx="24" cy="28" r="4"/>
        <circle fill="#FFF3E0" cx="40" cy="28" r="4"/>
      </svg>
    ),
  },
  {
    id: "dog",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="#90CAF9" d="M52 22c0-6-6-10-12-8-2-4-8-6-12-6s-10 2-12 6c-6-2-12 2-12 8v10c0 8 6 14 14 14h20c8 0 14-6 14-14V22z"/>
        <circle fill="#E3F2FD" cx="22" cy="28" r="3"/>
        <circle fill="#E3F2FD" cx="42" cy="28" r="3"/>
      </svg>
    ),
  },
  {
    id: "leaf",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="#A5D6A7" d="M8 56c16-8 28-24 44-40 0 16-8 32-24 44C24 68 12 64 8 56z"/>
        <path fill="#66BB6A" d="M12 52c12-6 22-18 32-30 0 12-6 24-18 34C24 64 16 60 12 52z"/>
      </svg>
    ),
  },
  {
    id: "bird",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="#CE93D8" d="M58 24c-8 0-14 6-20 6-6 0-10-6-16-6-6 0-10 4-12 8 6 2 10 6 18 6 8 0 12-6 18-6 6 0 10 6 12 6 0-8 0-14 0-20z"/>
        <circle fill="#F3E5F5" cx="44" cy="26" r="3"/>
      </svg>
    ),
  },
  {
    id: "fish",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4FC3F7" d="M2 32c12-10 28-14 44-10 0 0 8-6 12-6-2 6 2 14-4 20s-10 8-20 8C18 44 6 40 2 32z"/>
        <circle fill="#E1F5FE" cx="34" cy="28" r="3"/>
      </svg>
    ),
  },
  {
    id: "flower",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <circle fill="#FFCDD2" cx="32" cy="20" r="6"/>
        <path fill="#F8BBD0" d="M32 6c-6 6-6 14 0 20 6-6 14-6 20 0 0-6-6-14-12-18C42 6 36 6 32 6z"/>
        <path fill="#FF8A65" d="M26 38c4 6 10 10 16 0-6-4-12-4-16 0z"/>
      </svg>
    ),
  },
  {
    id: "tree",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="#81C784" d="M32 6c-10 0-18 8-18 18 0 4 2 8 6 10 2 6 8 12 12 12s10-6 12-12c4-2 6-6 6-10 0-10-8-18-18-18z"/>
        <rect fill="#6D4C41" x="28" y="36" width="8" height="18" rx="2"/>
      </svg>
    ),
  },
  {
    id: "butterfly",
    svg: (
      <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F48FB1" d="M10 30c8-8 18-8 26 0-8 8-8 18 0 26-8-8-18-8-26 0 0-8 0-18 0-26z"/>
        <path fill="#FCE4EC" d="M36 30c8-8 18-8 26 0-8 8-8 18 0 26-8-8-18-8-26 0 0-8 0-18 0-26z"/>
      </svg>
    ),
  },
];

export default ICONS;
