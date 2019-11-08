(params) => {

  const parameters = {};
  parameters.http_event = params.http_event;
  parameters.delete_original = false;
  parameters.replace_original = false;
  // parameters.text = '<string>';
  // parameters.attachments = (SELECT []);
  parameters.blocks = [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Someone has request on-call coverage for " + params.start_date + " at " + params.start_time 
          + " until " + params.end_date + " at " + params.end_time + ". Can you take it?"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Yes",
					"emoji": true
				},
				"value": "click_me_123"
			}
		}
	];
  parameters.response_type = 'in_channel';
  
  return api.run('slack_webhook.respond_to_interaction', parameters);
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */