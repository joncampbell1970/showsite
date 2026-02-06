import type { BookingSubmission, EnquirySubmission, QuoteSubmission } from "@/types/demo";

const quoteSubmissions: QuoteSubmission[] = [];
const bookingSubmissions: BookingSubmission[] = [];
const enquirySubmissions: EnquirySubmission[] = [];

export function addQuoteSubmission(submission: QuoteSubmission) {
  quoteSubmissions.unshift(submission);
}

export function addBookingSubmission(submission: BookingSubmission) {
  bookingSubmissions.unshift(submission);
}

export function addEnquirySubmission(submission: EnquirySubmission) {
  enquirySubmissions.unshift(submission);
}

export function getAdminData() {
  return {
    quotes: quoteSubmissions,
    bookings: bookingSubmissions,
    enquiries: enquirySubmissions,
  };
}
