/**
 * 构造指定资源的URL地址
 * @param imageUrl - 资源文件名
 * @returns 生成的完整URL地址
 */
export const getAssetsFile = (imageUrl: string) => {
  let url = new URL(`../assets/${imageUrl}`, import.meta.url).href;
  console.log("url", imageUrl, url, import.meta.url);

  return url;
};
