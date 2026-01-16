export {};

declare global {
  interface RequestInit {
    _retry?: boolean;
  }
}
