import { getDB } from '../db/index.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ObjectId } from 'mongodb';

let chats;
let contracts;
let listings;

const initListings = async () => {
  const db = await getDB();
  listings = db.collection('listings');
};

const initchats = async () => {
    const db = await getDB();
    chats = db.collection('negotiation');
};

const initContracts = async () => {
    const db = await getDB();
    contracts = db.collection('contract');
};

export const getChats = asyncHandler(async (req, res, next) => {
    await initchats();
    const { email } = req.body;

    const data = await chats.find({ $or: [{ femail: email }, { bemail: email }] }).toArray();

    if (data.length === 0) {
        res.status(204).json({ message: "No chats found for the user" });
    } else {
        res.status(200).json(data);
    }
});

export const bmes = asyncHandler(async (req, res, next) => {
    await initchats();
    const { chatId, message, bemail } = req.body;

    if(!chatId || !message || !bemail){
        return res.status(400).json({ error: 'All fields are required.' });
    }
    const mes = {
        sender: bemail,
        price: parseInt(message),
        timestamp: new Date()
    };

    const result = await chats.updateOne(
        { _id: new ObjectId(chatId) }, { $push: { messages: mes }, $set: { bagree: true, fagree: false } } 
    );

    if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Chat not found.' });
    }

    res.status(200).json({message: 'Message sent successfully.'});
});

export const fmes = asyncHandler(async (req, res, next) => {
    await initchats();
    const { chatId, message, femail } = req.body;

    if(!chatId || !message || !femail){
        return res.status(400).json({ error: 'All fields are required.' });
    }
    const mes = {
        sender: femail,
        price: parseInt(message),
        timestamp: new Date()
    };

    const result = await chats.updateOne(
        { _id: new ObjectId(chatId) }, { $push: { messages: mes }, $set: { bagree: false, fagree: true } } 
    );

    if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Chat not found.' });
    }

    res.status(200).json({message: 'Message sent successfully.'});
});

export const fagree = asyncHandler(async (req, res, next) => {
    await initListings();
    await initchats();
    await initContracts();

    const { chatId } = req.body;

    if(!chatId){
        return res.status(400).json({ error: 'Chat ID is required.' });
    }
    const data = await chats.findOne({ _id: new ObjectId(chatId) });
    if(data === null){
        return res.status(404).json({ message: 'Chat not found.' });
    }

    if(data.fagree === true){
        return res.status(400).json({ message: 'You should not be here' });
    }

    const result = await chats.updateOne({ _id: new ObjectId(chatId) }, { $set: { fagree: true } });

    if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Chat not found.' });
    }
    const crop = await listings.findOne({ _id: new ObjectId(data.cropId) });

    const pipeline = [
        { $match: { _id: new ObjectId(chatId) } },
        {
            $project: {
                _id: 0,
                lastMessage: { $arrayElemAt: ['$messages', -1] }
            }
        }
    ];

    const reslt = await chats.aggregate(pipeline).toArray();

    const contract = {
        cropId: new ObjectId(data.cropId),
        femail: data.femail,
        bemail: data.bemail,
        price: reslt[0].lastMessage.price,
        status: 'Ongoing',
        startDate: new Date(),
        endDate: crop.endDate,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    
    const con = await contracts.insertOne(contract);

    res.status(200).json({message: 'Agreement sent successfully.'});
});


export const bagree = asyncHandler(async (req, res, next) => {
    await initListings();
    await initchats();
    await initContracts();

    const { chatId } = req.body;

    if(!chatId){
        return res.status(400).json({ error: 'Chat ID is required.' });
    }
    const data = await chats.findOne({ _id: new ObjectId(chatId) });
    if(data === null){
        return res.status(404).json({ message: 'Chat not found.' });
    }

    if(data.bagree === true){
        return res.status(400).json({ message: 'You should not be here' });
    }

    const result = await chats.updateOne({ _id: new ObjectId(chatId) }, { $set: { bagree: true } });

    if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Chat not found.' });
    }
    const crop = await listings.findOne({ _id: new ObjectId(data.cropId) });

    const pipeline = [
        { $match: { _id: new ObjectId(chatId) } },
        {
            $project: {
                _id: 0,
                lastMessage: { $arrayElemAt: ['$messages', -1] }
            }
        }
    ];

    const reslt = await chats.aggregate(pipeline).toArray();

    const contract = {
        cropId: new ObjectId(data.cropId),
        femail: data.femail,
        bemail: data.bemail,
        price: reslt[0].lastMessage.price,
        status: 'Ongoing',
        startDate: new Date(),
        endDate: crop.endDate,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    
    const con = await contracts.insertOne(contract);

    res.status(200).json({message: 'Agreement sent successfully.'});
});

export const reject = asyncHandler(async (req, res, next) => {
    await initchats();

    const { chatId } = req.body;

    if(!chatId){
        return res.status(400).json({ error: 'Chat ID is required.' });
    }

    const result = await chats.updateOne(
        { _id: new ObjectId(chatId) }, { $set: { bagree: false, fagree: false } } 
    );

    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Chat not found.' });
    }

    res.status(200).json({message: 'Chat deleted successfully.'});
});