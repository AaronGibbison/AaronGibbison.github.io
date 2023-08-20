const decoder = new TextDecoder("utf-8");
export const CvCss = decoder.decode(Deno.readFileSync("./src/cv/cv.css"));
