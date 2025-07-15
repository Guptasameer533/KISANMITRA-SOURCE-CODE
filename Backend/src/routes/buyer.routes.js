import {Router} from "express"
import { viewmarket } from "../controllers/marketplace.controller.js"
import { getcontract, viewContracts } from "../controllers/contract.controller.js"
import { BviewBids, raisebid } from "../controllers/bid.controller.js"
import { bagree, bmes, getChats, reject } from "../controllers/chat.controller.js"

const router = Router()


router.route("/marketplace").get(viewmarket)                  // view marketplace
router.route("/contracts").get(viewContracts)                 // view all the contracts of buyer
router.route("/contracts/view").get(getcontract)              // view a particular contract
router.route("/bids/create").post(raisebid)                   // raise a bid
router.route("/bids/view").get(BviewBids)                     // view all bids raised
router.route("/chats").get(getChats)                          // view chat history
router.route("/chats/sendmes").put(bmes)                      // send a message
router.route("/chats/agree").post(bagree)                     // send buyer's agreement for contract
router.route("/chats/reject").put(reject)                     // reject


export default router



// remaining: 
// imp: blockchain integration(aditya)
// also take createdat in bid
// on reject through Chat, update the bid status to rejected
// on agree, update the bid status to accepted and remove the listing from marketplace
// add functionality for farmer to edit listing