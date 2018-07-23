$(document).ready(function() {
    //request
    $.getJSON( "json/example.json").done(function (data) {
        $('.json-renderer').jsonViewer(data,{collapsed: false, withQuotes: true});
    });    
    $.getJSON( "json/body-schedule_train_thirdparty.json").done(function (data) {
        $('.body-schedule_train_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    }); 
    $.getJSON( "json/body-seating_thirdparty.json").done(function (data) {
        $('.body-seating_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    }); 
    $.getJSON( "json/body-payment_thirdparty.json").done(function (data) {
        $('.body-payment_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    }); 
    $.getJSON( "json/body-book_thirdparty.json").done(function (data) {
        $('.body-book_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/body-token_client.json").done(function (data) {
        $('.body-token_client').jsonViewer(data,{collapsed: false, withQuotes: true});
    });



    //success
    $.getJSON( "json/success-token_client.json").done(function (data) {
        $('.success-token_client').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-client_balance.json").done(function (data) {
        $('.success-client_balance').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-book_thirdparty.json").done(function (data) {
        $('.success-book_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-cancellation_thirdparty.json").done(function (data) {
        $('.success-cancellation_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-book_info_thirdparty.json").done(function (data) {
        $('.success-book_info_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-payment_thirdparty.json").done(function (data) {
        $('.success-payment_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-seating_thirdparty.json").done(function (data) {
        $('.success-seating_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-autocomplete_train_thirdparty.json").done(function (data) {
        $('.success-autocomplete_train_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-schedule_thirdparty.json").done(function (data) {
        $('.success-schedule_thirdparty').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/success-home.json").done(function (data) {
        $('.success-home').jsonViewer(data,{collapsed: false, withQuotes: true});
    });

    //error
    $.getJSON( "json/invalid_client.json").done(function (data) {
        $('.invalid_client').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/invalid_request.json").done(function (data) {
        $('.invalid_request').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/unsupported_grant_type.json").done(function (data) {
        $('.unsupported_grant_type').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/inquiry.json").done(function (data) {
        $('.inquiry').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/payment.json").done(function (data) {
        $('.payment').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/invalid_verification.json").done(function (data) {
        $('.invalid_verification').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/invalid_request2.json").done(function (data) {
        $('.invalid_request2').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
    $.getJSON( "json/invalid_get.json").done(function (data) {
        $('.invalid_get').jsonViewer(data,{collapsed: false, withQuotes: true});
    });
});