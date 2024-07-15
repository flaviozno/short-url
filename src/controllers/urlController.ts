import { Request, Response } from "express";
import URLService from "../services/urlService";

class UrlController {
  createUrl = async (req: Request, res: Response): Promise<void> => {
    const query = req.body.url as string;
    try {
      const url = await URLService.createLink(query);
      res.status(200).json({
        url: `${process.env.BACKEND_URL}/${url.shortUrl}`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating URL" });
    }
  };

  getFullUrl = async (req: Request, res: Response): Promise<void> => {
    const shortUrl = req.params[0] as string;
    if (shortUrl) {
      try {
        const url = await URLService.getLink(shortUrl);
        res.redirect(url);
      } catch (error) {
        console.error(error);
        res.status(404).json({ message: "URL not found" });
      }
    } else {
      res.status(400).json({ message: "Bad Request: shortUrl is required" });
    }
  };
}

export default new UrlController();
