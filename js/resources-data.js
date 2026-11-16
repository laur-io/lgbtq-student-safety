// EDIT THIS FILE to add resources. One object per resource; the page renders the cards.
// category must be one of the keys in CATEGORIES below.
// Do NOT fill in phone numbers/links from memory: copy them from each official page,
// then set verified: true and update LAST_UPDATED.
const LAST_UPDATED = "TODO: add date";

const CATEGORIES = {
  emergency: "Emergency help",
  confidential: "Confidential support",
  nonconfidential: "Non-confidential support",
  lgbtq: "LGBTQ+ community support",
  reporting: "Reporting options",
  offcampus: "Off-campus resources",
  peer: "Peer and community support"
};

const RESOURCES = [
  {
    name: "Emergency services (911)",
    category: "emergency",
    provides: "Immediate police, fire, and medical response.",
    bestFor: "Anyone in immediate danger or needing urgent medical help.",
    confidential: false,
    contact: "911",
    link: "",
    know: "TODO: note that calling 911 involves police, which some students may not feel safe with.",
    verified: false
  },
  {
    name: "PRIDE Center (verify exact name)",
    category: "lgbtq",
    provides: "LGBTQ+ community support, education, and student connection.",
    bestFor: "Students looking for LGBTQ+ support or campus community.",
    confidential: null, // true / false / null = unknown, verify
    contact: "TODO",
    link: "",
    know: "Ask what information is private and whether contacting them creates a formal report.",
    verified: false
  },
  {
    name: "Title IX office (verify exact name)",
    category: "reporting",
    provides: "Handles reports of sexual harassment and sex-based discrimination.",
    bestFor: "Students who want to understand or start a formal process.",
    confidential: false,
    contact: "TODO",
    link: "",
    know: "TODO: ask what happens after contact and whether you can ask questions without filing.",
    verified: false
  },
  {
    name: "Counseling services (verify exact name)",
    category: "confidential",
    provides: "TODO",
    bestFor: "TODO",
    confidential: true,
    contact: "TODO",
    link: "",
    know: "TODO: confirm the limits of confidentiality.",
    verified: false
  }
];
