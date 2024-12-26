import { Schema, model, models } from 'mongoose'

const listingSchema = new Schema(
  {
    croptype: { type: String, required: true },
    quantity: { type: String, required: true },
    croppingtime: { type: String, required: true },
    harvestingtime: { type: String, required: true },
    price: { type: Number, required: true },
    fcity: { type: String, required: true },
    fpincode: { type: String, required: true },
    fstate: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
)

const Listing = models.Listing || model('Listing', listingSchema)

export default Listing
