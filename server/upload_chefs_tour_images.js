const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dx2fxyaft',
  api_key: '661233678661536',
  api_secret: 'PEePosrZMLygFivk04VKF7BcaeA'
});

const images = [
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/636abf99bebae.jpeg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/636abfa1aa4a4.jpeg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/636abfac5eac7.jpeg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/636abfa41410f.jpeg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/636abfa3ccb8a.jpeg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/8e0ff6f314c747eee30fd374f545432cb9607f7636b73bf7f2c16f55233bb250.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/0c3e7057bddee7fed1d990e161b977e36074cd453e6a6f64da7ce77da81db816.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/423d0df8eeb6955688c035da4666b465436c3d0bb081369a197f892a00677cd9.jpg"
];

// Use 2nd image as cover (index 1 first, then rest)
const ordered = [images[1], images[0], ...images.slice(2)];

async function upload() {
  const urls = [];
  for (let i = 0; i < ordered.length; i++) {
    try {
      const result = await cloudinary.uploader.upload(ordered[i], {
        folder: 'tours/bangkok',
        public_id: `chefs_tour_${i + 1}_${Date.now()}`,
        overwrite: true
      });
      urls.push(result.secure_url);
      console.log(`✅ ${i + 1}/${ordered.length}: ${result.secure_url}`);
    } catch (e) {
      console.error(`❌ ${i + 1} failed:`, e.message);
    }
  }
  const fs = require('fs');
  fs.writeFileSync('chefs_tour_cloudinary_urls.json', JSON.stringify(urls, null, 2));
  console.log('\nAll URLs saved to chefs_tour_cloudinary_urls.json');
  console.log(JSON.stringify(urls, null, 2));
}

upload();
