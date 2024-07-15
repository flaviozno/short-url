import http from "http";
import https from "https";

export const checkLink = (url: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (res) => {
        const { statusCode } = res;
        resolve(statusCode === 200 || statusCode === 999);
      })
      .on("error", (err) => {
        reject(false);
      });
  });
};

export const checkDuration = (duration: Date) => {
  const currentTime = new Date();
  const durantion = new Date(duration);
  const tenMinutesLater = new Date(currentTime.getTime() + 10 * 60000);
  return durantion.getTime() <= tenMinutesLater.getTime();
};
