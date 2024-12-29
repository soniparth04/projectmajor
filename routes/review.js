const express  = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewConroller = require("../controllers/reviews.js");

//post review route
router.post("/", isLoggedIn , validateReview, wrapAsync(reviewConroller.createReview));
  
// delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor , wrapAsync(reviewConroller.deleteReview));

  module.exports = router;