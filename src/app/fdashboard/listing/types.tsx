export interface Bid {
    cropPrice: string;
    bmobile: string;
    buyerName: string;
    status: 'pending' | 'rejected' | 'accepted' | 'negotiating';
    bemail: string;
  }
  
  export interface Listing {
    _id: string;
    croptype: string;
    quantity: string;
    croppingtime: string;
    harvestingtime: string;
    price: string;
    fcity: string;
    fpincode: string;
    fstate: string;
    femail: string;
    bids: Bid[];
  }
  
  export const mockListings: Listing[] = [
    {
      _id: "6759ed42d75aa205dbdb1116",
      croptype: "Wheat",
      quantity: "12345",
      croppingtime: "September",
      harvestingtime: "November",
      price: "123",
      fcity: "Kota",
      fpincode: "123",
      fstate: "Rajasthan",
      femail: "tester23@gmail.com",
      bids: [
        {
          cropPrice: "2600",
          bmobile: "7895462031",
          buyerName: "John Doe",
          status: "pending",
          bemail: "tester24@gmail.com"
        },
        {
          cropPrice: "2700",
          bmobile: "7897862031",
          buyerName: "Jane Doe",
          status: "pending",
          bemail: "tester25@gmail.com"
        }
      ]
    },
    {
      _id: "6759ed42d75aa205dbdb1117",
      croptype: "Rice",
      quantity: "10000",
      croppingtime: "June",
      harvestingtime: "October",
      price: "150",
      fcity: "Jaipur",
      fpincode: "302001",
      fstate: "Rajasthan",
      femail: "tester23@gmail.com",
      bids: [
        {
          cropPrice: "3000",
          bmobile: "9876543210",
          buyerName: "Alice Smith",
          status: "pending",
          bemail: "tester26@gmail.com"
        }
      ]
    }
  ];