"use strict";

const FS            = require('fs');
const Express       = require('express');
const Helmet        = require('helmet');
const BodyParser    = require('body-parser');

const Config        = require('./inc/config.js');

const app = Express();
app.disable('x-powered-by' );
app.set('view engine', 'ejs');
app.use(BodyParser.urlencoded({extended: true}));
app.use(Express.static('public'));
app.use(Helmet(
    { hsts: false } // We add the Strict-Transport-Security header in nginx, this stops us putting in another one
));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Home page
app.get('/', function(req, res) {
	return res.render('home', {pageTitle: 'Meater Customer Support'});
});
// A1 General Enquiry
app.get('/a1-general-enquiry', function(req, res) {
    return res.render('a1-general-enquiry', {pageTitle: 'General Enquiry Questions'});
});
// A1 Temperature Specifications & Dimensions
app.get('/a1-specs-dimensions', function(req, res) {
    return res.render('a1-specs-dimensions', {pageTitle: 'Temperature Specifications & Dimensions'});
});
// A1 Meater Block Availability
app.get('/a1-meater-block-availability', function(req, res) {
    return res.render('a1-meater-block-availability', {pageTitle: 'Meater Block Availability'});
});
// A1 Block Probe Shipping
app.get('/a1-block-probe-shipping', function(req, res) {
    return res.render('a1-block-probe-shipping', {pageTitle: 'Block Probe Shipping'});
});
// A1 Meater Block Delivery
app.get('/a1-meater-delivery', function(req, res) {
    return res.render('a1-meater-delivery', {pageTitle: 'Meater Block Delivery'});
});
// A1 Range of Meater Probe
app.get('/a1-meater-range', function(req, res) {
    return res.render('a1-meater-range', {pageTitle: 'Range of Meater Probe'});
});
// A1 Meater Usage
app.get('/a1-meater-usage', function(req, res) {
    return res.render('a1-meater-usage', {pageTitle: 'Meater Usage'});
});
// A1 Thank You Page
app.get('/a1-thank-you', function(req, res) {
    return res.render('a1-thank-you', {pageTitle: 'Thank You'});
});
// A1 General Contact Form
app.get('/a1-contact-form', function(req, res) {
    return res.render('a1-contact-form', {pageTitle: 'General Contact Form'});
});
// A2 Press Type Selector
app.get('/a2-press-type-select', function(req, res) {
    return res.render('a2-press-type-select', {pageTitle: 'Press Type Selector'});
});
// A2 Journalists Form
app.get('/a2-journalist-form', function(req, res) {
    return res.render('a2-journalist-form', {pageTitle: 'Journalists Form'});
});
// A2 Influencers Form
app.get('/a2-influencer-form', function(req, res) {
    return res.render('a2-influencer-form', {pageTitle: 'Influencers Form'});
});
// A2 Thank You Page
app.get('/a2-thank-you', function(req, res) {
    return res.render('a2-thank-you', {pageTitle: 'Thank You'});
});
// A3 Order Type Selector
app.get('/a3-orders-select', function(req, res) {
    return res.render('a3-orders-select', {pageTitle: 'Order Type Selector'});
});
// A3 Order Timeline Selector
app.get('/a3-order-timeline', function(req, res) {
    return res.render('a3-order-timeline', {pageTitle: 'Order Timeline Selector'});
});
// A3 Order Tracking Details
app.get('/a3-order-tracking', function(req, res) {
    return res.render('a3-order-tracking', {pageTitle: 'Order Tracking Details'});
});
// A3 Order Returns Details
app.get('/a3-order-return', function(req, res) {
    return res.render('a3-order-return', {pageTitle: 'Order Returns Details'});
});
// A3 Order Returns Form
app.get('/a3-order-return-form', function(req, res) {
    return res.render('a3-order-return-form', {pageTitle: 'Order Returns Form'});
});
// A3 Order Cancellation Details
app.get('/a3-order-cancellation', function(req, res) {
    return res.render('a3-order-cancellation', {pageTitle: 'Order Cancellation Details'});
});
// A3 Order Cancellation Form
app.get('/a3-order-cancellation-form', function(req, res) {
    return res.render('a3-order-cancellation-form', {pageTitle: 'Order Cancellation Form'});
});
// A3 Order Status Details
app.get('/a3-order-status', function(req, res) {
    return res.render('a3-order-status', {pageTitle: 'Order Status Details'});
});
// A3 Order Location Select
app.get('/a3-order-location', function(req, res) {
    return res.render('a3-order-location', {pageTitle: 'Order Location Select'});
});
// A3 Order Request Form
app.get('/a3-order-request-form', function(req, res) {
    return res.render('a3-order-request-form', {pageTitle: 'Order Request Form'});
});
// A4 Sales Select 1
app.get('/a4-sales-select-1', function(req, res) {
    return res.render('a4-sales-select-1', {pageTitle: 'Sales Select 1'});
});
// A4 Sales Select 2
app.get('/a4-sales-select-2', function(req, res) {
    return res.render('a4-sales-select-2', {pageTitle: 'Sales Select 2'});
});
// A4 Sales Select 3
app.get('/a4-sales-select-3', function(req, res) {
    return res.render('a4-sales-select-3', {pageTitle: 'Sales Select 3'});
});
// A4 Sales Meater Block Order Form
app.get('/a4-sales-meater-order-form', function(req, res) {
    return res.render('a4-sales-meater-order-form', {pageTitle: 'Sales Meater Block Order Form'});
});
// A4 Sales Integration Form
app.get('/a4-sales-integration-form', function(req, res) {
    return res.render('a4-sales-integration-form', {pageTitle: 'Sales Integration Form'});
});
// A4 Sales Reseller Form
app.get('/a4-sales-reseller-form', function(req, res) {
    return res.render('a4-sales-reseller-form', {pageTitle: 'Sales Reseller Form'});
});
// A5 Technical Support A2
app.get('/a5-technical-support-a2', function(req, res) {
    return res.render('a5-technical-support-a2', {pageTitle: 'Technical Support'});
});
// A5 Technical Support A3
app.get('/a5-technical-support-range-a3', function(req, res) {
    return res.render('a5-technical-support-range-a3', {pageTitle: 'Technical Support'});
});
// A5 Technical Support A4
app.get('/a5-technical-support-range-form-a4', function(req, res) {
    return res.render('a5-technical-support-range-form-a4', {pageTitle: 'Technical Support'});
});
// A5 Technical Support B3
app.get('/a5-technical-support-connectivity-b3', function(req, res) {
    return res.render('a5-technical-support-connectivity-b3', {pageTitle: 'Technical Support'});
});
// A5 Technical Support B4-1
app.get('/a5-technical-support-connectivity-b4-1', function(req, res) {
    return res.render('a5-technical-support-connectivity-b4-1', {pageTitle: 'Technical Support'});
});
// A5 Technical Support B4-2
app.get('/a5-technical-support-connectivity-b4-2', function(req, res) {
    return res.render('a5-technical-support-connectivity-b4-2', {pageTitle: 'Technical Support'});
});
// A5 Technical Support B5
app.get('/a5-technical-support-connectivity-b5', function(req, res) {
    return res.render('a5-technical-support-connectivity-b5', {pageTitle: 'Technical Support'});
});
// A5 Technical Support C3
app.get('/a5-technical-support-results-c3', function(req, res) {
    return res.render('a5-technical-support-results-c3', {pageTitle: 'Technical Support'});
});
// A5 Technical Support C4
app.get('/a5-technical-support-results-c4', function(req, res) {
    return res.render('a5-technical-support-results-c4', {pageTitle: 'Technical Support'});
});
// A5 Technical Support D3
app.get('/a5-technical-support-temperature-sensors-d3', function(req, res) {
    return res.render('a5-technical-support-temperature-sensors-d3', {pageTitle: 'Technical Support'});
});
// A5 Technical Support D4
app.get('/a5-technical-support-temperature-sensors-d4-1', function(req, res) {
    return res.render('a5-technical-support-temperature-sensors-d4-1', {pageTitle: 'Technical Support'});
});
// A5 Technical Support D4
app.get('/a5-technical-support-temperature-sensors-d4-2', function(req, res) {
    return res.render('a5-technical-support-temperature-sensors-d4-2', {pageTitle: 'Technical Support'});
});
// A5 Technical Support D5
app.get('/a5-technical-support-temperature-sensors-d5', function(req, res) {
    return res.render('a5-technical-support-temperature-sensors-d5', {pageTitle: 'Technical Support'});
});
// A5 Technical Support E3
app.get('/a5-technical-support-app-assistance-e3', function(req, res) {
    return res.render('a5-technical-support-app-assistance-e3', {pageTitle: 'Technical Support'});
});
// A5 Technical Support E4
app.get('/a5-technical-support-app-assistance-e4-1', function(req, res) {
    return res.render('a5-technical-support-app-assistance-e4-1', {pageTitle: 'Technical Support'});
});
// A5 Technical Support E4
app.get('/a5-technical-support-app-assistance-e4-2', function(req, res) {
    return res.render('a5-technical-support-app-assistance-e4-2', {pageTitle: 'Technical Support'});
});
// A5 Technical Support E5
app.get('/a5-technical-support-app-assistance-e5', function(req, res) {
    return res.render('a5-technical-support-app-assistance-e5', {pageTitle: 'Technical Support'});
});
// A5 Technical Support F3
app.get('/a5-technical-support-other-f3', function(req, res) {
    return res.render('a5-technical-support-other-f3', {pageTitle: 'Technical Support'});
});
// A6 Suggestions Form
app.get('/a6-suggestions-form', function(req, res) {
    return res.render('a6-suggestions-form', {pageTitle: 'Suggestions Form'});
});
// thank you page
app.get('/contact-thank-you', function(req, res) {
    return res.render('contact-thank-you', {pageTitle: 'Thank You'});
});

// basic form handler -- need to expand in to api integration
app.all('/contact-form', async function(req, res) {
    const postBody = req.body;
    console.log(postBody);
    res.redirect('/contact-thank-you');
});

// Handle 404
app.use(function(req, res) {
	res.status(400);
	return res.render('404.ejs', {pageTitle: '404: File Not Found'});
});
// Handle 500
app.use(function(error, req, res, next) {
	res.status(500);
	return res.render('500.ejs', {pageTitle:'500: Internal Server Error', error: error});
});

// Start the server
app.listen(Config.supportWebsite.portNumber);
console.log('MEATER Support Website running on port '+Config.supportWebsite.portNumber);
