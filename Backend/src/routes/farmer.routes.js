import {Router} from "express"
import { addNewListing, deleteListing, viewListings } from "../controllers/listings.controller.js"
import { getcontract, viewContracts } from "../controllers/contract.controller.js"
import { agreeBid, FviewBids, negotiateBid, rejectBid } from "../controllers/bid.controller.js"
import { fagree, fmes, getChats, reject } from "../controllers/chat.controller.js"

const router = Router()

// /fdashboard
router.route("/listings/addnew").post(addNewListing)                    // add new listing into the marketplace
router.route("/listings/view").post(viewListings)                        // view all the listings done by farmer
router.route("/listings/view/delete").post(deleteListing)             // delete a listing
router.route("/contracts").post(viewContracts)                           // view all the contracts of a farmer
router.route("/contracts/view").post(getcontract)                        // view a particular contract
router.route("/listings/view/bids").post(FviewBids)                      // view bids raised for particular crops
router.route("/listings/view/bids/reject").post(rejectBid)               // reject a bid 
router.route("/listings/view/bids/negotiate").post(negotiateBid)         // bid accepted and start negotiation
router.route("/listings/view/bids/agree").post(agreeBid)                // taking buyer's agreement to contract
router.route("/chats").post(getChats)                                    // view chat history
router.route("/chats/sendmes").post(fmes)                                // send a message
router.route("/chats/agree").post(fagree)                               // taking farmer's agreement to contract
router.route("/chats/reject").post(reject)                               // reject



export default router