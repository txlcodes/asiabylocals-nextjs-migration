import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ cloud_name: 'dx2fxyaft', api_key: '661233678661536', api_secret: 'PEePosrZMLygFivk04VKF7BcaeA' });
const url = 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=85,width=1200,height=800/tour_img/f042e8f5063613a9efc9f74557bae5241ce0e4946734eb2d03f1c8487d746eea.jpg';
try {
  const r = await cloudinary.uploader.upload(url, { folder: 'tours/bangkok', public_id: 'ayutthaya_cover_' + Date.now() });
  console.log('✅', r.secure_url);
} catch(e) { console.error('❌', e.message); }
