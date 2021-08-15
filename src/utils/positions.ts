const getPositionRelativeToViewport = (position: number): number => {
  const viewportPosition = $(window).scrollTop() as number;
  return position - viewportPosition;
};

export const getBottomOfElementRelativeToViewport = ($el: JQuery): number => {
  const bottomOfEl = ($el.offset()?.top as number) + ($el.height() as number);
  return getPositionRelativeToViewport(bottomOfEl);
};
