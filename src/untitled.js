(params) => {

  const parameters = {};
  parameters.http_event = params.http_event;
  parameters.delete_original = false;
  parameters.replace_original = true;
  // parameters.text = '<string>';
  // parameters.attachments = (SELECT []);
  parameters.blocks = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "You've requested a PagerDuty override for " + params.start_date + "-" + params.end_date +
          params.start_time + "-" + params.end_time
		}
	},
  {
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"emoji": true,
						"text": "Submit"
					},
					"style": "primary",
					"value": "override_request_submission"
				}
			]
		}];
  parameters.response_type = 'ephemeral';
  
  return api.run('slack_webhook.respond_to_interaction', parameters);
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */