export {};

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void;
      };
    };
  }
}
