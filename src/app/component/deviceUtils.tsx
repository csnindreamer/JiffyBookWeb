export function isAppleDevice() {
    if (typeof window !== 'undefined') {
      const platform = window.navigator.platform;
      return /iPhone|iPod|iPad|Mac/.test(platform);
    }
    return false; // Fallback value if window is not defined
  }
  