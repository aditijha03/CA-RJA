import axios from 'axios';
import * as cheerio from 'cheerio';

const fetchAndParse = async (url, idPrefix) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      },
      timeout: 10000 // Prevents hanging if the site is slow
    });

    const $ = cheerio.load(data);
    const items = [];

    $('.list-group .list-group-item').each((index, element) => {
      const linkElement = $(element).find('a');
      const textContent = linkElement.text().trim();
      const href = linkElement.attr('href') || '';
      
      let title = textContent;
      let date = new Date().toLocaleDateString();
      
      // Extract the date at the end, e.g. "- (09-07-2026)"
      const dateMatch = textContent.match(/-\s*\(([\d]{2}-[\d]{2}-[\d]{4})\)$/);
      if (dateMatch) {
          const rawDate = dateMatch[1]; // DD-MM-YYYY
          const parts = rawDate.split('-');
          date = `${parts[2]}-${parts[1]}-${parts[0]}`; // YYYY-MM-DD
          title = textContent.replace(dateMatch[0], '').trim();
      }

      const isNew = $(element).find('img[src*="new"]').length > 0 || $(element).text().toLowerCase().includes('new');

      if (title && href) {
        const fullHref = href.startsWith('http') ? href : `https://www.icai.org${href.startsWith('/') ? href : '/' + href}`;
        
        const prefix = idPrefix === 'announcement' ? 'Announcement: ' : 'Notification: ';
        
        items.push({
          id: `${idPrefix}-${index}`,
          title: `${prefix}${title}`,
          date: date,
          href: fullHref,
          isNew: isNew
        });
      }
    });
    return items;
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return []; // Return empty array on failure so the other feed still works
  }
};

export default async function handler(req, res) {
  try {
    const announcementsUrl = 'https://www.icai.org/category/announcements';
    const notificationsUrl = 'https://www.icai.org/category/notifications';

    // Fetch both simultaneously to save time
    const [announcements, notifications] = await Promise.all([
      fetchAndParse(announcementsUrl, 'announcement'),
      fetchAndParse(notificationsUrl, 'notification')
    ]);

    // Interleave them so the ticker shows a mix of both types
    const merged = [];
    const maxLen = Math.max(announcements.length, notifications.length);
    for (let i = 0; i < maxLen; i++) {
        if (i < announcements.length) merged.push(announcements[i]);
        if (i < notifications.length) merged.push(notifications[i]);
    }

    res.status(200).json(merged);
  } catch (error) {
    console.error('Error in /api/notifications:', error.message);
    res.status(500).json({ error: 'Failed to fetch updates' });
  }
}
