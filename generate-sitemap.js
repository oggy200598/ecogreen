import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/gioi-thieu", changefreq: "monthly", priority: 0.8 },
  { url: "/san-pham", changefreq: "weekly", priority: 0.9 },
  { url: "/tu-van-thiet-ke", changefreq: "monthly", priority: 0.7 },
  { url: "/thu-vien", changefreq: "monthly", priority: 0.7 },
  { url: "/tuyen-dung", changefreq: "monthly", priority: 0.6 },
  { url: "/tin-tuc", changefreq: "weekly", priority: 0.8 },
  { url: "/lien-he", changefreq: "monthly", priority: 0.6 },
];

const stream = new SitemapStream({ hostname: "https://ecogreenpackaging.vercel.app" });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ sitemap.xml đã được tạo trong thư mục public/");
});
