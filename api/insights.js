import Parser from "rss-parser";

const parser = new Parser();

export default async function handler(req, res) {
  try {
    const feed = await parser.parseURL(
      "https://news.google.com/rss/search?q=GST+India+OR+Income+Tax+India+OR+CBDT+OR+RBI+OR+MCA&hl=en-IN&gl=IN&ceid=IN:en"
    );

    const articles = feed.items.slice(0, 9).map(item => ({
      title: item.title,
      link: item.link,
      date: item.pubDate,
      source: item.source?.title || "Google News",
    }));

    res.status(200).json(articles);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Unable to fetch news",
    });
  }
}