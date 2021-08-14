const getPositionRelativeToViewport = (position: number): number => {
  const viewportPosition = $(window).scrollTop() as number;
  return position - viewportPosition;
};

export const getBottomOfElementRelativeToViewport = ($el: JQuery): number => {
  console.log('element top offset: ', $el.offset()?.top);
  console.log('element height: ', $el.height());
  console.log('viewportPosition: ', $(window).scrollTop());
  const bottomOfEl = ($el.offset()?.top as number) + ($el.height() as number);
  return getPositionRelativeToViewport(bottomOfEl);
};
