(params) => {

  var webhook_url = params.webhook_url;
  var text = 'hello world';
  
  return api.run("slack_webhook.post_message_to_incoming_webhook", {webhook_url, text});
}