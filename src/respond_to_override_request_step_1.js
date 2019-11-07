(params) => {
  const parameters = {};
  parameters.http_event = params.http_event;
  // parameters.text = '<string>';
  parameters.response_type = 'ephemeral';  
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

  return api.run('slack_webhook.respond_to_app_action', parameters);
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */