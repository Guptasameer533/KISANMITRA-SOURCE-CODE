import { getDB } from '../db/index.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ObjectId } from 'mongodb';
import PDFDocument from 'pdfkit';

let contract;

const initContract = async () => {
  const db = await getDB();
  contract = db.collection('contract');
};

export const viewContracts = asyncHandler(async (req, res, next) => {
    
    await initContract();
    const { email } = req.body;

    const data = await contract.find({ $or: [{ femail: email }, { bemail: email }] }).toArray();

    if (data.length === 0) {
        res.status(204).json({ message: "No listing found for the user" });
    } else {
        res.status(200).json(data);
    }
});

export const getcontract = asyncHandler(async (req, res, next) => {
    
    await initContract();
    const { contractId } = req.body;

    const data = await contract.findOne({ _id: new ObjectId(contractId) });

    if (!data) {
        return res.status(204).json({ message: "No contract found" });
    }
    const doc = new PDFDocument();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=contract_${data._id}.pdf`);
    doc.pipe(res);
    
    doc.fontSize(20).text('Contract Details', { align: 'center' }).moveDown();
    doc.fontSize(14).text(`Contract ID: ${data._id}`);
    doc.text(`Crop Type: ${data.croptype}`);
    doc.text(`Price: ${data.price}`);
    doc.text(`Quantity: ${data.quantity}`);
    doc.text(`Start Date: ${data.startDate}`);
    doc.text(`End Date: ${data.endDate}`);
    doc.text(`Advance Transaction ID: ${data.advancedTransactionId}`);
    doc.text(`Payment Transaction ID: ${data.paymentTrasactionId}`);
    doc.text(`Status: ${data.status}`);
    doc.text(`Buyer Email: ${data.bemail}`);
    doc.text(`Farmer Email: ${data.femail}`);
    doc.text(`Advance Money: ${data.advancemoney}`);
    doc.text(`Created At: ${new Date(data.createdAt)}`);
    
    doc.end();
});
