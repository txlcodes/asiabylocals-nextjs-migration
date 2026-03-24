import { v2 as cloudinary } from 'cloudinary';
import { writeFileSync } from 'fs';

cloudinary.config({
  cloud_name: 'dx2fxyaft',
  api_key: '661233678661536',
  api_secret: 'PEePosrZMLygFivk04VKF7BcaeA'
});

const images = [
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/678e3a3cb314bf8c73e194141ac74616b86fc82a013d4070a6cf5ca176be44ff.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/f042e8f5063613a9efc9f74557bae5241ce0e4946734eb2d03f1c8487d746eea.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/12436f87a6368d1b7cc714194d93de97817da5c9a91d508c2f8d815823d6ff12.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/8f9b60f64719b30f1f694f087c51dafb2cd02dde25de93889aee110a5e7ddc9c.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/4c1a680562327bb654906211b2966f42a40f7d34eb4c7321c49601fb8c15274c.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/5f26fccfc15563579b6d4ad8e20828a396abb1435c01da6b738a80624e28da4b.jpg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/a9c16484bb7c360a.jpeg",
  "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/d4d5dac7f6741de1.jpeg"
];

// 2nd image as cover
const ordered = [images[1], images[0], ...images.slice(2)];

const urls = [];
for (let i = 0; i < ordered.length; i++) {
  try {
    const result = await cloudinary.uploader.upload(ordered[i], {
      folder: 'tours/bangkok',
      public_id: `ayutthaya_${i + 1}_${Date.now()}`,
      overwrite: true
    });
    urls.push(result.secure_url);
    console.log(`✅ ${i + 1}/${ordered.length}: ${result.secure_url}`);
  } catch (e) {
    console.error(`❌ ${i + 1} failed:`, e.message);
  }
}

writeFileSync('/Users/talhanawaz/Desktop/asiabylocals-latest/ayutthaya_cloudinary_urls.json', JSON.stringify(urls, null, 2));
console.log('\nDone!');
console.log(JSON.stringify(urls, null, 2));
