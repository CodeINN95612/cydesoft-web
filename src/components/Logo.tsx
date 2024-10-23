import { useCustomDarkMode } from "../hooks/useCustomDarkMode";

export function Logo({ className }: { className?: string }) {
  const { isDark } = useCustomDarkMode();

  if (isDark) {
    return (
      <svg
        viewBox="0 0 586 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M55 125.8a56.9 56.9 0 0 1-19.7-3.34 47.35 47.35 0 0 1-15.62-9.72A45.67 45.67 0 0 1 9.44 98.02 46.87 46.87 0 0 1 5.73 79.2a45.96 45.96 0 0 1 13.95-33.54 45.69 45.69 0 0 1 15.62-9.6A55 55 0 0 1 55 32.61c8.28 0 15.67 1.45 22.15 4.35A42.6 42.6 0 0 1 93.53 49.5L77.41 64.1a31.5 31.5 0 0 0-9.6-7.81 24.4 24.4 0 0 0-11.52-2.69c-3.67 0-7.04.6-10.12 1.8a21.88 21.88 0 0 0-7.93 5.24 25.07 25.07 0 0 0-5.12 8.06 29.45 29.45 0 0 0-1.8 10.5c0 3.84.6 7.34 1.8 10.5a26.66 26.66 0 0 0 5.12 8.19 22.72 22.72 0 0 0 7.93 5.12c3.08 1.2 6.45 1.79 10.12 1.79 4.26 0 8.1-.9 11.52-2.69 3.5-1.79 6.7-4.4 9.6-7.8l16.13 14.59a44.33 44.33 0 0 1-16.39 12.54c-6.48 2.9-13.87 4.35-22.14 4.35Zm48.68-1.8V54.62H128V124h-24.32Zm12.16-77.06c-4.43 0-8.02-1.23-10.75-3.7a11.93 11.93 0 0 1-4.1-9.22c0-3.67 1.37-6.75 4.1-9.22 2.73-2.47 6.32-3.71 10.75-3.71 4.44 0 8.02 1.2 10.75 3.58 2.74 2.3 4.1 5.3 4.1 8.96 0 3.84-1.36 7.04-4.1 9.6-2.64 2.48-6.22 3.71-10.75 3.71Zm58.18 78.21a34.89 34.89 0 0 1-17.28-4.35 33.64 33.64 0 0 1-12.3-12.42c-3.06-5.37-4.6-11.77-4.6-19.2 0-7.33 1.54-13.65 4.6-18.94a32.42 32.42 0 0 1 12.3-12.42 34.89 34.89 0 0 1 17.28-4.35c5.97 0 11 1.28 15.1 3.84 4.18 2.56 7.34 6.49 9.47 11.78 2.13 5.29 3.2 11.99 3.2 20.1 0 8.27-1.02 15.06-3.07 20.35-2.05 5.29-5.12 9.21-9.22 11.77-4.1 2.56-9.25 3.84-15.48 3.84Zm5.12-19.33c2.73 0 5.16-.64 7.3-1.92a13.43 13.43 0 0 0 5.24-5.63 20.1 20.1 0 0 0 1.92-9.09c0-3.5-.64-6.44-1.92-8.83a13.43 13.43 0 0 0-5.25-5.63 13.9 13.9 0 0 0-7.3-1.92c-2.81 0-5.33.64-7.55 1.92a13.72 13.72 0 0 0-5.12 5.63c-1.28 2.4-1.92 5.34-1.92 8.83 0 3.5.64 6.53 1.92 9.1a13.71 13.71 0 0 0 5.12 5.62 14.84 14.84 0 0 0 7.56 1.92ZM194.37 124v-11.9l.13-22.92-1.28-22.9V29.01h24.32V124h-23.17Zm75.17 1.15c-8.2 0-15.37-1.53-21.5-4.6a36.28 36.28 0 0 1-14.22-12.8c-3.32-5.47-4.99-11.65-4.99-18.57 0-6.9 1.62-13.05 4.86-18.43a33.84 33.84 0 0 1 13.7-12.67c5.8-3.07 12.33-4.6 19.59-4.6a41.2 41.2 0 0 1 18.68 4.22 31.88 31.88 0 0 1 13.44 12.16c3.33 5.37 5 11.9 5 19.58 0 .85-.05 1.83-.13 2.94-.09 1.11-.17 2.14-.26 3.08H248.8v-12.8h41.98l-9.21 3.58c.08-3.16-.51-5.89-1.8-8.2-1.19-2.3-2.9-4.09-5.12-5.37a14.4 14.4 0 0 0-7.55-1.92c-2.9 0-5.46.64-7.68 1.92a13.05 13.05 0 0 0-4.99 5.5c-1.2 2.31-1.8 5.04-1.8 8.2v3.71c0 3.41.7 6.36 2.06 8.83 1.45 2.48 3.5 4.4 6.14 5.76 2.65 1.28 5.8 1.92 9.47 1.92 3.42 0 6.32-.47 8.7-1.4a27.35 27.35 0 0 0 7.3-4.61l12.8 13.3a32.99 32.99 0 0 1-12.29 8.46c-4.86 1.87-10.62 2.81-17.27 2.81Z"
          fill="#F0F0F0"
        />
        <path
          d="M348.57 125.8c-7.34 0-14.42-.9-21.25-2.7-6.74-1.87-12.24-4.26-16.5-7.16l8.31-18.7a60.8 60.8 0 0 0 13.83 6.4 53.53 53.53 0 0 0 15.74 2.44c3.5 0 6.32-.3 8.45-.9 2.13-.68 3.67-1.53 4.6-2.56a5.5 5.5 0 0 0 1.54-3.84c0-2.04-.94-3.67-2.81-4.86a25.42 25.42 0 0 0-7.3-2.94 227.7 227.7 0 0 0-9.98-2.3c-3.59-.78-7.21-1.76-10.88-2.95a45.44 45.44 0 0 1-9.86-4.61 23.72 23.72 0 0 1-7.3-7.55c-1.87-3.16-2.81-7.13-2.81-11.9 0-5.38 1.45-10.25 4.35-14.6 2.99-4.35 7.43-7.85 13.31-10.5 5.9-2.64 13.23-3.96 22.02-3.96 5.89 0 11.65.68 17.28 2.05a53.82 53.82 0 0 1 15.23 5.76l-7.8 18.81a58.05 58.05 0 0 0-12.68-5.12 44.18 44.18 0 0 0-12.16-1.79c-3.5 0-6.31.38-8.45 1.15-2.13.68-3.67 1.62-4.6 2.82a6.45 6.45 0 0 0-1.41 4.1c0 1.96.9 3.54 2.69 4.73 1.87 1.1 4.3 2.05 7.3 2.82 3.06.68 6.4 1.4 9.97 2.17 3.67.77 7.3 1.75 10.89 2.95 3.66 1.1 7 2.64 9.98 4.6a21 21 0 0 1 7.17 7.56c1.87 3.07 2.81 6.95 2.81 11.64 0 5.2-1.49 10.03-4.48 14.47-2.9 4.35-7.3 7.85-13.18 10.5-5.8 2.64-13.14 3.96-22.02 3.96Zm85.05-.65c-7.6 0-14.33-1.53-20.22-4.6a35.77 35.77 0 0 1-13.95-12.68c-3.33-5.46-5-11.69-5-18.69 0-7 1.67-13.18 5-18.56a34.83 34.83 0 0 1 13.95-12.54c5.89-3.07 12.63-4.6 20.22-4.6 7.6 0 14.34 1.53 20.23 4.6a33.76 33.76 0 0 1 13.95 12.54c3.33 5.38 5 11.57 5 18.56 0 7-1.67 13.23-5 18.7a34.63 34.63 0 0 1-13.95 12.66c-5.89 3.08-12.63 4.61-20.23 4.61Zm0-19.33c2.82 0 5.3-.64 7.43-1.92a13.43 13.43 0 0 0 5.25-5.63 20.1 20.1 0 0 0 1.92-9.09c0-3.5-.64-6.44-1.92-8.83a13.43 13.43 0 0 0-5.25-5.63 14.15 14.15 0 0 0-7.43-1.92c-2.73 0-5.2.64-7.42 1.92a14.6 14.6 0 0 0-5.25 5.63c-1.28 2.4-1.92 5.34-1.92 8.83 0 3.5.64 6.53 1.92 9.1a14.6 14.6 0 0 0 5.25 5.62 14.59 14.59 0 0 0 7.42 1.92ZM486.87 124V55.4c0-8.37 2.48-15.03 7.43-19.98 5.03-5.03 12.2-7.55 21.5-7.55 2.99 0 5.93.3 8.83.9 2.9.6 5.34 1.5 7.3 2.69l-6.02 17.15a13.96 13.96 0 0 0-3.45-1.41 12.08 12.08 0 0 0-3.84-.64c-2.56 0-4.57.77-6.02 2.3-1.36 1.45-2.05 3.72-2.05 6.79v4.99l.64 10.11V124h-24.32Zm-10.1-48.64V57.18h50.3v18.18h-50.3Zm90.26 49.8c-8.87 0-15.78-2.18-20.73-6.54-4.95-4.43-7.43-11.09-7.43-19.96V39.14h24.32V98.4c0 2.47.69 4.44 2.05 5.89a7.1 7.1 0 0 0 5.25 2.05c2.9 0 5.38-.73 7.42-2.18l6.02 17.02a20.86 20.86 0 0 1-7.55 2.95 41.8 41.8 0 0 1-9.35 1.02Zm-38.27-49.8V57.18h50.3v18.18h-50.3Z"
          fill="#3867CC"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 586 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M55 125.8a56.9 56.9 0 0 1-19.7-3.34 47.35 47.35 0 0 1-15.62-9.72A45.67 45.67 0 0 1 9.44 98.02 46.87 46.87 0 0 1 5.73 79.2a45.96 45.96 0 0 1 13.95-33.54 45.69 45.69 0 0 1 15.62-9.6A55 55 0 0 1 55 32.61c8.28 0 15.67 1.45 22.15 4.35A42.6 42.6 0 0 1 93.53 49.5L77.41 64.1a31.5 31.5 0 0 0-9.6-7.81 24.4 24.4 0 0 0-11.52-2.69c-3.67 0-7.04.6-10.12 1.8a21.88 21.88 0 0 0-7.93 5.24 25.07 25.07 0 0 0-5.12 8.06 29.45 29.45 0 0 0-1.8 10.5c0 3.84.6 7.34 1.8 10.5a26.66 26.66 0 0 0 5.12 8.19 22.72 22.72 0 0 0 7.93 5.12c3.08 1.2 6.45 1.79 10.12 1.79 4.26 0 8.1-.9 11.52-2.69 3.5-1.79 6.7-4.4 9.6-7.8l16.13 14.59a44.33 44.33 0 0 1-16.39 12.54c-6.48 2.9-13.87 4.35-22.14 4.35Zm48.68-1.8V54.62H128V124h-24.32Zm12.16-77.06c-4.43 0-8.02-1.23-10.75-3.7a11.93 11.93 0 0 1-4.1-9.22c0-3.67 1.37-6.75 4.1-9.22 2.73-2.47 6.32-3.71 10.75-3.71 4.44 0 8.02 1.2 10.75 3.58 2.74 2.3 4.1 5.3 4.1 8.96 0 3.84-1.36 7.04-4.1 9.6-2.64 2.48-6.22 3.71-10.75 3.71Zm58.18 78.21a34.89 34.89 0 0 1-17.28-4.35 33.64 33.64 0 0 1-12.3-12.42c-3.06-5.37-4.6-11.77-4.6-19.2 0-7.33 1.54-13.65 4.6-18.94a32.42 32.42 0 0 1 12.3-12.42 34.89 34.89 0 0 1 17.28-4.35c5.97 0 11 1.28 15.1 3.84 4.18 2.56 7.34 6.49 9.47 11.78 2.13 5.29 3.2 11.99 3.2 20.1 0 8.27-1.02 15.06-3.07 20.35-2.05 5.29-5.12 9.21-9.22 11.77-4.1 2.56-9.25 3.84-15.48 3.84Zm5.12-19.33c2.73 0 5.16-.64 7.3-1.92a13.43 13.43 0 0 0 5.24-5.63 20.1 20.1 0 0 0 1.92-9.09c0-3.5-.64-6.44-1.92-8.83a13.43 13.43 0 0 0-5.25-5.63 13.9 13.9 0 0 0-7.3-1.92c-2.81 0-5.33.64-7.55 1.92a13.72 13.72 0 0 0-5.12 5.63c-1.28 2.4-1.92 5.34-1.92 8.83 0 3.5.64 6.53 1.92 9.1a13.71 13.71 0 0 0 5.12 5.62 14.84 14.84 0 0 0 7.56 1.92ZM194.37 124v-11.9l.13-22.92-1.28-22.9V29.01h24.32V124h-23.17Zm75.17 1.15c-8.2 0-15.37-1.53-21.5-4.6a36.28 36.28 0 0 1-14.22-12.8c-3.32-5.47-4.99-11.65-4.99-18.57 0-6.9 1.62-13.05 4.86-18.43a33.84 33.84 0 0 1 13.7-12.67c5.8-3.07 12.33-4.6 19.59-4.6a41.2 41.2 0 0 1 18.68 4.22 31.88 31.88 0 0 1 13.44 12.16c3.33 5.37 5 11.9 5 19.58 0 .85-.05 1.83-.13 2.94-.09 1.11-.17 2.14-.26 3.08H248.8v-12.8h41.98l-9.21 3.58c.08-3.16-.51-5.89-1.8-8.2-1.19-2.3-2.9-4.09-5.12-5.37a14.4 14.4 0 0 0-7.55-1.92c-2.9 0-5.46.64-7.68 1.92a13.05 13.05 0 0 0-4.99 5.5c-1.2 2.31-1.8 5.04-1.8 8.2v3.71c0 3.41.7 6.36 2.06 8.83 1.45 2.48 3.5 4.4 6.14 5.76 2.65 1.28 5.8 1.92 9.47 1.92 3.42 0 6.32-.47 8.7-1.4a27.35 27.35 0 0 0 7.3-4.61l12.8 13.3a32.99 32.99 0 0 1-12.29 8.46c-4.86 1.87-10.62 2.81-17.27 2.81Z"
        fill="#0F0F0F"
      />
      <path
        d="M348.57 125.8c-7.34 0-14.42-.9-21.25-2.7-6.74-1.87-12.24-4.26-16.5-7.16l8.31-18.7a60.8 60.8 0 0 0 13.83 6.4 53.53 53.53 0 0 0 15.74 2.44c3.5 0 6.32-.3 8.45-.9 2.13-.68 3.67-1.53 4.6-2.56a5.5 5.5 0 0 0 1.54-3.84c0-2.04-.94-3.67-2.81-4.86a25.42 25.42 0 0 0-7.3-2.94 227.7 227.7 0 0 0-9.98-2.3c-3.59-.78-7.21-1.76-10.88-2.95a45.44 45.44 0 0 1-9.86-4.61 23.72 23.72 0 0 1-7.3-7.55c-1.87-3.16-2.81-7.13-2.81-11.9 0-5.38 1.45-10.25 4.35-14.6 2.99-4.35 7.43-7.85 13.31-10.5 5.9-2.64 13.23-3.96 22.02-3.96 5.89 0 11.65.68 17.28 2.05a53.82 53.82 0 0 1 15.23 5.76l-7.8 18.81a58.05 58.05 0 0 0-12.68-5.12 44.18 44.18 0 0 0-12.16-1.79c-3.5 0-6.31.38-8.45 1.15-2.13.68-3.67 1.62-4.6 2.82a6.45 6.45 0 0 0-1.41 4.1c0 1.96.9 3.54 2.69 4.73 1.87 1.1 4.3 2.05 7.3 2.82 3.06.68 6.4 1.4 9.97 2.17 3.67.77 7.3 1.75 10.89 2.95 3.66 1.1 7 2.64 9.98 4.6a21 21 0 0 1 7.17 7.56c1.87 3.07 2.81 6.95 2.81 11.64 0 5.2-1.49 10.03-4.48 14.47-2.9 4.35-7.3 7.85-13.18 10.5-5.8 2.64-13.14 3.96-22.02 3.96Zm85.05-.65c-7.6 0-14.33-1.53-20.22-4.6a35.77 35.77 0 0 1-13.95-12.68c-3.33-5.46-5-11.69-5-18.69 0-7 1.67-13.18 5-18.56a34.83 34.83 0 0 1 13.95-12.54c5.89-3.07 12.63-4.6 20.22-4.6 7.6 0 14.34 1.53 20.23 4.6a33.76 33.76 0 0 1 13.95 12.54c3.33 5.38 5 11.57 5 18.56 0 7-1.67 13.23-5 18.7a34.63 34.63 0 0 1-13.95 12.66c-5.89 3.08-12.63 4.61-20.23 4.61Zm0-19.33c2.82 0 5.3-.64 7.43-1.92a13.43 13.43 0 0 0 5.25-5.63 20.1 20.1 0 0 0 1.92-9.09c0-3.5-.64-6.44-1.92-8.83a13.43 13.43 0 0 0-5.25-5.63 14.15 14.15 0 0 0-7.43-1.92c-2.73 0-5.2.64-7.42 1.92a14.6 14.6 0 0 0-5.25 5.63c-1.28 2.4-1.92 5.34-1.92 8.83 0 3.5.64 6.53 1.92 9.1a14.6 14.6 0 0 0 5.25 5.62 14.59 14.59 0 0 0 7.42 1.92ZM486.87 124V55.4c0-8.37 2.48-15.03 7.43-19.98 5.03-5.03 12.2-7.55 21.5-7.55 2.99 0 5.93.3 8.83.9 2.9.6 5.34 1.5 7.3 2.69l-6.02 17.15a13.96 13.96 0 0 0-3.45-1.41 12.08 12.08 0 0 0-3.84-.64c-2.56 0-4.57.77-6.02 2.3-1.36 1.45-2.05 3.72-2.05 6.79v4.99l.64 10.11V124h-24.32Zm-10.1-48.64V57.18h50.3v18.18h-50.3Zm90.26 49.8c-8.87 0-15.78-2.18-20.73-6.54-4.95-4.43-7.43-11.09-7.43-19.96V39.14h24.32V98.4c0 2.47.69 4.44 2.05 5.89a7.1 7.1 0 0 0 5.25 2.05c2.9 0 5.38-.73 7.42-2.18l6.02 17.02a20.86 20.86 0 0 1-7.55 2.95 41.8 41.8 0 0 1-9.35 1.02Zm-38.27-49.8V57.18h50.3v18.18h-50.3Z"
        fill="#274A96"
      />
    </svg>
  );
}
