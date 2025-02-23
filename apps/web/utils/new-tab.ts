/** 새로운 탭에 페이지 열어준다. */
export const openNewTab = (url: string) => {
  if (typeof window !== 'undefined' && window?.open) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
