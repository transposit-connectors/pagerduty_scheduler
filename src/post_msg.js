(params) => {

  webhook_url = params.webhook_url;
  text = "hello world";
  
  return api.run("slack_webhook.post_message_to_incoming_webhook", webhook_url, text);
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */