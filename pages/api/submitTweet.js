
export default function handler(req, res) {
    if (req.method === 'POST') {
        var Twit = require('twit')

        var T = new Twit({
        consumer_key:         '...',
        consumer_secret:      '...',
        access_token:         '...',
        access_token_secret:  '...',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL:            true,     // optional - requires SSL certificates to be valid.
        })

        //
        //  tweet 'hello world!'
        //
        T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
        console.log(data)
        })
        res.status(200).json({ name: 'John Doe' })  
    } 
    else 
    {
        res.status(201).json({ name: 'sample' })  
    }
  
}
