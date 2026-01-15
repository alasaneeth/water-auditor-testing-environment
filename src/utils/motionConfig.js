export const getMotionProps = (reduce) => ({
  initial: reduce ? false : "hidden",
  whileInView: reduce ? false : "visible",
  viewport: { once: true, margin: "-120px" },
});
