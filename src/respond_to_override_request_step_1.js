(params) => {
  
  const parameters = {};
  parameters.http_event = params.http_event;
  parameters.blocks = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "You've requested a PagerDuty override, when would you like the override for?"
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "datepicker",
				"action_id": "end_date",
				"placeholder": {
					"type": "plain_text",
					"text": "End date"
				}
			}
          ]
    }];
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