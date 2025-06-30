
export interface Person {
  name: string;
  blurb: string;
  website: string;
}

export const people: Person[] = [
  {
    name: "Sam Altman",
    blurb: "Pushes me to swing big on AI and ship before I feel ready.",
    website: "https://blog.samaltman.com/"
  },
  {
    name: "Leo Radvinsky", 
    blurb: "Proves wild creator bets (and relentless curiosity) can outrun pure capital.",
    website: "https://leoradvinsky.com/"
  },
  {
    name: "Pavel Durov",
    blurb: "Shows privacy can scale when you stay outrageously stubborn about principles.", 
    website: "https://t.me/s/durov"
  },
  {
    name: "Vitalik Buterin",
    blurb: "Makes crypto feel scholarly—proof that code and philosophy can co-lead.",
    website: "https://vitalik.eth.limo/"
  }
];
