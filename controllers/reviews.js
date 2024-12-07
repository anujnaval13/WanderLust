const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = res.locals.currUser._id;
    console.log(newReview);
    listing.review.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("New review has been added: ", newReview);
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${req.params.id}`);
};

module.exports.deleteReview = async(req, res, next) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {review: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};