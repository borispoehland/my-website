export const getBottomOfElementRelativeToViewport = ($el: JQuery): number => {
  const bottomOfEl = ($el.offset()?.top as number) + ($el.height() as number);
  const viewportPosition = $(window).scrollTop() as number;
  return bottomOfEl - viewportPosition;
};
