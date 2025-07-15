import { getDB } from '../db/index.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ObjectId } from 'mongodb';

let listings;

const initListings = async () => {
  const db = await getDB();
  listings = db.collection('listings');
};


export const addNewListing = asyncHandler(async (req, res, next) => {

    await initListings();

    const { croptype, quantity, croppingtime, harvestingtime, endDate, price, fcity, fpincode, fstate, email } = req.body;

    if (!croptype || !quantity || !croppingtime || !harvestingtime || !endDate || !price || !fcity || !fpincode || !fstate || !email) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    const listing = {
        croptype,
        quantity,
        croppingtime,
        harvestingtime,
        endDate,
        price: parseInt(price),
        fcity,
        fpincode,
        fstate,
        email,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    const crop = await listings.insertOne(listing);
    res.status(201).json({ message: "Listing added successfully", data: crop });
});

export const viewListings = asyncHandler(async (req, res, next) => {
    
    await initListings();
    const { email } = req.body;
// console.log(email);
    const data = await listings.find({ email: email }).toArray();

    if (data.length === 0) {
        res.status(204).json({ message: "No listing found for the user" });
    } else {
        res.status(200).json(data);
    }
});

export const deleteListing = asyncHandler(async (req, res, next) => {
    
    await initListings();

    const { email, listingId } = req.body;

    if (!email || !listingId) {
        return res.status(400).json({ error: 'Both email and listing ID are required.' });
    }

    const result = await listings.deleteOne({ email, _id: new ObjectId(listingId) });

    if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'No listing found with the provided email.' });
    }

    res.status(200).json({message: 'Listing deleted successfully.'});
});