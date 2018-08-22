const config = {};

// Email sending
config.email = {
    smtpServer: 'smtps://'+encodeURIComponent('no-reply@meater.com')+':'+encodeURIComponent('<password here>')+'@smtp.gmail.com',
    shouldSendEmails: false
};

config.meaterWebsite = {
    portNumber: 18092
};

config.orderMangler = {
    portNumber: 18093,
    username: 'apptionadmin',
    password: 'feuding4)adverting'
};

config.bigCommerce = {
    oAuthCallbackServer: {
        portNumber: 18095
    },
    apiInfo: {
        logLevel: 'info',
        clientId: '',
        secret: '',
        callback: 'https://dev.meater.com/big-commerce-oauth-callback',
        responseType: 'json',
        apiVersion: 'v3',
        tokenPath: './inc/big-commerce-oauth-token'
    }
};

module.exports = config;
