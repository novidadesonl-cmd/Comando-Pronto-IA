export default function postcss() {
  return { process: async (css) => ({ css }) };
}
