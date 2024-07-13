import { Repository } from "typeorm";
import { URL } from "../models/URL";
import randomString from "randomString";
import { AppDataSource } from "../db/data-source";
import { checkDuration, checkLink } from "../utils/index";

class URLService {
  private repository: Repository<URL>;

  constructor() {
    this.repository = AppDataSource.getRepository(URL);
  }

  async createLink(longUrl: string): Promise<URL> {
    if (!longUrl) throw new Error("Long URL is required");

    const isValid = await checkLink(longUrl);
    if (!isValid) throw new Error("This url is invalid");

    try {
      let shortUrl = randomString.generate(5);
      const existingUrl = await this.repository.findOne({ where: { longUrl } });

      const duration = new Date();
      duration.setMinutes(duration.getMinutes() + 10);

      if (existingUrl) {
        existingUrl.duration = duration;
        existingUrl.clicks++;
        return this.repository.save(existingUrl);
      } else {
        const newUrl = this.repository.create({
          longUrl,
          shortUrl,
          duration,
          clicks: 1,
        });
        return this.repository.save(newUrl);
      }
    } catch (error) {
      console.error("Error creating link:", error);
      throw new Error("Unable to create link");
    }
  }

  async getLink(shortUrl: string): Promise<string> {
    if (!shortUrl) throw new Error("Short URL is required");

    try {
      const url = await this.repository.findOne({ where: { shortUrl } });
      if (url && checkDuration(url.duration)) {
        return url.longUrl;
      }
      return "https://google.com";
    } catch (error) {
      console.error("Error finding link:", error);
      throw new Error("Unable to find link");
    }
  }
}

export default new URLService();
