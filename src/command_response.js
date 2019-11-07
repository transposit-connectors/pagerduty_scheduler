(params) => {
  
  const parameters = {};
  parameters.http_event = params.http_event;
  parameters.text = 'hello, world!';
  parameters.blocks = [
		{
			"type": "section",
			"block_id": "section1234",
			"text": {
				"type": "mrkdwn",
				"text": "Pick a date for the deadline."
			},
			"accessory": {
				"type": "datepicker",
				"action_id": "datepicker123",
				"initial_date": "1990-04-28",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a date"
				}
			}
		}
	];
  parameters.response_type = 'ephemeral';
  
  return api.run('slack_webhook.respond_to_slash_command', parameters);
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */