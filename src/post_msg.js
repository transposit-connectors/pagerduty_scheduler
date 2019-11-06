(params) => {

  var webhook_url = params.webhook_url;
  var text = 'hello world';
  var blocks = [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "This is a plain text section block.",
				"emoji": true
			}
		}
	];
  
  return api.run("slack_webhook.post_message_to_incoming_webhook", {webhook_url, text});
}