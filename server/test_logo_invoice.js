
import { generateInvoicePDF } from './utils/invoice.js';
import fs from 'fs';

const sampleBooking = {
    id: 999,
    bookingReference: 'TEST-LOGO-2026',
    createdAt: new Date(),
    bookingDate: new Date(),
    numberOfGuests: 2,
    totalAmount: 5000,
    currency: 'INR',
    customerName: 'Test User',
    customerEmail: 'test@example.com',
    customerPhone: '+1234567890',
    tour: {
        title: 'Test Tour with Logo',
        city: 'Agra',
        country: 'India'
    },
    razorpayPaymentId: 'pay_test123',
    razorpayOrderId: 'order_test123'
};

try {
    console.log('Generating PDF with logo...');
    const base64Data = await generateInvoicePDF(sampleBooking);
    // Uncomment to save file and verify manually
    // fs.writeFileSync('test_invoice_with_logo.pdf', Buffer.from(base64Data, 'base64'));
    console.log('✅ PDF generated successfully (Base64 length: ' + base64Data.length + ')');
} catch (error) {
    console.error('❌ Failed to generate PDF:', error);
}
