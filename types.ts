
export interface PartyDetailsType {
  who: string;
  what: string;
  when: string;
  time: string;
  date: Date;
  location: {
    name: string;
    address: string;
  };
}
