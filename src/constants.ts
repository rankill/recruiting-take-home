export enum Languages {
  English = 'English',
  // Example of a new language Roman = 'Roman',
}

export const LanguagesList = Object.keys(Languages).map(
  (key: string) => Languages[key]
);
